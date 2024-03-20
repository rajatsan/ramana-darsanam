import React, { useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface PageProps {
  contentPath: string;
  pageTitle: string;
}

interface SectionData {
  original_tamil: string;
  roman_transliteration: string;
  english_translation: string;
  section_title: string;
}

// function Section(props: any) {}

export default function Page(props: PageProps) {
  const [sectionsData, setSectionsData] = useState<SectionData[]>([]);

  useEffect(() => {
    fetchAllSectionsData();
  }, []);

  const fetchAllSectionsData = async () => {
    const sections: SectionData[] = [];
    for (let currSectionIndex = 1; ; currSectionIndex++) {
      try {
        const sectionData = await fetch(
          `${props.contentPath}/${currSectionIndex}.json`,
        );
        sections.push(await sectionData.json());
      } catch (e) {
        break;
      }
    }
    setSectionsData(sections);
  };

  const renderSections = () => {
    return sectionsData.map((sectionData, idx) => {
      return (
        <Box key={idx}>
          <Typography variant="h4">{sectionData.section_title}</Typography>
          <Typography>{sectionData.original_tamil}</Typography>
          <Typography>{sectionData.roman_transliteration}</Typography>
          <Typography>{sectionData.english_translation}</Typography>
        </Box>
      );
    });
  };

  return (
    <div>
      <Typography paragraph variant="h3" gutterBottom>
        {props.pageTitle}
      </Typography>
      {renderSections()}
    </div>
  );
}
