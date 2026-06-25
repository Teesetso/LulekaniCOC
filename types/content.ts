export type EventCategory = "worship" | "community" | "youth" | "prayer";

export interface ChurchEvent {
  id: string;
  title: string;
  description: string;
  category: EventCategory;
  location: string;
  date: string;
  time: string;
  streamUrl?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
}
