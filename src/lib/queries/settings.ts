// settings.ts
import { client, type SanityDocument } from '../client';

export interface Settings extends SanityDocument {
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  fonts: {
    primary: string;
    customFontUrl?: string;
  };
}

export const getSettings = async (): Promise<Settings> => {
  const query = `*[_id == "settings"] {
    _id,
    _type,
    colorScheme {
      primary,
      secondary,
      accent
    },
    fonts {
      primary,
      customFontUrl
    }
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
      ...settings,
      colorScheme: {
        primary: settings.colorScheme?.primary || '#2563eb',
        secondary: settings.colorScheme?.secondary || '#1e40af',
        accent: settings.colorScheme?.accent || '#60a5fa'
      },
      fonts: {
        primary: settings.fonts?.primary || 'Inter',
        customFontUrl: settings.fonts?.customFontUrl
      }
    };
  } catch (error) {
    console.error('Error fetching site settings:', error);
    throw error;
  }
};