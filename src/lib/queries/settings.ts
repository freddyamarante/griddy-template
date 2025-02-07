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
  colorScheme: {
    textColor: string;
    backgroundColor: string;
    foregroundColor: string;
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    highlightColor: string;
    errorColor: string;
    successColor: string;
    warningColor: string;
    borderColor: string;
    cardBackgroundColor: string;
  };
  headingFontFiles: FontFile[];
  secondaryFontFiles: FontFile[];
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
      ...settings,
      colorScheme: {
        textColor: settings.colorScheme?.textColor || '#000000',
        backgroundColor: settings.colorScheme?.backgroundColor || '#ffffff',
        foregroundColor: settings.colorScheme?.foregroundColor || '#f0f0f0',
        primaryColor: settings.colorScheme?.primaryColor || '#2563eb',
        secondaryColor: settings.colorScheme?.secondaryColor || '#1e40af',
        accentColor: settings.colorScheme?.accentColor || '#60a5fa',
        highlightColor: settings.colorScheme?.highlightColor || '#ffeb3b',
        errorColor: settings.colorScheme?.errorColor || '#f44336',
        successColor: settings.colorScheme?.successColor || '#4caf50',
        warningColor: settings.colorScheme?.warningColor || '#ff9800',
        borderColor: settings.colorScheme?.borderColor || '#e0e0e0',
        cardBackgroundColor: settings.colorScheme?.cardBackgroundColor || '#ffffff',
      },
    };
  } catch (error) {
    console.error('Error fetching site settings:', error);
    throw error;
  }
};