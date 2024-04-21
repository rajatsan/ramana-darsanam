export interface SectionData {
  tamilOriginal: string;
  romanTransliteration: string;
  englishTranslation: string;
  sectionTitle: string;
}

export interface PageData {
  header: string;
  sections: SectionData[];
  mainTextStartIndex?: number;
  mainTextSectionsCount?: number;
}
