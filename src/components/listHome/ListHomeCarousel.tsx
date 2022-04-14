import { Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Home } from "../../interface";
import ListHomeItem from "./listHomeItem/ListHomeItem";
import BungalowIcon from "@mui/icons-material/Bungalow";
import useStyles from "../../utils/styles";

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

export default function ListHomeCarousel({
  homeData,
  homeTitle,
}: {
  homeData: Home[];
  homeTitle: String;
}) {
  const classes=useStyles()
  return (
    <div>
      <div style={{ display: "flex",marginBottom:10 }}>
        <BungalowIcon />
        <Typography style={{ marginLeft: 10, fontSize: 18 }}>
          {homeTitle}
        </Typography>
      </div>
      <Carousel  responsive={responsive}  itemClass={classes.carouselItemClass}>
        {homeData.map((home, index) => (
          <ListHomeItem
            key={index}
            homeItem={home} 
            style={{padding:10,width:250}}
          />
        ))}
      </Carousel>
    </div>
  );
}
