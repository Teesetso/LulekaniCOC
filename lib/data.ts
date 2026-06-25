import { BlogPost, ChurchEvent } from "@/types/content";

export const churchEvents: ChurchEvent[] = [
  {
    id: "ev-1",
    title: "Sunday Worship Service",
    description: "Join us for worship, prayer, and teaching.",
    category: "worship",
    location: "Main Sanctuary",
    date: "2026-07-05",
    time: "09:00",
    streamUrl: "https://youtube.com/live",
  },
  {
    id: "ev-2",
    title: "Youth Fellowship Night",
    description: "A vibrant evening for youth connection and discipleship.",
    category: "youth",
    location: "Youth Hall",
    date: "2026-07-10",
    time: "18:00",
  },
  {
    id: "ev-3",
    title: "Community Outreach",
    description: "Serving families across our community.",
    category: "community",
    location: "Lulekani Community Center",
    date: "2026-07-15",
    time: "10:00",
  },
  {
    id: "ev-4",
    title: "Midweek Prayer Gathering",
    description: "Come and stand together in prayer.",
    category: "prayer",
    location: "Prayer Room",
    date: "2026-07-08",
    time: "17:30",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "walking-in-faith",
    title: "Walking in Faith in 2026",
    excerpt: "Practical encouragement for faith-filled living in a fast world.",
    content:
      "Faith remains our foundation. As we navigate modern life, we keep our eyes on Christ, grow in prayer, and serve our neighbors with love.",
    publishedAt: "2026-06-20",
    author: "Pastor Team",
  },
  {
    slug: "community-love-in-action",
    title: "Community Love in Action",
    excerpt: "Highlights from our recent outreach and impact stories.",
    content:
      "Our outreach team served households with food parcels and prayer support. Thank you to every volunteer and donor who made this possible.",
    publishedAt: "2026-06-18",
    author: "Outreach Ministry",
  },
];

export const serviceTimes = [
  { label: "Sunday Celebration", value: "09:00" },
  { label: "Wednesday Bible Study", value: "17:30" },
  { label: "Youth Friday", value: "18:00" },
];
