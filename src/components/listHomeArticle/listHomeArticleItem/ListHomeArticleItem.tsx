import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import NextLink from "next/link";
import { Article } from "../../../interface";

// function HomeItemHeart({
//   isActive,
//   style,
//   ...props
// }: { isActive: boolean } & BoxProps) {
//   return (
//     <Box {...props}>
//       <FavoriteBorderOutlinedIcon />
//     </Box>
//   );
// }

export default function ListHomeArticleItem({
  articleItem,
}: {
  articleItem: Article;
}) {
  const theme = useTheme();

  return (
    <Card>
      <NextLink href="#" passHref>
        <CardActionArea>
          <CardMedia
            component="img"
            image={articleItem.image}
            title="home in NY"
            style={{ height: 200 }}
          ></CardMedia>
          <Box
            style={{
              backgroundColor: "#37c",
              color: "white",
              top: 16,
              left: 16,
              position: "absolute",
              borderRadius: 4,
              padding: "4px",
            }}
          >
            <Typography
              style={{
                textTransform: "uppercase",
              }}
            >
              {articleItem.titleAction}
            </Typography>
          </Box>

          <CardContent>
            <Typography
              style={{
                textOverflow: "ellipsis",
                overflowY: "hidden",
                height: 42,
              }}
            >
              {articleItem.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </NextLink>
    </Card>
  );
}
