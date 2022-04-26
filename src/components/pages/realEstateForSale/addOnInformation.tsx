import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import SearchInput from "../../../globals/searchInput";

export default function AddOnInformation() {
  return (
    <Box style={{ marginTop: 80 }}>
      <Grid container style={{ display: "flex", alignItems: "center" }}>
        <Grid item md={6}>
          <Image
            alt="rs-banner1"
            src="/images/rs-banner1.jpg"
            layout="responsive"
            width={600}
            height={400}
          />
        </Grid>
        <Grid item md={6}>
          <div style={{ marginLeft: 30 }}>
            <Typography style={{ fontSize: 40, fontWeight: "bold" }}>
              Need a home loan? Get pre-approved
            </Typography>
            <Typography style={{ fontSize: 20 }}>
              Find a lender who can offer competitive mortgage rates and help
              you with pre-approval.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: 20, height: 50 }}
            >
              Get pre-approved now
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid container style={{ display: "flex", alignItems: "center" }}>
        <Grid item md={6}>
          <div style={{ marginLeft: 30 }}>
            <Typography style={{ fontSize: 40, fontWeight: "bold" }}>
              Get Local Info
            </Typography>
            <Typography style={{ fontSize: 20 }}>
              Does it have pet-friendly rentals? How are the schools? Get
              important local information on the area you're most interested in.
            </Typography>
            <SearchInput style={{ maxWidth: 500 }} />
          </div>
        </Grid>
        <Grid item md={6}>
          <Image
            alt="rs-banner1"
            src="/images/rs-banner2.jpg"
            layout="responsive"
            width={600}
            height={400}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
