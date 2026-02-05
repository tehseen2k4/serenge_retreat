"use client";

export default function Footer() {
  return (
    <footer className="bg-paper py-20 px-6 md:px-12 border-t border-divider mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        
        {/* Right Section: Contact & Info (Visual priority first on mobile, but second in grid for desktop logic, actually keeping left-right standard) */}
        
        <div className="space-y-8">
            <h2 className="text-lg font-serif text-ink tracking-wide">SERENGÉ RETREAT</h2>
            <div className="space-y-2 text-ink-soft font-light leading-relaxed">
                <p>Khosar Gang Valley</p>
                <p>Shigar, Gilgit-Baltistan</p>
                <p>Pakistan</p>
            </div>
            <div className="pt-4">
                <a href="mailto:hello@serenge.com" className="text-earth hover:text-ink transition-colors duration-300 border-b border-earth/30 pb-1">
                    hello@serenge.com
                </a>
            </div>
        </div>

        {/* Left Section: Newsletter mockup */}
        <div className="space-y-6">
            <p className="text-ink-soft italic font-light">
                "Silence is the language of God, all else is poor translation."
            </p>
            <form className="flex flex-col gap-4 max-w-sm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="email" className="sr-only">Email for updates</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="Receive quiet updates" 
                    className="bg-transparent border-b border-border py-2 text-ink outline-none focus:border-earth transition-colors duration-300 placeholder:text-ink-muted/50"
                />
                <button type="submit" className="text-left text-xs uppercase tracking-widest text-ink-muted hover:text-earth transition-colors duration-300 mt-2">
                    Subscribe
                </button>
            </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-divider flex flex-col md:flex-row justify-between text-xs text-ink-muted tracking-wide">
          <p>© {new Date().getFullYear()} Serengé Retreat. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span>Instagram</span>
             <span>FaceBook</span>
          </div>
      </div>
    </footer>
  );
}
