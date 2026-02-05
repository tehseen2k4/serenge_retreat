"use client";

export default function StoryPage() {
    return (
        <div className="bg-paper min-h-screen py-32 px-6">
            <article className="max-w-3xl mx-auto space-y-12">
                <header className="space-y-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif text-ink">The Long Way Home</h1>
                    <div className="w-24 h-[1px] bg-earth mx-auto" />
                </header>

                <div className="prose prose-stone prose-lg mx-auto text-ink-soft font-light">
                    <p>
                        I was born in this valley. As a boy, I watched trekkers come from worlds
                        I could only imagine. I carried their bags as a high-altitude porter,
                        feeling the weight of their belongings and the lightness of their awe.
                    </p>
                    <p>
                        I left to see those worlds. I lived in cities that never slept, where time
                        was a currency to be spent, not a river to flow with. I became successful
                        by the definitions of that world, but I found myself hollow.
                    </p>
                    <p>
                        Serengé is my return.
                    </p>
                    <p>
                        It is not a business. It is a sharing of the peace that saved me.
                        Every stone in these walls was placed with the intention of gratitude.
                        When you come here, you are not a tourist. You are a guest in my home,
                        and a witness to the beauty of my people.
                    </p>
                </div>

                <div className="pt-12 border-t border-earth/20 text-center">
                    <p className="font-serif italic text-ink text-xl">"To lose your way is to find the path."</p>
                    <p className="mt-4 text-sm text-earth uppercase tracking-widest">— Tehseen, Founder</p>
                </div>
            </article>
        </div>
    );
}
