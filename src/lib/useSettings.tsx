import {sanityClient} from 'sanity:client'
import { useState, useEffect } from 'react';

export interface SiteSettings {
  storeName: string;
  logo: {
    asset: {
      _ref: string;
      url: string;
    };
    alt?: string;
  };
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    background: string;
  };
  fonts: {
    primary: string;
    secondary?: string;
    customFontUrl?: string;
  };
  enabledSections: string[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export async function useSettings(storeSlug: string): Promise<SiteSettings> {
  const query = `*[_type == "siteSettings" && storeSlug.current == $storeSlug][0] {
    storeName,
    logo {
      asset->{
        _ref,
        url
      },
      alt
    },
    colorScheme {
      primary,
      secondary,
      accent,
      text,
      background
    },
    fonts {
      primary,
      secondary,
      customFontUrl
    },
    enabledSections[]->{identifier},
    seo {
      title,
      description,
      keywords
    }
  }`;

  try {
    const settings = await sanityClient.fetch<SiteSettings>(query, { storeSlug });
    
    if (!settings) {
      throw new Error(`No settings found for store: ${storeSlug}`);
    }

    // Default values
    return {
      ...settings,
      colorScheme: {
        primary: settings.colorScheme?.primary || '#2563eb',
        secondary: settings.colorScheme?.secondary || '#1d4ed8',
        accent: settings.colorScheme?.accent || '#60a5fa',
        text: settings.colorScheme?.text || '#1f2937',
        background: settings.colorScheme?.background || '#ffffff'
      },
      fonts: {
        ...settings.fonts,
        primary: settings.fonts?.primary || 'Inter'
      }
    };
  } catch (error) {
    console.error('Error fetching site settings:', error);
    throw error;
  }
}

export function useSettingsHook(storeSlug: string) {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await useSettings(storeSlug);
        setSettings(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load settings'));
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, [storeSlug]);

  return { settings, loading, error };
}