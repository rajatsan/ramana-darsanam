import React from "react";

import { Box, Typography } from "@mui/material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "../common/CustomAccordionComponents";
import YoutubeSuggestions from "../components/YoutubeSuggestions";

export default function Miscellanous() {
  return (
    <Box padding={2} paddingTop={4}>
      <OthersSection />
    </Box>
  );
}

function OthersSection() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{`Random video suggestions`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <YoutubeSuggestions />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
