import { Container, Grid, Hidden } from "@mui/material";
import React from "react";
import { Article } from "../../interface";
import ListHomeArticleItem from "./listHomeArticleItem/ListHomeArticleItem";
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


export default function ListHomeArticle({
  articleData,
}: {
  articleData: Article[];
}) {
  const classes=useStyles();
  return (
    <Container style={{ marginTop: 80 }}>
      <Hidden mdDown>
      <Grid container spacing={0.4} style={{ marginTop: 10 }}>
        {articleData.map((article, index) => (
          <Grid
            item
            md={4}
            lg={3}
            key={index}
            sx={{
              display: {
                lg: index >= 4 ? "none" : "block",
                md: index >= 3 ? "none" : "block",
                sm: "block"
              },
            }}
          >
            <ListHomeArticleItem articleItem={article} />
          </Grid>
        ))}
      </Grid>
      </Hidden>
      <Hidden mdUp>
      <Hidden mdUp>
        <Carousel responsive={responsive}  itemClass={classes.carouselItemClass} >
          {articleData.map((article, index) => (
            <ListHomeArticleItem articleItem={article} key={index}  />
          ))}
        </Carousel>
      </Hidden>
      </Hidden>
    </Container>
  );
}
