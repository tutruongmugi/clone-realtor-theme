import {
  Box,
  Typography,
  Link,
  Grid,
  Hidden,
  Container,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import NextLink from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useStyles from "../../../../utils/styles";
import { Home } from "../../../../interface";
import ListHomeItem from "../../../listHome/listHomeItem/ListHomeItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

export default function ListingForSaleHomes({
  homeData,
  homeTitle,
}: {
  homeData: Home[];
  homeTitle: String;
}) {
  const classes = useStyles();
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Container style={{ marginTop: 80 }}>
      <Typography style={{ fontWeight: "bold", fontSize: 24 }}>
        {homeTitle}
      </Typography>

      <Typography className={classes.grayText}>
        Recommended based on your recent activity
      </Typography>
      <Hidden mdDown>
        <Grid container columnSpacing={0.4} style={{ marginTop: 10 }}>
          {homeData.map((home, index) => (
            <Grid
              sx={{
                display: {
                  // An item thu 4 tro di neu man hinh < lg
                  lg: index >= 4 ? "none" : "block",
                  // An item thu 3 tro di neu man hinh < md
                  md: index >= 3 ? "none" : "block",
                  // show toan bo
                  sm: "block",
                },
              }}
              key={index}
              item
              md={4}
              lg={3}
            >
              <ListHomeItem homeItem={home} />
            </Grid>
          ))}
          {isShowing ? (
            <Grid item md={4} lg={3}>
              <ListHomeItem homeItem={homeData[0]} style={{ marginTop: 15 }} />
            </Grid>
          ) : null}
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Carousel
          responsive={responsive}
          additionalTransfrom={-10}
          itemClass={classes.carouselItemClass}
        >
          {homeData.map((home, index) => (
            <ListHomeItem homeItem={home} key={index} />
          ))}
        </Carousel>
        {isShowing ? (
          <ListHomeItem
            homeItem={homeData[0]}
            style={{ marginTop: 15, width: 240 }}
          />
        ) : null}
      </Hidden>

      {isShowing ? (
        <Button
          variant="outlined"
          endIcon={<ArrowDropUpIcon />}
          style={{ width: 150, marginTop: 10 }}
          onClick={() => {
            setIsShowing(!isShowing);
          }}
        >
          See Less
        </Button>
      ) : (
        <Button
          variant="outlined"
          endIcon={<ArrowDropDownIcon />}
          style={{ width: 150, marginTop: 10 }}
          onClick={() => {
            setIsShowing(!isShowing);
          }}
        >
          See More
        </Button>
      )}
    </Container>
  );
}
