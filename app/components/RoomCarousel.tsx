"use client";

import { useState } from "react";
import Image from "next/image";
import { ROOMS_PDF } from "../lib/inquiry";

type RoomId = "deluxe" | "twin" | "hut";

const rooms: {
  id: RoomId;
  name: string;
  kicker: string;
  copy: string;
  photos: { src: string; alt: string }[];
}[] = [
  {
    id: "deluxe",
    name: "Baltoro Deluxe Room",
    kicker: "For two, or one who wants space",
    copy: "Inspired by the Baltoro. A wide bed, mountain cloth on the wall, and a window onto the fields.",
    photos: [
      { src: "/images/stay/rooms/deluxe-window.jpg", alt: "Deluxe room bed facing the orchard window" },
      { src: "/images/stay/rooms/deluxe-bed.jpg", alt: "Deluxe wooden bed with embroidered mountain hoops" },
      { src: "/images/stay/rooms/deluxe-bath.jpg", alt: "Deluxe bathroom with stone floor and wooden towel ladder" },
      { src: "/images/stay/rooms/deluxe-shower.jpg", alt: "Rain shower against mud plaster and bamboo shade" },
    ],
  },
  {
    id: "twin",
    name: "Arandu Twin Room",
    kicker: "Friends, family, travel companions",
    copy: "Two beds, poplar beams, and the same valley light. Built for people who want their own sleep and a shared view.",
    photos: [
      { src: "/images/stay/rooms/twin-sitting.jpg", alt: "Twin beds beside a mountain window and sitting corner" },
      { src: "/images/stay/rooms/twin-beds.jpg", alt: "Twin room looking out to trees and peaks" },
      { src: "/images/stay/rooms/twin-bath.jpg", alt: "Twin room bathroom with timber ceiling and rain shower" },
    ],
  },
  {
    id: "hut",
    name: "Riverside Hut",
    kicker: "Wood, river, and the mountain",
    copy: "A timber hut under the trees, with a deck over the Shigar River. The bed faces glass, water, and stone.",
    photos: [
      { src: "/images/stay/rooms/hut-deck.jpg", alt: "Hut deck looking across the Shigar River to the mountains" },
      { src: "/images/stay/rooms/hut-exterior.jpg", alt: "Riverside hut exterior under trees" },
      { src: "/images/stay/rooms/hut-interior.jpg", alt: "Hut bedroom with sliding glass to the river deck" },
      { src: "/images/stay/rooms/hut-bed.jpg", alt: "Sun on the hut bed and timber walls" },
    ],
  },
];

export default function RoomCarousel() {
  const [roomId, setRoomId] = useState<RoomId>("deluxe");
  const [shot, setShot] = useState(0);
  const room = rooms.find((r) => r.id === roomId) ?? rooms[0];
  const featured = room.photos[shot] ?? room.photos[0];

  const chooseRoom = (id: RoomId) => {
    setRoomId(id);
    setShot(0);
  };

  return (
    <div className="space-y-8">
      <div className="relative aspect-[16/7] overflow-hidden bg-stone/20">
        <Image
          src="/images/stay/rooms/lodge-path.jpg"
          alt="Stone path to Serenge Retreat beneath the Karakoram"
          fill
          className="object-cover object-[center_70%]"
          sizes="100vw"
          priority
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {rooms.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => chooseRoom(item.id)}
            className={`px-4 py-2 text-[11px] uppercase tracking-[0.16em] transition-colors ${
              roomId === item.id ? "bg-earth text-paper" : "bg-paper text-ink-soft hover:text-earth"
            }`}
          >
            {item.name.replace(" Room", "").replace("Baltoro ", "").replace("Arandu ", "")}
          </button>
        ))}
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-4">
          <p className="text-[10px] uppercase tracking-[0.22em] text-earth">{room.kicker}</p>
          <h4 className="font-serif text-3xl italic text-ink">{room.name}</h4>
          <p className="max-w-sm font-light leading-relaxed text-ink-soft">{room.copy}</p>
          <a
            href={ROOMS_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[10px] uppercase tracking-widest text-earth underline underline-offset-4"
          >
            Full room sheet (PDF)
          </a>
        </div>

        <div className="space-y-3 lg:col-span-8">
          <div className="relative aspect-[16/10] overflow-hidden bg-stone/20">
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
          </div>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {room.photos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setShot(i)}
                className={`relative aspect-[4/3] overflow-hidden ${i === shot ? "ring-2 ring-earth ring-offset-2 ring-offset-canvas" : "opacity-80 hover:opacity-100"}`}
                aria-label={photo.alt}
                aria-pressed={i === shot}
              >
                <Image src={photo.src} alt="" fill className="object-cover" sizes="180px" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
