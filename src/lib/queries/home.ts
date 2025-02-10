import { client, type SanityDocument } from "../client";
import type { Section } from "../sectionTypes";

export interface Home extends SanityDocument {
  sections: Section[];
}

export const getHome = async (): Promise<Home> => {
  const query = `*[_type == "home"][0] {
    _id,
    _type,
    sections[] {
      _type,
      _key,
      title,
      description,
      settings {
        hide,
        padding,
        customCss
      }
    }
  }`;

  return client.fetch(query);
};

export const useHome = async (): Promise<Home> => {
  try {
    const home = await getHome();
    
    if (!home) {
      throw new Error('No home document found');
    }

    return {
      ...home
    };
  } catch (error) {
    console.error('Error fetching home document:', error);
    throw error;
  }
};