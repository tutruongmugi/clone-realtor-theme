import React, { ReactNode } from "react";
import NextLink from "next/link";
import { Box, BoxProps, Typography, useTheme, Link } from "@mui/material";

export default function AppbarMenuItem({
  text,
  isActive,
  style,
  ...props
}: {
  text: ReactNode | string;
  isActive: boolean;
} & BoxProps) {
  const theme = useTheme();

  return (
    <NextLink href="/realestateforsale" passHref>
      <Link>
        <Box
          style={{
            padding: "14px 6px",
            borderBottom: `4px solid ${
              isActive ? theme.palette.primary.main : "transparent"
            }`,
            height: 64,
            display: "flex",
            alignItems: "center",
            ...style,
          }}
          {...props}
        >
          {typeof text === "string" ? <Typography>{text}</Typography> : text}
        </Box>
      </Link>
    </NextLink>
  );
}
