import home from "./singletons/home";
import siteSettings from "./singletons/settings";

import sectionList from "./globals/sectionList";
import sectionSettings from "./objects/sectionSettings";

import heroSection from "./sections/heroSection";
import padding from "./objects/padding";

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
  sectionList,
  sectionSettings,
  padding
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
