import { List, ListItem, Typography } from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import useStyles from "../../../../utils/styles";

export default function NarItem({
  title,
  subLinks,
}: {
  title: string;
  subLinks: string[];
}) {
  const classes = useStyles();
  return (
    <div>
      <Typography style={{ fontWeight: "bold", fontSize: 14 }}>
        {title}
      </Typography>
      {subLinks.map((subLinkItem, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <CircleIcon
            sx={{
              fontSize: 30,
            }}
            style={{ padding: 10 }}
          />
          <Typography className={classes.subLinkText}>{subLinkItem}</Typography>
        </div>
      ))}
    </div>
  );
}
