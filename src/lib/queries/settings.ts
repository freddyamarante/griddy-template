// settings.ts
import { client, type SanityDocument } from '../client';

export interface FontFile {
  fontFile: {
    asset: {
      url: string;
      extension: string;
    };
  };
  fontName: string;
  fontWeight: number;
}

export interface Settings extends SanityDocument {
  headingFontFiles: FontFile[];
  secondaryFontFiles: FontFile[];
}

export const getSettings = async (): Promise<Settings> => {
  const query = `*[_id == "settings"] {
    _id,
    _type,
    fontFiles[] {
      fontFile {
        asset->{
          url,
          extension
        }
      },
      fontName,
      fontWeight
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
      ...settings
    };
  } catch (error) {
    console.error('Error fetching site settings:', error);
    throw error;
  }
};