// settings.ts
import { client, type SanityDocument } from '../client';

export interface Settings extends SanityDocument {
  storeName: string;
  logo: string;
  spaceBetweenSections: number;
}

export const getSettings = async (): Promise<Settings> => {
  const query = `*[_id == "settings"][0] {
      _id,
      _type,
      storeName,
      logo,
      spaceBetweenSections,
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