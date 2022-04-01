import React from "react";
import { Box, IconButton, useTheme, BoxProps, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

export default function SearchInput({ style, ...props }: {} & BoxProps) {
  const theme = useTheme();
  return (
    <Box style={{ marginTop: 20, position: "relative", ...style }} {...props}>
      <TextField
        fullWidth
        style={{ background: "white", borderRadius: 99 }}
        inputProps={{
          style: {
            padding: 20,
            fontSize: "1.25rem",
          },
        }}
        placeholder="Address, School, City, Zip or Neighborhood"
        InputProps={{
          sx: {
            // Marterial UI system
            paddingRight: "8px",
            "& fieldset": {
              borderRadius: 99,
            },
            "&.Mui-focused fieldset": {
              borderWidth: "0px !important",
            },
          },
          endAdornment: (
            <IconButton
              sx={{
                padding: "16px",
                backgroundColor: "primary.main",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              <SearchIcon style={{ color: "white" }} />
            </IconButton>
          ),
        }}
      />
    </Box>
  );
}
