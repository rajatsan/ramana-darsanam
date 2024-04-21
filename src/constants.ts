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

export const UPADESA_CONFIG = [
  {
    pageDataPath: "collected_works/nan_yar.json",
    title: "Nāṉ Ār? (Who am I?)",
    titleBrief: "Nāṉ Ār",
    pageRoute: "NY",
  },
  {
    pageDataPath: "collected_works/ulladu_narpadu.json",
    title: "Uḷḷadu Nāṟpadu (Forty Verses on What Exists)",
    titleBrief: "Uḷḷadu Nāṟpadu",
    pageRoute: "UN",
  },
  {
    pageDataPath: "collected_works/upadesa_undiyar.json",
    title: "Upadēśa Undiyār (The Essence of Spiritual Instructions)",
    titleBrief: "Upadēśa Undiyār",
    pageRoute: "UU",
  },
];
