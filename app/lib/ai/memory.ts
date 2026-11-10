/**
 * Bounded In-Memory Conversation History Manager
 *
 * Keeps recent dialogue context per customer/session without unbounded token growth.
 * Suitable for prototype & testing. In a scaled serverless environment, this can be
 * backed by Upstash Redis or KV store.
 */

export type ChatRole = "user" | "assistant" | "system";

export interface MessageTurn {
  role: ChatRole;
  content: string;
  timestamp: number;
}

const MAX_TURNS_PER_SESSION = 6; // Keep up to last 3 user + 3 assistant messages
const MAX_MESSAGE_CHAR_LENGTH = 600; // Truncate oversized user input
const SESSION_TTL_MS = 2 * 60 * 60 * 1000; // 2 hours inactivity expiration

class ConversationMemory {
  private store: Map<string, MessageTurn[]> = new Map();

  /**
   * Sanitizes user input to prevent excessive prompt sizes
   */
  public sanitizeInput(text: string): string {
    const trimmed = text.trim();
    if (trimmed.length > MAX_MESSAGE_CHAR_LENGTH) {
      return trimmed.slice(0, MAX_MESSAGE_CHAR_LENGTH) + "...";
    }
    return trimmed;
  }

  /**
   * Gets active recent turns for a given customer identifier
   */
  public getHistory(sessionId: string): MessageTurn[] {
    const history = this.store.get(sessionId);
    if (!history) return [];

    const now = Date.now();
    // Filter out turns older than TTL
    const activeTurns = history.filter((turn) => now - turn.timestamp < SESSION_TTL_MS);

    if (activeTurns.length === 0) {
      this.store.delete(sessionId);
      return [];
    }

    // Keep only the most recent N turns
    const bounded = activeTurns.slice(-MAX_TURNS_PER_SESSION);
    this.store.set(sessionId, bounded);
    return bounded;
  }

  /**
   * Adds a turn to the session history
   */
  public addTurn(sessionId: string, role: ChatRole, content: string): void {
    const history = this.getHistory(sessionId);
    history.push({
      role,
      content,
      timestamp: Date.now(),
    });
    this.store.set(sessionId, history.slice(-MAX_TURNS_PER_SESSION));
  }

  /**
   * Clears conversation history for a session (e.g. for testing)
   */
  public clearSession(sessionId: string): void {
    this.store.delete(sessionId);
  }
}

export const conversationMemory = new ConversationMemory();
