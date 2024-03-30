import React from "react";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";

import arunachalaImg from "../images/arunachala/bhagavans-arunachala-colored.jpeg";
import Link from "./common/Link";

const TOP_LINKS = [
  {
    header: "Nāṉ Ār? (Who am I?)",
    link: "/nan-yar",
  },
  {
    header: "Upadēśa Undiyār (The Essence of Spiritual Instructions)",
    link: "/nan-yar",
  },
  {
    header: "Uḷḷadu Nāṟpadu (Forty Verses on What Exists)",
    link: "/ulladu-narpadu",
  },
];

export default function Sidebar() {
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
          <ListItem key={header}>
            <Link to={link} header={header} />
          </ListItem>
        ))}
      </List>

      <Divider />
      <List>
        {["Others"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
