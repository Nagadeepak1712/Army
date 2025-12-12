export interface ContentSection {
  title: string;
  content: string;
  imageKeyword?: string;
  listItems?: string[];
}

export interface PageData {
  id: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImageKeyword: string;
  sections: ContentSection[];
}

export type PageId = 
  | 'home' | 'about' | 'missions' | 'special-forces' | 'equipment' 
  | 'training' | 'recruitment' | 'ranks' | 'galleries' | 'news' 
  | 'academics' | 'veterans' | 'martyrs' | 'women' | 'events' 
  | 'border-security' | 'tech' | 'contact' | 'donation' | 'careers'
  | 'navy' | 'airforce' | 'secret-ops';