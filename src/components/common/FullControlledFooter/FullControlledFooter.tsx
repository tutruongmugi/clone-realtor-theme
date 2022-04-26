import {
  Container,
  Grid,
  IconButton,
  Typography,
  Link,
  Hidden,
} from "@mui/material";
import React from "react";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import TwitterIcon from "@mui/icons-material/Twitter";
import useStyles from "../../../utils/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { contactRealtorInformation, newsCorp, products } from "./__data__";
import NextLink from "next/link";

export default function FullControlledFooter() {
  const classes = useStyles();
  return (
    <footer style={{ background: "#333" }}>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: 320,
            padding: "20px 0",
          }}
        >
          <IconButton className={classes.footerIcon}>
            <FacebookSharpIcon />
          </IconButton>
          <IconButton className={classes.footerIcon}>
            <TwitterIcon />
          </IconButton>
          <IconButton className={classes.footerIcon}>
            <LinkedInIcon />
          </IconButton>
          <IconButton className={classes.footerIcon}>
            <InstagramIcon />
          </IconButton>
          <IconButton className={classes.footerIcon}>
            <PinterestIcon />
          </IconButton>
          <IconButton className={classes.footerIcon}>
            <YouTubeIcon />
          </IconButton>
        </div>
        <Hidden lgDown>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {contactRealtorInformation.map(
              (contactRealtorInformationItem, index) => (
                <Typography key={index} className={classes.linkTextFotter}>
                  {contactRealtorInformationItem}
                </Typography>
              )
            )}
            <Typography
              className={classes.linkTextFotter}
              style={{ color: "rgb(248, 178, 29)" }}
            >
              Do Not Sell My Personal Information
            </Typography>
          </div>
        </Hidden>
        <Hidden lgUp>
          <Grid container>
            {contactRealtorInformation.map(
              (contactRealtorInformationItem, index) => (
                <Grid
                  item
                  key={index}
                  md={3}
                  sm={4}
                  xs={6}
                  style={{ padding: "8px 0px" }}
                >
                  <NextLink href="#" passHref>
                    <Link className={classes.linkTextFotter}>
                      {contactRealtorInformationItem}
                    </Link>
                  </NextLink>
                </Grid>
              )
            )}
          </Grid>

          <Typography
            className={classes.linkTextFotter}
            style={{ color: "rgb(248, 178, 29)", padding: "8px 16px 8px 0" }}
          >
            Do Not Sell My Personal Information
          </Typography>
        </Hidden>
        <div style={{ marginTop: 32 }}>
          <Typography
            style={{ color: "#fff", fontWeight: "bold", marginBottom: 16 }}
          >
            PRODUCTS
          </Typography>
          <Hidden lgDown>
            <div style={{ display: "flex" }}>
              {products.map((productItem, index) => (
                <Typography
                  key={index}
                  className={classes.linkTextFotter}
                  style={{ marginRight: 16 }}
                >
                  {productItem}
                </Typography>
              ))}
            </div>
          </Hidden>

          <Hidden lgUp>
            <Grid container>
              {products.map((productItem, index) => (
                <Grid
                  item
                  key={index}
                  md={3}
                  sm={4}
                  xs={6}
                  style={{ padding: "8px 0px" }}
                >
                  <NextLink href="#" passHref>
                    <Link className={classes.linkTextFotter}>
                      {productItem}
                    </Link>
                  </NextLink>
                </Grid>
              ))}
            </Grid>
          </Hidden>
        </div>
        <div style={{ marginTop: 32 }}>
          <Typography
            style={{ color: "#fff", fontWeight: "bold", marginBottom: 16 }}
          >
            NEWS CORP
          </Typography>
          <Hidden lgDown>
            <div style={{ display: "flex",flexWrap:'wrap' }}>
              {newsCorp.map((newsCorpItem, index) => (
                <Typography
                  key={index}
                  className={classes.linkTextFotter}
                  style={{ marginRight: 16 }}
                >
                  {newsCorpItem}
                </Typography>
              ))}
            </div>
          </Hidden>

          <Hidden lgUp>
            <Grid container>
              {newsCorp.map((newsCorpItem, index) => (
                <Grid
                  item
                  key={index}
                  md={3}
                  sm={4}
                  xs={6}
                  style={{ padding: "8px 0px" }}
                >
                  <NextLink href="#" passHref>
                    <Link className={classes.linkTextFotter}>
                      {newsCorpItem}
                    </Link>
                  </NextLink>
                </Grid>
              ))}
            </Grid>
          </Hidden>
        </div>

        <Typography style={{color:'rgb(220, 220, 220)',fontSize:8,marginTop:32}} >All rights reserved. Realtor.</Typography>
      </Container>
    </footer>
  );
}
