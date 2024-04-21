import { Box, Card, CardContent, Typography, Divider } from "@mui/material";
import React from "react";
import { SECTION_TYPES_CONFIG } from "../constants";
import { SectionData } from "../types";

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
  index: number;
  sectionData: SectionData;
  sectionHeaderPrefix?: string;
}

export function GenericSection({
  index,
  sectionData,
  sectionHeaderPrefix,
}: GenericSectionProps) {
  const renderSection = (sectionData: SectionData, sectionType: string) => {
    if (sectionData[sectionType as keyof SectionData]) {
      return (
        <Box key={sectionType} my={2}>
          {renderSubsectionTitle(sectionType)}
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

  const renderSubsectionTitle = (sectionType: string) => {
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

  const renderSectionTitle = () => {
    if (sectionHeaderPrefix) {
      return (
        sectionHeaderPrefix +
        ", " +
        sectionData.sectionTitle.toLocaleLowerCase()
      );
    } else {
      return sectionData.sectionTitle || `#${index + 1}`;
    }
  };

  return (
    <Card raised sx={{ marginBottom: 2 }} key={index} square>
      <CardContent
        className="generic-page-card-content"
        id="generic-page-card-content"
      >
        <Typography variant="h6" color={"text.secondary"} gutterBottom>
          {renderSectionTitle()}
        </Typography>
        <Divider />
        {sectionsToRender.map((sectionType) =>
          renderSection(sectionData, sectionType),
        )}
      </CardContent>
    </Card>
  );
}
