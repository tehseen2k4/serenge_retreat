import Breathwork from "../components/Breathwork";
import TheRelease from "../components/TheRelease";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Digital Sanctuary | Interactive Mountain Meditation — Serengé Retreat",
    description: "Experience the stillness of Shigar Valley through our interactive digital sanctuary. Practice mountain breathwork and sacrificial rituals designed to center your soul.",
    openGraph: {
        title: "Digital Sanctuary | Interactive Rituals by Serengé Retreat",
        description: "Connect with the Karakoram from anywhere. Interactive breathwork and release rituals.",
    }
};

export default function DigitalSanctuaryPage() {
    return (
        <div className="bg-canvas min-h-screen pt-32 pb-20 px-6">
            <article className="max-w-5xl mx-auto space-y-32">

                {/* Header */}
                <header className="text-center space-y-6 max-w-3xl mx-auto">
                    <p className="text-earth text-xs uppercase tracking-[0.4em] font-medium">Digital Presence</p>
                    <h1 className="text-4xl md:text-7xl font-serif text-ink italic leading-tight">
                        THE DIGITAL <br /> SANCTUARY
                    </h1>
                    <p className="text-xl text-ink-soft font-light leading-relaxed">
                        A space for those who cannot reach the valley today. Use these tools to cultivate the Serengé state of mind — a blend of conscious breath and intentional release.
                    </p>
                </header>

                {/* Breathwork */}
                <section className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-sm uppercase tracking-widest text-earth">Tool 01</h2>
                            <h3 className="text-4xl font-serif text-ink italic text-balance">Breathe with Shigar</h3>
                            <p className="text-ink-soft font-light leading-relaxed">
                                Our signature square-breathing ritual scaled to the rhythm of high-altitude stillness. Four seconds to inhale the mountain air, four to hold the clarity, four to release the tension, and four to rest in the pause.
                            </p>
                            <ul className="text-sm text-ink-soft/70 space-y-2 font-light italic">
                                <li>✓ Calms the nervous system</li>
                                <li>✓ Prepares the body for altitude</li>
                                <li>✓ Cultivates digital mindfulness</li>
                            </ul>
                        </div>
                        <div className="w-full">
                            <Breathwork />
                        </div>
                    </div>
                </section>

                <div className="w-24 h-px bg-earth/10 mx-auto" />

                {/* Release */}
                <section className="space-y-12">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 w-full">
                            <TheRelease />
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <h2 className="text-sm uppercase tracking-widest text-earth">Tool 02</h2>
                            <h3 className="text-4xl font-serif text-ink italic text-balance">The Ritual of Release</h3>
                            <p className="text-ink-soft font-light leading-relaxed">
                                Inspired by the burning rituals used for centuries to cleanse energy. In the digital valley, we believe that named burdens lose their weight. Type what you wish to leave behind and watch it dissolve into the Karakoram winds.
                            </p>
                            <ul className="text-sm text-ink-soft/70 space-y-2 font-light italic">
                                <li>✓ Symbolic emotional cleansing</li>
                                <li>✓ Intentional journaling tool</li>
                                <li>✓ Encourages let-go mentality</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Closing */}
                <footer className="text-center space-y-8 py-24 border-t border-earth/10">
                    <p className="font-serif italic text-2xl text-ink max-w-xl mx-auto">
                        These tools are only a bridge. <br /> The true sanctuary is waiting for you in the valley.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="/journeys" className="px-8 py-4 bg-ink text-white uppercase tracking-widest text-xs hover:bg-earth transition-colors">
                            Explore Journeys
                        </a>
                        <a href="/stay" className="px-8 py-4 border border-ink/20 text-ink uppercase tracking-widest text-xs hover:border-earth hover:text-earth transition-colors">
                            Book Your Stay
                        </a>
                    </div>
                </footer>

            </article>
        </div>
    );
}
