import { Box, Typography, Link, Grid } from "@mui/material";
import React from "react";
import NextLink from "next/link";
import ListHomeItem from "./listHomeItem/ListHomeItem";
import { Home } from "../../interface";

export default function ListHome({
  homeData,
  homeTitle,
}: {
  homeData: Home[];
  homeTitle: String;
}) {
  return (
    <Box style={{ marginTop: 80, marginLeft: 120, marginRight: 120 }}>
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
      <Grid container spacing={0.4} style={{ marginTop: 10 }}>
        {homeData.map((home, index) => (
          <Grid item md={3} key={index}>
            <ListHomeItem homeItem={home} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
