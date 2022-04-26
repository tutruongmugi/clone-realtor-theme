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
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import NextLink from "next/link";
import { Home } from "../../../interface";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

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

export default function ListHomeItem({
  homeItem,
  style,
  ...props
}: { homeItem: Home } & BoxProps) {
  const theme = useTheme();

  return (
    <Box style={{ ...style }} {...props}>
      <Card style={{ width: "100%" }}>
        <NextLink href={`/realestateandhomesdetail/${homeItem.name}`} passHref>
          <CardActionArea style={{ position: "relative" }}>
            <div style={{ position: "relative" }}>
              <CardMedia
                component="img"
                image={homeItem.image}
                title="home in NY"
                height="200"
              ></CardMedia>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  position: "absolute",
                  bottom: 16,
                  right: 16,
                }}
              >
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
              </div>
            </div>

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
              <Typography>{homeItem.updatedAt}</Typography>
            </Box>

            <CardContent style={{ fontSize: 14 }}>
              <div style={{ display: "flex",alignItems:'center' }}>
                <div
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: "rgb(54, 179, 150)",
                    borderRadius: 4,
                    marginRight: 4,
                  }}
                ></div>
                <Typography style={{ fontSize: 14 }} >{homeItem.name}</Typography>
              </div>
              <Typography
                style={{ fontWeight: "bold",fontSize: 14 }}
              >{`$${homeItem.price}`}</Typography>
              <div style={{ display: "flex" }}>
                <div style={{ display: "flex", marginRight: 10 }}>
                  <Typography style={{ fontWeight: "bold", marginRight: 4 ,fontSize: 14 }}>
                    {" "}
                    {homeItem.bed}{" "}
                  </Typography>
                  <Typography style={{fontSize: 14}}>bed</Typography>
                </div>
                <div style={{ display: "flex", marginRight: 10 }}>
                  <Typography style={{ fontWeight: "bold", marginRight: 4,fontSize: 14 }}>
                    {" "}
                    {homeItem.bath}{" "}
                  </Typography  >
                  <Typography style={{fontSize: 14}}>bath</Typography>
                </div>
                <div style={{ display: "flex", marginRight: 10 }}>
                  <Typography style={{ fontWeight: "bold", marginRight: 4,fontSize: 14 }}>
                    {" "}
                    {homeItem.sqft}{" "}
                  </Typography>
                  <Typography style={{fontSize: 14}}>sqft</Typography>
                </div>
                {homeItem.acrelot !== 0 && (
                  <div style={{ display: "flex", marginRight: 10 }}>
                    <Typography style={{ fontWeight: "bold", marginRight: 4,fontSize: 14 }}>
                      {" "}
                      {homeItem.acrelot}{" "}
                    </Typography>
                    <Typography style={{fontSize: 14}} noWrap>acre lot</Typography>
                  </div>
                )}
              </div>

              <Typography style={{fontSize: 14}}  noWrap>{homeItem.address}</Typography>
            </CardContent>
          </CardActionArea>
        </NextLink>
      </Card>
    </Box>
  );
}
