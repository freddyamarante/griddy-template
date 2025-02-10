import home from "./singletons/home";
import siteSettings from "./singletons/settings";

import sectionList from "./globals/sectionList";

import heroSection from "./sections/heroSection";

const sections: any[] = [
  heroSection
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
