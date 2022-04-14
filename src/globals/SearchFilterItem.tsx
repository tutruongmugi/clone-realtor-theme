import { Box, BoxProps, Button, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function SearchFilterItem({
  text,
  isActive,
  style,
  children,
  ...props
}: {
  text: string;
  isActive: boolean;
  children: ReactNode;
} & BoxProps) {
  return (
    <Box style={{ ...style }} {...props}>
      {/* <Typography>{text}</Typography>
      {isActive ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />} */}
      <Button
        style={{
          borderRadius: 4,
          color: "rgb(51, 51, 51)",
          border: "1px solid rgb(148, 148, 148)",
          marginRight: 8,
          fontWeight: 400,
        }}
        sx={{
          "&:hover": {
            backgroundColor: "rgb(241, 241, 241)",
            borderColor: "rgb(148, 148, 148)",
          }, 
          overflow:'hidden',
          whiteSpace:'nowrap',
          textOverflow:'ellipsis'
        }}
        endIcon={isActive ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      >
        {text}
      </Button>
      <div>{children}</div>
    </Box>
  );
}
