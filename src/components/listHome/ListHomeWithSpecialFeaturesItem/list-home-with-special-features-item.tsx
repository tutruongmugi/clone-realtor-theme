import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  BoxProps,
  useTheme,
  Link,
} from "@mui/material";
import React, { useState } from "react";
import NextLink from "next/link";
import { Home } from "../../../interface";

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

export default function ListHomeWithSpecialFeaturesItem({
  homeItem,
  style,
  ...props
}: { homeItem: Home } & BoxProps) {
  const theme = useTheme();

  const [currentMouseEnterHeart, setCurrentMouseEnterHeart] = useState(false);
  return (
    <Box style={{ ...style }} {...props}>
      <Card style={{ width: "100%" }}>
        <div>
          <NextLink href="#" passHref>
            <Link>
              <CardMedia
                component="img"
                image={homeItem.image}
                title="home in NY"
                height="200"
              ></CardMedia>
            </Link>
          </NextLink>

          <div style={{ padding: "10px 20px 20px 20px" }}>
            <Typography>{homeItem.name}</Typography>
            <Typography
              style={{ fontWeight: "bold" }}
            >{`$${homeItem.price}`}</Typography>
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", marginRight: 10 }}>
                <Typography style={{ fontWeight: "bold", marginRight: 4 }}>
                  {" "}
                  {homeItem.bed}{" "}
                </Typography>
                <Typography>bed</Typography>
              </div>
              <div style={{ display: "flex", marginRight: 10 }}>
                <Typography style={{ fontWeight: "bold", marginRight: 4 }}>
                  {" "}
                  {homeItem.bath}{" "}
                </Typography>
                <Typography>bath</Typography>
              </div>
              <div style={{ display: "flex", marginRight: 10 }}>
                <Typography style={{ fontWeight: "bold", marginRight: 4 }}>
                  {" "}
                  {homeItem.sqft}{" "}
                </Typography>
                <Typography>sqft</Typography>
              </div>
              {homeItem.acrelot !== 0 && (
                <div style={{ display: "flex", marginRight: 10 }}>
                  <Typography style={{ fontWeight: "bold", marginRight: 4 }}>
                    {" "}
                    {homeItem.acrelot}{" "}
                  </Typography>
                  <Typography noWrap>acre lot</Typography>
                </div>
              )}
            </div>

            <Typography noWrap>{homeItem.address}</Typography>
          </div>
        </div>
      </Card>
    </Box>
  );
}
