"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";
import type { TravelPhoto } from "@/types";
import { cn } from "@/lib/utils";

function Lightbox({
  photo,
  onClose,
}: {
  photo: TravelPhoto;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onMouseDown={onClose}
    >
      <button
        onMouseDown={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors cursor-pointer"
        aria-label="Close"
      >
        <X size={28} />
      </button>
      <div
        className="relative max-h-[85vh] max-w-[90vw]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-h-[85vh] max-w-full rounded-lg object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
          <p className="text-sm font-semibold">{photo.location}</p>
          <p className="text-xs text-white/70">{photo.year}</p>
        </div>
      </div>
    </div>,
    document.body
  );
}

export function PhotoGrid({ photos }: { photos: TravelPhoto[] }) {
  const [selected, setSelected] = useState<TravelPhoto | null>(null);
  const [activeYear, setActiveYear] = useState<"all" | number>("all");

  const years = useMemo(
    () => [...new Set(photos.map((p) => p.year))].sort((a, b) => b - a),
    [photos]
  );

  const filtered =
    activeYear === "all" ? photos : photos.filter((p) => p.year === activeYear);

  const close = useCallback(() => setSelected(null), []);

  return (
    <>
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveYear("all")}
          className={cn(
            "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all cursor-pointer",
            activeYear === "all"
              ? "bg-[var(--accent)] text-white shadow-md shadow-[var(--accent-shadow)]"
              : "border border-neutral-200 text-neutral-600 hover:border-[var(--accent-border-subtle)] hover:text-[var(--accent)] dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-[var(--accent-border-subtle)] dark:hover:text-[var(--accent)]"
          )}
        >
          All
        </button>
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={cn(
              "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all cursor-pointer",
              activeYear === year
                ? "bg-[var(--accent)] text-white shadow-md shadow-[var(--accent-shadow)]"
                : "border border-neutral-200 text-neutral-600 hover:border-[var(--accent-border-subtle)] hover:text-[var(--accent)] dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-[var(--accent-border-subtle)] dark:hover:text-[var(--accent)]"
            )}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((photo, i) => (
          <div
            key={photo.id}
            onMouseDown={() => setSelected(photo)}
            className="group relative mb-4 cursor-pointer overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800 break-inside-avoid"
          >
            <div className={i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectPosition: photo.objectPosition || "top" }}
                className="object-cover transition-all duration-500 group-hover:scale-110 grayscale-[0.6] contrast-[1.1] brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 p-4 text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-sm font-semibold">{photo.location}</p>
              <p className="text-xs text-white/70">{photo.year}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && <Lightbox photo={selected} onClose={close} />}
    </>
  );
}
