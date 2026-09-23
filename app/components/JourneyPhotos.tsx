import Image from "next/image";

export type JourneyPhoto = {
  src: string;
  alt: string;
};

export default function JourneyPhotos({
  photos,
  tone = "stone",
}: {
  photos: [JourneyPhoto, JourneyPhoto, JourneyPhoto];
  tone?: "stone" | "sand" | "earth";
}) {
  const wash = {
    stone: "bg-stone/10",
    sand: "bg-sand/10",
    earth: "bg-earth/10",
  }[tone];

  return (
    <>
      <div className={`grid h-[21.5rem] grid-cols-[1.4fr_1fr] grid-rows-2 gap-1.5 md:hidden`}>
        <div className={`relative row-span-2 overflow-hidden rounded-sm ${wash}`}>
          <Image src={photos[0].src} alt={photos[0].alt} fill className="object-cover" sizes="58vw" />
        </div>
        <div className={`relative overflow-hidden rounded-sm ${wash}`}>
          <Image src={photos[1].src} alt={photos[1].alt} fill className="object-cover" sizes="42vw" />
        </div>
        <div className={`relative overflow-hidden rounded-sm ${wash}`}>
          <Image src={photos[2].src} alt={photos[2].alt} fill className="object-cover" sizes="42vw" />
        </div>
      </div>

      <div className="hidden grid-cols-1 gap-6 md:grid">
        <div className={`relative aspect-[4/5] overflow-hidden rounded-sm ${wash}`}>
          <Image src={photos[0].src} alt={photos[0].alt} fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" />
        </div>
        <div className={`relative aspect-[4/3] overflow-hidden rounded-sm ${wash}`}>
          <Image src={photos[1].src} alt={photos[1].alt} fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" />
        </div>
        <div className={`relative aspect-[4/3] overflow-hidden rounded-sm ${wash}`}>
          <Image src={photos[2].src} alt={photos[2].alt} fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" />
        </div>
      </div>
    </>
  );
}
