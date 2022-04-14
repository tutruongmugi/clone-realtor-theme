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
            <CardMedia
              component="img"
              image={homeItem.image}
              title="home in NY"
              height="200"
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
              <Typography>{homeItem.updatedAt}</Typography>
            </Box>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute", 
                
              }}
            >
              
              <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </div>

            <CardContent>
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
                {homeItem.acreLot !== 0 && (
                  <div style={{ display: "flex", marginRight: 10 }}>
                    <Typography style={{ fontWeight: "bold", marginRight: 4 }}>
                      {" "}
                      {homeItem.acreLot}{" "}
                    </Typography>
                    <Typography noWrap>acre lot</Typography>
                  </div>
                )}
              </div>

              <Typography noWrap>{homeItem.address}</Typography>
            </CardContent>
          </CardActionArea>
        </NextLink>
      </Card>
    </Box>
  );
}
