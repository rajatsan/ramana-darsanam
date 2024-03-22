import React, { useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

interface PageProps {
  contentPath: string;
  pageTitle: string;
}

interface SectionData {
  tamilOriginal: string;
  romanTransliteration: string;
  englishTranslation: string;
  sectionTitle: string;
}

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
        <Card sx={{ marginBottom: 2 }} key={idx}>
          <CardContent>
            <Typography variant="h5" color={"text.secondary"} gutterBottom>
              {sectionData.sectionTitle || `#${idx + 1}`}
            </Typography>
            <Divider />
            {sectionData.tamilOriginal && (
              <Typography my={2}>{sectionData.tamilOriginal}</Typography>
            )}
            {sectionData.romanTransliteration && (
              <Typography my={2}>{sectionData.romanTransliteration}</Typography>
            )}
            <div>
              <Box sx={{ fontWeight: "bold" }} display={"inline"}>
                {"English translation: "}
              </Box>
              <Box display={"inline"}>{sectionData.englishTranslation}</Box>
            </div>
          </CardContent>
        </Card>
      );
    });
  };

  return (
    <div>
      <Paper elevation={1}>
        <Typography
          sx={{ fontWeight: "light" }}
          padding={2}
          paragraph
          variant="h4"
          gutterBottom
        >
          {props.pageTitle}
        </Typography>
      </Paper>

      {renderSections()}
    </div>
  );
}
