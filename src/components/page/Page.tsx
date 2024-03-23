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
  sections: SectionData[];
}

// TODO
// 1. Load all json files into single file
// 2. Accordion for Tamil text
// 3. Render HTML inside section

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
          <CardContent>
            <Typography variant="h6" color={"text.secondary"} gutterBottom>
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
          variant="h5"
          gutterBottom
        >
          {props.pageTitle}
        </Typography>
      </Paper>

      {renderSections()}
    </div>
  );
}
