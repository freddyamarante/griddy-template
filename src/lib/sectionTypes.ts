export interface Home {
  sections: Section[];
}

export interface Section {
  _type: string;
  _key: string;
  settings: SectionSettings;
}

export interface SectionSettings {
  hide: boolean;
  padding: {
    top: number;
    bottom: number;
  };
  customCss?: string;
}

export interface HeroSection {
  _type: 'heroSection';
  _key: string;
  title: string;
  description?: string;
  settings: SectionSettings;
}