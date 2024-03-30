interface SectionTypesConfig {
  shouldDisplaySectionName: boolean;
  sectionName?: string;
  sectionDesc?: string;
}

export const SECTION_TYPES_CONFIG: Record<string, SectionTypesConfig> = {
  tamilOriginal: {
    shouldDisplaySectionName: false,
  },
  romanTransliteration: {
    shouldDisplaySectionName: false,
  },
  பதச்சேதம்: {
    shouldDisplaySectionName: true,
    sectionName: "பதச்சேதம்",
  },
  Padacchēdam: {
    shouldDisplaySectionName: true,
    sectionName: "Padacchēdam",
    sectionDesc: "word-separation",
  },
  அன்வயம்: {
    shouldDisplaySectionName: true,
    sectionName: "அன்வயம்",
    sectionDesc: "பதம் பிரித்துக் கொண்டு கூட்டல்",
  },
  Anvayam: {
    shouldDisplaySectionName: true,
    sectionName: "Anvayam",
    sectionDesc: "words rearranged in natural prose order",
  },
  englishTranslation: {
    shouldDisplaySectionName: true,
    sectionName: "English translation",
  },
  explanatoryParaphrase: {
    shouldDisplaySectionName: true,
    sectionName: "Explanatory paraphrase",
  },
};
