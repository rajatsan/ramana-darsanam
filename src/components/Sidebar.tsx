import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Settings from "@mui/icons-material/Settings";
import Home from "@mui/icons-material/Home";

import arunachalaImg from "../images/arunachala/bhagavans-arunachala-colored.jpeg";
import { useNavigate } from "react-router-dom";
import { UPADESA_CONFIG } from "../constants";

const MID_LINKS = [
  {
    header: "Home",
    link: "/",
  },
];

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div>
      <Toolbar>
        <img
          className="toolbar-img"
          src={arunachalaImg}
          alt="bhagavan's arunachala"
        />
      </Toolbar>
      <Divider />

      <List>
        {MID_LINKS.map(({ link, header }) => (
          <ListItem key={header} disablePadding onClick={() => navigate(link)}>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={header} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {UPADESA_CONFIG.map(({ pageRoute, title }) => (
          <ListItem
            key={title}
            disablePadding
            onClick={() => navigate(pageRoute)}
          >
            <ListItemButton>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <List>
        {["Settings"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            onClick={() => navigate("/settings")}
          >
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
