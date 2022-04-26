import { Container, Grid, Typography, Link } from "@mui/material";
import NextLink from "next/link";
import React from "react";
import useStyles from "../../../utils/styles";

export default function HomeSaleStatus({
  statusTittle,
}: {
  statusTittle: string;
}) {
  const classes = useStyles();
  return (
    <Container style={{ marginTop: 80 }}>
      <Typography style={{ fontWeight: "bold", fontSize: 24 }}>
        {statusTittle}
      </Typography>
      <Grid container>
        <Grid item lg={3} md={6} sm={6} xs={6} style={{ padding: 10, textAlign: "center" }}>
          <NextLink href="#" passHref>
            <Link>
              <Typography
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
                style={{
                  fontSize: 42,
                  fontWeight: 400,
                  color: "#364BC4",
                }}
              >
                492
              </Typography>
            </Link>
          </NextLink>
          <Typography className={classes.grayText}>Homes for sale</Typography>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={6} style={{ padding: 10, textAlign: "center" }}>
          <NextLink href="#" passHref>
            <Link>
              <Typography
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
                style={{
                  fontSize: 42,
                  fontWeight: 400,
                  color: "#364BC4",
                }}
              >
                132
              </Typography>
            </Link>
          </NextLink>
          <Typography className={classes.grayText}>Recently sold</Typography>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={6}  style={{ padding: 10, textAlign: "center" }}>
          <NextLink href="#" passHref>
            <Link>
              <Typography
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
                style={{
                  fontSize: 42,
                  fontWeight: 400,
                  color: "#364BC4",
                }}
              >
                18
              </Typography>
            </Link>
          </NextLink>
          <Typography className={classes.grayText}>Price reduced</Typography>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={6} style={{ padding: 10, textAlign: "center" }}>
          <NextLink href="#" passHref>
            <Link>
              <Typography
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
                style={{
                  fontSize: 42,
                  fontWeight: 400,
                  color: "#364BC4",
                }}
              >
                5
              </Typography>
            </Link>
          </NextLink>
          <Typography className={classes.grayText}>Foreclosure</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
