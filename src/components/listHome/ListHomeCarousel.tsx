import { Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Home } from "../../interface";
import ListHomeItem from "./listHomeItem/ListHomeItem";
import BungalowIcon from "@mui/icons-material/Bungalow";

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
  return (
    <div>
      <div style={{ display: "flex" }}>
        <BungalowIcon />
        <Typography style={{ marginLeft: 10, fontSize: 18 }}>
          {homeTitle}
        </Typography>
      </div>
      <Carousel ssr partialVisbile responsive={responsive}>
        {homeData.map((home, index) => (
          <ListHomeItem
            key={index}
            homeItem={home} 
          />
        ))}
      </Carousel>
    </div>
  );
}
