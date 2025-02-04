import section from "./documents/section";
import siteSettings from "./documents/siteSettings";

const sections: any[] = []
const footers: any[] = []
const singletons: any[] = []
const objects: any[] = []
const documents: any[] = [
  section,
  siteSettings
] 

export const schemaTypes = [
  ...sections,
  ...footers,
  ...singletons,
  ...objects,
  ...documents  
]
