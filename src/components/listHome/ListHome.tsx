import { Box, Typography, Link, Grid, Hidden } from "@mui/material";
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
            xs={12}
            md={4}
            lg={3}
          >
            <ListHomeItem homeItem={home} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
