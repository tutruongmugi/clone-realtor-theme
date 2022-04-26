import { Container, Grid, Link, Typography } from "@mui/material";
import NextLink from "next/link";
import React from "react";
import NarItem from "./nar-item";
import { narData } from "./_data_";

export default function LinkTextAssociation() {
  return (
    <div
      style={{
        borderTop: "1px solid rgb(148, 148, 148)",
        borderBottom: "1px solid rgb(148, 148, 148)",
      }}
    >
      <Container style={{padding: '80px 0'}} >
        <Grid container>
          <Grid item lg={3} md={6} sm={12}>
            <NextLink href="/" passHref>
              <Link>
                <img
                  src="https://static.rdc.moveaws.com/images/home/nar-logo-2020.svg"
                  alt="logo-association"
                  style={{ display: "inline-block", height: 80 }}
                />
              </Link>
            </NextLink>
            <Typography>
              Find out how the NAR works for consumers and REALTORS®
            </Typography>
          </Grid>
          {narData.map((narItem, index) => (
            <Grid item lg={3} md={6} sm={12} key={index}>
              <NarItem title={narItem.title} subLinks={narItem.subLinks} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
