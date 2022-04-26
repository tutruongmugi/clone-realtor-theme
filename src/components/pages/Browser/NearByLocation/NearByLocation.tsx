import { Grid, Typography } from "@mui/material"; 
import React from "react";
import NearByLocationItem from "./NearByLocationItem/NearByLocationItem";
import { NearByLocationData } from "./_data_";

export default function NearByLocation() {
  
  return (
     
    <Grid container spacing={0.4} style={{ marginTop: 20 }}>
      {NearByLocationData.map((locationItem, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={index}
          
        >
          <NearByLocationItem title={locationItem.title} homeValues={locationItem.homeValues} />
        </Grid>
      ))}
    </Grid> 
  );
}
