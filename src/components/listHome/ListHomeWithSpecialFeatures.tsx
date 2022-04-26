import { Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Home } from "../../interface";
import useStyles from "../../utils/styles";
import ListHomeWithSpecialFeaturesItem from "./ListHomeWithSpecialFeaturesItem/list-home-with-special-features-item";

export default function ListHomeWithSpecialFeatures({
  homeData,
}: {
  homeData: Home[];
}) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const classes = useStyles();
  return (
    <div style={{ marginTop: 20 }}>
      <Typography style={{ fontWeight: "bold", fontSize: 20 }}>
        San Juan, PR Homes with special features
      </Typography>
      <Carousel responsive={responsive} autoPlay={false} itemClass={classes.carouselItemClass}>
        {homeData.map((home, index) => (
          <ListHomeWithSpecialFeaturesItem homeItem={home} key={index} />
        ))}
      </Carousel>
    </div>
  );
}
