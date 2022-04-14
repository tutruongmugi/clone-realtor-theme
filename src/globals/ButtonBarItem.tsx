import { Box, BoxProps, Link, useTheme } from "@mui/material";
import React from "react";
import NextLink from "next/link";

export default function ButtonBarItem({
  text,
  isActive,
  ...props
}: {
  text: string;
  isActive: boolean;
} & BoxProps) {
  const theme = useTheme();
  return (
    <NextLink href="#" passHref>
      <Link>
        <Box
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            border: `1px solid ${
              isActive ? theme.palette.primary.main : "transparent"
            }`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color:isActive ? theme.palette.primary.main : "gray",
            marginRight:5
          }}
          sx={{
            "&:hover": {
              border: `1px solid ${theme.palette.primary.main}`,
              color:isActive ? theme.palette.primary.main : "gray"
            },
          }}
          {...props}
        >
          {text}
        </Box>
      </Link>
    </NextLink>
  );
}
