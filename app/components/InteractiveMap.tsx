export default function InteractiveMap() {
    return (
        <section className="w-full h-[500px] md:h-[600px] bg-stone/10 relative overflow-hidden rounded-2xl border border-earth/20 shadow-xl group">
            {/* Map Iframe (No API Key needed for basic embed) */}
            <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?q=35.515129,75.631949&z=12&output=embed"
                className="filter grayscale contrast-[0.9] opacity-80 hover:opacity-100 transition-all duration-700"
            >
            </iframe>

            {/* Overlay Text */}
            <div className="absolute bottom-8 left-8 bg-paper/90 backdrop-blur-md p-6 max-w-xs border border-earth/10 pointer-events-none">
                <h3 className="font-serif text-ink text-xl">The Location</h3>
                <p className="text-earth text-xs uppercase tracking-widest mt-1 mb-2">35.5151° N, 75.6319° E</p>
                <p className="text-ink-soft text-sm font-light">
                    Alchori Village, Shigar Valley. <br />
                    Surrounded by silence.
                </p>
            </div>
        </section>
    );
}
