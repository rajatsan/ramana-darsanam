import React, { useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { SECTION_TYPES_CONFIG } from "../constants";

import "../App.css";

interface PageProps {
  pageDataPath: string;
  pageTitle: string;
}

interface SectionData {
  tamilOriginal: string;
  romanTransliteration: string;
  englishTranslation: string;
  sectionTitle: string;
}

interface PageData {
  header: string;
  sections: SectionData[];
}

const sectionsToRender = [
  "tamilOriginal",
  "romanTransliteration",
  "பதச்சேதம்",
  "Padacchēdam",
  "அன்வயம்",
  "Anvayam",
  "englishTranslation",
  "explanatoryParaphrase",
];

export default function Page(props: PageProps) {
  const [pageData, setPageData] = useState<PageData | undefined>(undefined);

  useEffect(() => {
    fetchPageData();
  }, [props.pageTitle]);

  const fetchPageData = async () => {
    const pageData = await fetch(`${props.pageDataPath}`);
    setPageData(await pageData.json());
  };

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

  const renderSections = () => {
    return pageData?.sections?.map((sectionData, idx) => {
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
    });
  };

  const renderHeader = () => {
    return (
      <Box pb={2} px={6}>
        <Typography
          sx={{ fontWeight: "bold" }}
          padding={2}
          pb={0}
          variant="h5"
          textAlign={"center"}
          gutterBottom
        >
          {props.pageTitle}
        </Typography>
        <Typography textAlign={"center"}>
          <div dangerouslySetInnerHTML={{ __html: pageData?.header || "" }} />
        </Typography>
      </Box>
    );
  };

  return (
    <Box>
      {renderHeader()}
      {renderSections()}
    </Box>
  );
}
