import React from "react";
import { Box, IconButton, useTheme, BoxProps, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useRouter } from "next/router";

export default function SearchInput({ style, ...props }: {} & BoxProps) {
  const theme = useTheme();
  const router = useRouter();

  const handleSearch = () => {
    router.push("/realestateandhomes-search/query");
  };
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
              onClick={handleSearch}
            >
              <SearchIcon style={{ color: "white" }} />
            </IconButton>
          ),
        }}
      />
    </Box>
  );
}
