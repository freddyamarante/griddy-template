// types/sanity.d.ts
import type { DocumentDefinition } from 'sanity';

declare module 'sanity' {
  interface DocumentDefinition {
    options?: {
      singleton?: boolean;
    };
  }
}