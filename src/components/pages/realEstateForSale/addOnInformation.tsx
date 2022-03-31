import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function AddOnInformation() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/images/rs-banner1.jpg"
          alt="rs-banner1"
          style={{
            width: "55%",
            height: "500px",
            objectFit: "cover",
            objectPosition: "bottom",
          }}
        />
        <div style={{ marginLeft: 30 }}>
          <Typography style={{ fontSize: 40, fontWeight: "bold" }}>
            Need a home loan? Get pre-approved
          </Typography>
          <Typography style={{ fontSize: 20 }}>
            Find a lender who can offer competitive mortgage rates and help you
            with pre-approval.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 20, height: 50 }}
          >
            Get pre-approved now
          </Button>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginLeft: 30 }}>
          <Typography style={{ fontSize: 40, fontWeight: "bold" }}>
            Get Local Info
          </Typography>
          <Typography style={{ fontSize: 20 }}>
            Does it have pet-friendly rentals? How are the schools? Get
            important local information on the area you're most interested in.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 20, height: 50 }}
          >
            Get pre-approved now
          </Button>
        </div>
        <img
          src="/images/rs-banner2.jpg"
          alt="rs-banner1"
          style={{
            width: "75%",
            height: "500px",
            objectFit: "cover",
            objectPosition: "bottom",
          }}
        />
      </div>
    </div>
  );
}
