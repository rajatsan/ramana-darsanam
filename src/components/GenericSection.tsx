import { Box, Card, CardContent, Typography, Divider } from "@mui/material";
import React from "react";
import { SECTION_TYPES_CONFIG } from "../constants";
import { SectionData } from "./GenericPage";

const sectionsToRender = [
  // "tamilOriginal",
  "romanTransliteration",
  // "பதச்சேதம்",
  // "Padacchēdam",
  // "அன்வயம்",
  // "Anvayam",
  "englishTranslation",
  "explanatoryParaphrase",
];

interface GenericSectionProps {
  idx: number;
  sectionData: SectionData;
}

export function GenericSection({ idx, sectionData }: GenericSectionProps) {
  const renderSection = (sectionData: SectionData, sectionType: string) => {
    if (sectionData[sectionType as keyof SectionData]) {
      return (
        <Box key={sectionType} my={2}>
          {renderSectionTitle(sectionType)}
          <span
            dangerouslySetInnerHTML={{
              __html: sectionData[sectionType as keyof SectionData],
            }}
          />
        </Box>
      );
    } else {
      return null;
    }
  };

  const renderSectionTitle = (sectionType: string) => {
    if (!SECTION_TYPES_CONFIG[sectionType]?.shouldDisplaySectionName)
      return null;

    const sectionDesc = SECTION_TYPES_CONFIG[sectionType].sectionDesc;
    const sectionName = SECTION_TYPES_CONFIG[sectionType].sectionName;

    if (!sectionDesc) {
      return (
        <span>
          <em>
            <b>{sectionName}: </b>
          </em>
        </span>
      );
    } else {
      return (
        <span>
          <em>
            <b>{sectionName} </b>
          </em>
          ({sectionDesc}): <span> </span>
        </span>
      );
    }
  };

  return (
    <Card raised sx={{ marginBottom: 2 }} key={idx} square>
      <CardContent
        className="generic-page-card-content"
        id="generic-page-card-content"
      >
        <Typography variant="h6" color={"text.secondary"} gutterBottom>
          {sectionData.sectionTitle || `#${idx + 1}`}
        </Typography>
        <Divider />
        {sectionsToRender.map((sectionType) =>
          renderSection(sectionData, sectionType),
        )}
      </CardContent>
    </Card>
  );
}
