import React, { useEffect, useState } from "react";

import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

import "../App.css";
import { GenericSection } from "./GenericSection";
import { PageData } from "../types";

interface PageProps {
  pageDataPath: string;
  pageTitle: string;
}

export default function Page(props: PageProps) {
  const [pageData, setPageData] = useState<PageData | undefined>(undefined);

  useEffect(() => {
    fetchPageData();
  }, [props.pageTitle]);

  const fetchPageData = async () => {
    const pageData = await fetch(`${props.pageDataPath}`);
    setPageData(await pageData.json());
  };

  const renderSections = () => {
    return pageData?.sections?.map((sectionData, idx) => {
      return <GenericSection key={idx} index={idx} sectionData={sectionData} />;
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
