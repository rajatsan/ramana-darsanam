import React, { useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

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
  "englishTranslation",
];

export default function Page(props: PageProps) {
  const [pageData, setPageData] = useState<PageData | undefined>(undefined);

  useEffect(() => {
    fetchPageData();
  }, []);

  const fetchPageData = async () => {
    const pageData = await fetch(`${props.pageDataPath}`);
    setPageData(await pageData.json());
  };

  const renderSections = () => {
    return pageData?.sections?.map((sectionData, idx) => {
      return (
        <Card sx={{ marginBottom: 2 }} key={idx}>
          <CardContent
            className="generic-page-card-content"
            id="generic-page-card-content"
          >
            <Typography variant="h6" color={"text.secondary"} gutterBottom>
              {sectionData.sectionTitle || `#${idx + 1}`}
            </Typography>
            <Divider />
            {sectionsToRender.map((sectionType) => {
              if (sectionData[sectionType as keyof SectionData]) {
                return (
                  <Box key={sectionType} my={2}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: sectionData[sectionType as keyof SectionData],
                      }}
                    />
                  </Box>
                );
              } else {
                return null;
              }
            })}
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
