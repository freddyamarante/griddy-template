
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'jcexkvnt',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-10-01',
  perspective: 'published'
});

export interface SanityDocument {
  _id: string;
  _type: string;
  _rev?: string;
  _createdAt?: string;
  _updatedAt?: string;
}