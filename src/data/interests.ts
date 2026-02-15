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
    id: "moment-1",
    src: "/images/moments/bike-ride.jpg",
    alt: "Bike ride vibes",
    location: "Bir, Himachal Pradesh",
    year: 2025,
  },
  {
    id: "moment-2",
    src: "/images/moments/venetian-mall.jpg",
    alt: "At a Venetian-style mall",
    location: "Noida",
    year: 2025,
  },
  {
    id: "moment-3",
    src: "/images/moments/dal-lake.jpg",
    alt: "Shikara ride on Dal Lake",
    location: "Srinagar, Kashmir",
    year: 2024,
  },
  {
    id: "moment-4",
    src: "/images/moments/mountain-trek.jpg",
    alt: "Mountain trekking",
    location: "Kashmir",
    year: 2024,
  },
  {
    id: "moment-5",
    src: "/images/moments/burwa-himachal.jpg",
    alt: "At Burwa",
    location: "Burwa, Himachal Pradesh",
    year: 2022,
  },
  {
    id: "moment-6",
    src: "/images/moments/goa-market.jpg",
    alt: "Beach market vibes",
    location: "Goa",
    year: 2024,
    objectPosition: "bottom",
  },
  {
    id: "moment-7",
    src: "/images/moments/green-field.jpg",
    alt: "Standing on open greens",
    location: "Bir Biling, Himachal Pradesh",
    year: 2024,
  },
  {
    id: "moment-8",
    src: "/images/moments/hill-walk.jpg",
    alt: "Walking through a hill town",
    location: "Kanatal, Uttarakhand",
    year: 2024,
  },
  {
    id: "moment-9",
    src: "/images/moments/car-selfie.jpg",
    alt: "Stuck in Gurgaon traffic",
    location: "Gurgaon",
    year: 2025,
  },
  {
    id: "moment-10",
    src: "/images/moments/formal-mirror.jpg",
    alt: "Inside office before deployment",
    location: "Office",
    year: 2024,
  },
  {
    id: "moment-11",
    src: "/images/moments/mirror-selfie.jpg",
    alt: "Trying out fits before a meeting :D",
    location: "Gurgaon",
    year: 2024,
  },
];
