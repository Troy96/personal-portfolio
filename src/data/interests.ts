import type { Interest, TravelPhoto } from "@/types";

export const interests: Interest[] = [
  {
    id: "int-1",
    name: "Open Source",
    description:
      "Contributing to and maintaining open-source projects. I believe in building in public and sharing knowledge.",
    icon: "Github",
  },
  {
    id: "int-2",
    name: "Travel & Photography",
    description:
      "Exploring new places and capturing moments. I've visited 15+ countries and counting.",
    icon: "Camera",
  },
  {
    id: "int-3",
    name: "Reading",
    description:
      "Avid reader of technical books, sci-fi, and philosophy. Always have a book on my nightstand.",
    icon: "BookOpen",
  },
  {
    id: "int-4",
    name: "Running",
    description:
      "Long-distance runner — it's my meditation. Training for my next half marathon.",
    icon: "Activity",
  },
  {
    id: "int-5",
    name: "Music",
    description:
      "Playing guitar and discovering new artists. Music is the soundtrack to my coding sessions.",
    icon: "Music",
  },
  {
    id: "int-6",
    name: "Teaching",
    description:
      "Sharing knowledge through blog posts, talks, and mentoring. Teaching is the best way to learn.",
    icon: "Presentation",
  },
];

export const travelPhotos: TravelPhoto[] = [
  {
    id: "travel-1",
    src: "/images/travel/japan.jpg",
    alt: "Temple in Kyoto, Japan",
    location: "Kyoto, Japan",
    year: 2023,
  },
  {
    id: "travel-2",
    src: "/images/travel/iceland.jpg",
    alt: "Northern lights in Iceland",
    location: "Reykjavik, Iceland",
    year: 2022,
  },
  {
    id: "travel-3",
    src: "/images/travel/portugal.jpg",
    alt: "Streets of Lisbon, Portugal",
    location: "Lisbon, Portugal",
    year: 2023,
  },
  {
    id: "travel-4",
    src: "/images/travel/newzealand.jpg",
    alt: "Mountains in New Zealand",
    location: "Queenstown, New Zealand",
    year: 2021,
  },
  {
    id: "travel-5",
    src: "/images/travel/morocco.jpg",
    alt: "Markets of Marrakech",
    location: "Marrakech, Morocco",
    year: 2022,
  },
  {
    id: "travel-6",
    src: "/images/travel/norway.jpg",
    alt: "Fjords of Norway",
    location: "Bergen, Norway",
    year: 2024,
  },
];
