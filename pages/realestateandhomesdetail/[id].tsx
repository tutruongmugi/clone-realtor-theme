import { Grid, Hidden } from "@mui/material";
import React from "react";
import Layout from "../../src/layouts/Layout";
import FormContactInformation from "../../src/components/pages/realEstateAndHomesDetail/formContactInformation";
import HomeDetailInformation from "../../src/components/pages/realEstateAndHomesDetail/homeDetailInformation";

export default function RealEstateandHomesDetail() {
  return (
    <Layout>
      <div style={{ marginLeft: 160, marginRight: 160 }}>
        <div>something above</div>
        <Grid container>
          <Grid item md={9}>
            <HomeDetailInformation />
          </Grid>
          <Hidden mdDown>
            <Grid item md={3}>
              <FormContactInformation />
            </Grid>
          </Hidden>
        </Grid>
      </div>
    </Layout>
  );
}
