export interface ComicData {
  img: string;
  day: number;
  safe_title: string;
  year: number;
  month: number;
  alt: string;
}

export interface ComicApiResponse {
  id: number;
}

export interface NavItem {
  href: string;
  title: string;
}

export interface Contact {
  id: string;
  href: string;
  src: string;
  alt: string;
}

export interface AboutSection {
  title: string;
  description: (string | { title: string; items: string[] })[];
}
