
export interface Character {
  id: string;
  name: string;
  nameAm: string;
  role: string;
  roleAm: string;
  gradient: string;
  image: string;
  stats: {
    power: number;
    agility: number;
    intelligence: number;
  };
  bio: string;
  bioAm: string;
  voiceActor: string;
  isFamilyCard?: boolean;
  // Book specific fields
  price?: string;
  pages?: number;
  ageRange?: string;
  publisher?: string;
  publisherAm?: string;
}

export type Language = 'en' | 'am';

export interface EditHistory {
  id: string;
  prompt: string;
  imageUrl: string;
  timestamp: number;
}