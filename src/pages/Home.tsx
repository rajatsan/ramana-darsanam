import React, { useContext, useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";

import { AppContext } from "../context";
import { PageData } from "../types";
import { GenericSection } from "../common/GenericSection";
import { UPADESA_CONFIG } from "../constants";

function daysSinceEpoch() {
  const currentDateInMillis = Date.now();
  const millisecondsInADay = 1000 * 60 * 60 * 24;
  return Math.floor(currentDateInMillis / millisecondsInADay);
}

const getSectionNumberForToday = (pageData: PageData) => {
  const days = daysSinceEpoch();
  const numOfSections =
    pageData.mainTextSectionsCount || pageData.sections.length;

  return (pageData.mainTextStartIndex || 0) + (days % numOfSections);
};

export default function Home() {
  const { isMobile } = useContext(AppContext);

  return (
    <Box padding={isMobile ? 1 : 2} paddingTop={isMobile ? 2 : 4}>
      <UpadesaWorks />
    </Box>
  );
}

function UpadesaWorks() {
  return (
    <>
      <Typography
        paddingLeft={1}
        paddingBottom={2}
        variant="h6"
      >{`Upadēśa Nūṉmālai`}</Typography>
      <Box>
        {UPADESA_CONFIG.map((config) => (
          <HomePageSection
            key={config.pageDataPath}
            pageDataPath={config.pageDataPath}
            sectionHeaderPrefix={config.titleBrief}
          />
        ))}
      </Box>
    </>
  );
}

function HomePageSection({
  pageDataPath,
  sectionHeaderPrefix,
}: {
  pageDataPath: string;
  sectionHeaderPrefix: string;
}) {
  const [pageData, setPageData] = useState<PageData | undefined>(undefined);

  const fetchPageData = async () => {
    const pageData = await fetch(`${pageDataPath}`);
    setPageData(await pageData.json());
  };

  useEffect(() => {
    fetchPageData();
  }, []);

  return pageData === undefined ? null : (
    <GenericSection
      index={1}
      sectionData={pageData.sections[getSectionNumberForToday(pageData)]}
      sectionHeaderPrefix={sectionHeaderPrefix}
    />
  );
}
