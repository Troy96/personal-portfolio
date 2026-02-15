import type { Interest, TravelPhoto } from "@/types";

export const interests: Interest[] = [
  {
    id: "int-1",
    name: "Reading",
    description:
      "Non-fiction, finance, and travel magazines. Authors I keep going back to: George Orwell, Yuval Noah Harari, Varun Mayya, Naval Ravikant.",
    icon: "BookOpen",
  },
  {
    id: "int-2",
    name: "Content Creation & Consumption",
    description:
      "Creating on X, LinkedIn, and Instagram. Mindfully consuming and saving content categorically for a second brain I plan to build.",
    icon: "PenLine",
  },
  {
    id: "int-3",
    name: "Side Projects & Solopreneurship",
    description:
      "I have wild ideas and in today's AI market it's addictive to convert them into something real. Building something that turns big is the goal.",
    icon: "Rocket",
  },
  {
    id: "int-4",
    name: "Writing, Language & Humour",
    description:
      "I write daily about my thoughts and priorities. I use humour in everyday conversations to make things interesting. Might try standup comedy someday.",
    icon: "Laugh",
  },
  {
    id: "int-5",
    name: "Travelling",
    description:
      "Solo and family trips to mainstream and off-beat places within the country so far. Planning to go overseas this year.",
    icon: "Camera",
  },
  {
    id: "int-6",
    name: "Series & Movies",
    description:
      "Avid watcher with a never-ending watchlist. War, crime, mafia, mystery, and black comedy are my favourite themes.",
    icon: "Film",
  },
  {
    id: "int-7",
    name: "Psychology & Philosophy",
    description:
      "Recently picked up as I crossed quarter life. Consuming works of the greats in the fields, yet to form my own takes.",
    icon: "Brain",
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
