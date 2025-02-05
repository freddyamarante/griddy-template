import { type StructureResolver } from 'sanity/structure';
import { CogIcon } from '@sanity/icons';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido')
    .items([
      S.listItem()
        .title('Configuración')
        .icon(CogIcon)
        .child(
          S.document()
            .title('Configuración')
            .schemaType('settings')
            .documentId('settings')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        item => !['settings'].includes(item.getId()!)
      )
    ]);