import {  Container, Grid } from "@mui/material";
import React from "react";
import { Article } from "../../interface";
import ListHomeArticleItem from "./listHomeArticleItem/ListHomeArticleItem";

export default function ListHomeArticle({
  articleData,
}: {
  articleData: Article[];
}) {
  return (
    <Container style={{ marginTop: 80 }}>
      <Grid container spacing={0.4} style={{ marginTop: 10 }}>
        {articleData.map((article, index) => (
          <Grid item md={3} key={index}>
            <ListHomeArticleItem articleItem={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
