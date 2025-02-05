import { client } from '../client'
import type { SanityDocument } from '../client' 

export interface SiteSettings extends SanityDocument {
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

export const getSiteSettings = async (): Promise<SiteSettings> => {
  const query = `*[_type == "siteSettings"][0] {
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

export const useSettings = async (): Promise<SiteSettings> => {
  try {
    const settings = await getSiteSettings();
    
    if (!settings) {
      throw new Error('No site settings found');
    }

    // Valores por defecto
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