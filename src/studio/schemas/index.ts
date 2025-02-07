import home from "./singletons/home";
import siteSettings from "./singletons/settings";

import sectionList from "./globals/sectionList";

const sections: any[] = [

]

const footers: any[] = [

]

const singletons: any[] = [
  home,
  siteSettings
]

const objects: any[] = [
  sectionList
]

const documents: any[] = [
  
] 

export const schemaTypes = [
  ...sections,
  ...footers,
  ...singletons,
  ...objects,
  ...documents  
]
