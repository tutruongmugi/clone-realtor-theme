import { Button, Container, Hidden, Toolbar } from "@mui/material";
import React from "react";
import NextLink from "next/link";
import useStyles from "../../../utils/styles";
import { useRouter } from "next/router";

export default function HeaderAuthentication({
  isLoginHeader,
}: {
  isLoginHeader: boolean;
}) {
  const classes = useStyles();
  const router = useRouter();
  return (
    <Container maxWidth='xl'>
      <Toolbar
        style={{
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          background: "white",
          padding: 0,
          height: 50,
        }}
      >
        <Hidden mdDown>
          <div style={{ display: "flex", margin: "0 12px" }}>
            <img
              src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
              alt="logo"
              style={{ display: "inline-block", height: 30 }}
            />
            <div
              style={{ alignSelf: "flex-end", lineHeight: 1, marginLeft: 5 }}
              className={classes.grayText}
            >
              for Professionals
            </div>
          </div>
        </Hidden>
        <Button
          variant="outlined"
          color="inherit"
          style={{
            borderRadius: 0,
            borderColor: "rgba(0,0,0,.2)",
            position: "absolute",
            right: 12,
          }}
          onClick={() => {
            if (isLoginHeader) {
              router.push("/register");
            }
            router.push("/login");
          }}
        >
          {isLoginHeader ? "Sign Up" : "Log In"}
        </Button>
      </Toolbar>
    </Container>
  );
}
