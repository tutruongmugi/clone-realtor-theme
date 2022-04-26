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
  Button,
} from "@mui/material";
import React, { useState } from "react";
import NextLink from "next/link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Home } from "../../interface";

export default function HomePaginationItem({
  homeItem,
  style,
  ...props
}: { homeItem: Home } & BoxProps) {
  const theme = useTheme();

  const [currentMouseEnterHeart, setCurrentMouseEnterHeart] = useState(false);
  return (
    <Box style={{ ...style }} {...props}>
      <Card style={{ width: "100%" }}>
        <NextLink href="#" passHref>
          <CardActionArea>
            <CardMedia
              component="img"
              image={homeItem.image}
              title="home in NY"
              style={{ height: 300 }}
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
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: 15,
                    height: 15,
                    backgroundColor: "#36b396",
                    borderRadius: 4,
                    marginRight: 8,
                  }}
                ></div>
                <Typography>For Sale</Typography>
              </div>
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
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography style={{ width: "40%" }}>
                  {homeItem.address}
                </Typography>
                <Button variant="outlined" color="secondary" style={{height:40}}>Email Agent</Button>
              </div>
            </CardContent>
          </CardActionArea>
        </NextLink>
      </Card>
    </Box>
  );
}
