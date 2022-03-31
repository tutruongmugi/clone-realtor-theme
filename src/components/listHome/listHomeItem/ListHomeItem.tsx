import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  BoxProps,
  Container,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import NextLink from "next/link";
import { Home } from "../../../interface";
import FavoriteIcon from "@mui/icons-material/Favorite";

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

export default function ListHomeItem({ homeItem }: { homeItem: Home }) {
  const theme = useTheme();

  const [currentMouseEnterHeart, setCurrentMouseEnterHeart] = useState(false);
  return (
    <Card>
      <NextLink href="#" passHref>
        <CardActionArea>
          <CardMedia
            component="img"
            image={homeItem.image}
            title="home in NY"
            style={{ height: 200 }}
          ></CardMedia>
          <Box
            style={{ backgroundColor: "#37c", color: "white", top: 16, left: 16,position:'absolute',borderRadius:4,padding: "4px", }}
          >
            <Typography>{homeItem.updatedAt}</Typography>
          </Box>
          <Box
            style={{
              position: "absolute",
              right: 16,
              top: "48%",
              color: currentMouseEnterHeart
                ? theme.palette.primary.main
                : "rgba(0, 0, 0, 0.4)",
            }}
            onMouseEnter={() => {
              setCurrentMouseEnterHeart(true);
            }}
            onMouseLeave={() => {
              setCurrentMouseEnterHeart(false);
            }}
          >
            <FavoriteIcon fontSize="large" />
          </Box>
          <CardContent>
            <Typography>{homeItem.name}</Typography>
            <Typography
              style={{ fontWeight: "bold" }}
            >{`$${homeItem.price}`}</Typography>
            <Grid container>
              <Grid item md={3} style={{ display: "flex" }}>
                <Typography style={{ fontWeight: "bold", marginRight: 4 }}>
                  {" "}
                  {homeItem.bed}{" "}
                </Typography>
                <Typography>bed</Typography>
              </Grid>
              <Grid item md={3} style={{ display: "flex" }}>
                <Typography style={{ fontWeight: "bold", marginRight: 4 }}>
                  {" "}
                  {homeItem.bath}{" "}
                </Typography>
                <Typography>bath</Typography>
              </Grid>
              <Grid item md={3} style={{ display: "flex" }}>
                <Typography style={{ fontWeight: "bold", marginRight: 4 }}>
                  {" "}
                  {homeItem.sqft}{" "}
                </Typography>
                <Typography>sqft</Typography>
              </Grid>
              {homeItem.acreLot !== 0 && (
                <Grid item md={3} style={{ display: "flex" }}>
                  <Typography style={{ fontWeight: "bold", marginRight: 4 }}>
                    {" "}
                    {homeItem.acreLot}{" "}
                  </Typography>
                  <Typography>acre lot</Typography>
                </Grid>
              )}
            </Grid>

            <Typography>{homeItem.address}</Typography>
          </CardContent>
        </CardActionArea>
      </NextLink>
    </Card>
  );
}
