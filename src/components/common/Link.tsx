import React from "react";
import { Link as RouterLink } from "react-router-dom";
import MaterialLink from "@mui/material/Link";

interface LinkProps {
  to: string;
  header: string;
}

export default function Link({ to, header }: LinkProps) {
  return (
    <MaterialLink color={"#fff"} component={RouterLink} to={to}>
      {/*TODO remove color hardcoding*/}
      {header}
    </MaterialLink>
  );
}
