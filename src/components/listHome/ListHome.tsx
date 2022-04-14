import { Box, Typography, Link, Grid, Hidden, Container } from "@mui/material";
import React from "react";
import NextLink from "next/link";
import ListHomeItem from "./listHomeItem/ListHomeItem";
import { Home } from "../../interface";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useStyles from "../../utils/styles";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};

export default function ListHome({
  homeData,
  homeTitle,
}: {
  homeData: Home[];
  homeTitle: String;
}) {

  const classes=useStyles();

  return (
    <Container style={{ marginTop: 80 }}>
      <Typography style={{ fontWeight: "bold", fontSize: 24 }}>
        {homeTitle}
      </Typography>
      <NextLink href="#" passHref>
        <Link>
          <Typography style={{ color: "#3377cc" }}>
            View all in Ocala
          </Typography>
        </Link>
      </NextLink>
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
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Carousel responsive={responsive} additionalTransfrom={-10} itemClass={classes.carouselItemClass} >
          {homeData.map((home, index) => (
            <ListHomeItem homeItem={home} key={index} style={{padding:10,width:320}} />
          ))}
        </Carousel>
      </Hidden>
    </Container>
  );
}
