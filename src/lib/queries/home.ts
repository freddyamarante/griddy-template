import { client, type SanityDocument } from "../client";

export interface Section {
  _type: string;
  _key: string;
  title: string;
  description: string;
}

export interface Home extends SanityDocument {
  sections: Section[];
}

export const getHome = async (): Promise<Home> => {
  const query = `*[_type == "home"] {
    _id,
    _type,
    sections[] {
      _type,
      _key,
      title,
      description
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