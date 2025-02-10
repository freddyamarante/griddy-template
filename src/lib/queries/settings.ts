// settings.ts
import { client, type SanityDocument } from '../client';

export interface Color {
  rgb: {
    r: number;
    g: number;
    b: number;
    a: number;
    _type: 'rgbaColor';
  };
  hsl: {
    h: number;
    s: number;
    l: number;
    a: number;
    _type: 'hslaColor';
  };
  hsv: {
    h: number;
    s: number;
    v: number;
    a: number;
    _type: 'hsvaColor';
  };
  alpha: number;
  _type: 'color';
  hex: string;
}

export interface Settings extends SanityDocument {
  storeName: string;
  logo: string;
  spaceBetweenSections: number;
  colorScheme: {
    primary: Color;
    secondary: Color;
    error: Color;
    success: Color;
    warning: Color;
    border: Color;
    cardBackground: Color;
    text: Color;
    background: Color;
    foreground: Color;
  };
}

export const getSettings = async (): Promise<Settings> => {
  const query = `*[_id == "settings"][0] {
      _id,
      _type,
      storeName,
      logo,
      spaceBetweenSections,
      colorScheme {
        primary,
        secondary,
        error,
        success,
        warning,
        border,
        cardBackground,
        text,
        background,
        foreground
      },
  }`;

  return client.fetch(query);
};

export const useSettings = async (): Promise<Settings> => {
  try {
    const settings = await getSettings();
    
    if (!settings) {
      throw new Error('No settings found');
    }

    return {
      ...settings
    };
  } catch (error) {
    console.error('Error fetching site settings:', error);
    throw error;
  }
};