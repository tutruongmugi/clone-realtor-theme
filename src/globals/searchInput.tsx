import React from "react";
import { Box, IconButton, useTheme, BoxProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

export default function SearchInput({ style, ...props }: {} & BoxProps) {
  const theme = useTheme();
  return (
    <Box style={{ marginTop: 20,   position: "relative", ...style }} {...props}>
      <ReactSearchAutocomplete
        showIcon={false}
        styling={{
          clearIconMargin: "3px 60px 0 0",
          height: "64px",
          fontSize: "32px",
          iconColor: "#000",
          borderRadius: "48px",
        }}
      />
      <IconButton
        style={{
          position: "absolute",
          right: "8px",
          top: "12px",
          backgroundColor: theme.palette.primary.main,
        }}
        size="large"
      >
        <SearchIcon></SearchIcon>
      </IconButton>
    </Box>
  );
}
