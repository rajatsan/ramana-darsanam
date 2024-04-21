import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Settings from "@mui/icons-material/Settings";

import arunachalaImg from "../images/arunachala/bhagavans-arunachala-colored.jpeg";
import { useNavigate } from "react-router-dom";

const TOP_LINKS = [
  {
    header: "Nāṉ Ār? (Who am I?)",
    link: "/nan-yar",
  },
  {
    header: "Upadēśa Undiyār (The Essence of Spiritual Instructions)",
    link: "/upadesa-undiyar",
  },
  {
    header: "Uḷḷadu Nāṟpadu (Forty Verses on What Exists)",
    link: "/ulladu-narpadu",
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
        {TOP_LINKS.map(({ link, header }) => (
          <ListItem key={header} disablePadding onClick={() => navigate(link)}>
            <ListItemButton>
              <ListItemText primary={header} />
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
