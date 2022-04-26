import React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Controller, useForm } from "react-hook-form";
import { Button, List, ListItem, Typography, Link, Icon } from "@mui/material";
import GoogleLogin from "react-google-login";
import GoogleButton from "react-google-button";
import NextLink from "next/link";
import useStyles from "../../../utils/styles";

export default function Login({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose:
    | ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
    | undefined;
}) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const classes = useStyles();

  const submitHandler = () => {};

  // const responseGoogle = (response) => {
  //   console.log(response);
  // };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <form onSubmit={handleSubmit(submitHandler)}>
          <List>
            <ListItem>
              <Typography style={{ fontWeight: "bold" }} variant="h5">
                Log in or create an account
              </Typography>
            </ListItem>
            <ListItem style={{ display: "block" }}>
              <div style={{ justifyContent: "space-between", display: "flex" }}>
                <Typography>Email address</Typography>
                <Typography>required</Typography>
              </div>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                }}
                render={({ field }) => (
                  <TextField
                    fullWidth
                    placeholder="Enter your email"
                    id="email"
                    inputProps={{ type: "email" }}
                    error={Boolean(errors.email)}
                    helperText={
                      errors.email
                        ? errors.email.type === "pattern"
                          ? "Please enter a valid email"
                          : "Email is required"
                        : ""
                    }
                    {...field}
                  />
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <div
                style={{
                  textAlign: "center",
                  width: "100%",
                  borderBottom: "1px solid black",
                  height: 15,
                }}
              >
                <span
                  style={{
                    backgroundColor: "#fff",
                    padding: "4px 10px 0px",
                    margin: 0,
                  }}
                >
                  or
                </span>
              </div>
            </ListItem>

            <ListItem>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Continue
              </Button>
            </ListItem>
          </List>
        </form>
        <List>
          <ListItem>
            <Button
              variant="outlined"
              fullWidth
              startIcon={
                <Icon>
                  <img style={{ height: "100%" }} src="/icons/google.svg" />
                </Icon>
              }
              className={classes.googleButton}
            >
              Continue with Google
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="contained"
              fullWidth
              // startIcon={
              //   <Icon>
              //     <svg
              //       xmlns="http://www.w3.org/2000/svg"
              //       viewBox="0 0 96 96"
              //       width="96px"
              //       height="96px"
              //     >
              //       <defs>
              //         <linearGradient
              //           id="linear0"
              //           gradientUnits="userSpaceOnUse"
              //           x1="87.413628"
              //           y1="44.685059"
              //           x2="87.413628"
              //           y2="152.741379"
              //           gradientTransform="matrix(0.55814,0,0,0.55814,0,0)"
              //         >
              //           <stop
              //             offset="0"
              //             style={{
              //               stopColor: "rgb(43.921569%,87.450981%,100%)",
              //               stopOpacity: 1,
              //             }}
              //           />
              //           <stop
              //             offset="1"
              //             style={{
              //               stopColor: "rgb(43.921569%,68.627453%,100%)",
              //               stopOpacity: 1,
              //             }}
              //           />
              //         </linearGradient>
              //         <linearGradient
              //           id="linear1"
              //           gradientUnits="userSpaceOnUse"
              //           x1="86"
              //           y1="16.125"
              //           x2="86"
              //           y2="155.875"
              //         >
              //           <stop
              //             offset="0"
              //             style={{
              //               stopColor: "rgb(0%,77.64706%,100%)",
              //               stopOpacity: 1,
              //             }}
              //           />
              //           <stop
              //             offset="1"
              //             style={{
              //               stopColor: "rgb(0%,44.705883%,100%)",
              //               stopOpacity: 1,
              //             }}
              //           />
              //         </linearGradient>
              //       </defs>
              //       <g id="surface67727821">
              //         <path
              //           style={{
              //             fill: "white",
              //             strokeWidth: 5.375,
              //             strokeLinecap: "butt",
              //             strokeLinejoin: "miter",
              //             stroke: "url(#linear1)",
              //             strokeMiterlimit: 10,
              //           }}
              //           d="M 86 18.8125 C 48.892904 18.8125 18.8125 48.892904 18.8125 86 C 18.8125 123.107096 48.892904 153.1875 86 153.1875 C 123.107096 153.1875 153.1875 123.107096 153.1875 86 C 153.1875 48.892904 123.107096 18.8125 86 18.8125 Z M 86 18.8125 "
              //           transform="matrix(0.55814,0,0,0.55814,0,0)"
              //         />
              //         <path
              //           style={{
              //             stroke: "none",
              //             fillRule: "nonzero",
              //             fill: "#1877F2",
              //           }}
              //           d="M 53.28125 58.335938 L 63.375 58.335938 L 64.960938 48.085938 L 53.28125 48.085938 L 53.28125 42.480469 C 53.28125 38.222656 54.671875 34.441406 58.65625 34.441406 L 65.058594 34.441406 L 65.058594 25.492188 C 63.933594 25.34375 61.554688 25.007812 57.058594 25.007812 C 47.671875 25.007812 42.171875 29.96875 42.171875 41.261719 L 42.171875 48.082031 L 32.523438 48.082031 L 32.523438 58.335938 L 42.171875 58.335938 L 42.171875 85.015625 C 44.078125 85.304688 46.015625 85.5 48 85.5 C 49.796875 85.5 51.550781 85.335938 53.28125 85.101562 Z M 53.28125 58.335938 "
              //         />
              //       </g>
              //     </svg>
              //   </Icon>
              // }
              startIcon={
                <Icon>
                  <img style={{ height: "100%" }} src="/icons/facebook.svg" />
                </Icon>
              }
              className={classes.facebookButton}
            >
              Continue with Facebook
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="contained"
              fullWidth
              startIcon={
                <Icon>
                  <img style={{ height: "100%" }} src="/icons/apple.svg" />
                </Icon>
              }
              className={classes.appleButton}
            >
              Continue with Apple
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="contained"
              fullWidth
              startIcon={
                <Icon>
                  <img style={{ height: "100%" }} src="/icons/mail.png" />
                </Icon>
              }
              className={classes.emailButton}
            >
              Email me a Link
            </Button>
          </ListItem>
        </List>

        <List>
          <ListItem style={{ display: "block", textAlign: "center" }}>
            <Typography style={{ fontWeight: "bold" }}>
              Are you a real estate agent?
            </Typography>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Typography>
                <NextLink href="/login" passHref>
                  <Link href="/login">Log in</Link>
                </NextLink>{" "}
                or{" "}
                <NextLink href="/register" passHref>
                  <Link>create an account</Link>
                </NextLink>{" "}
                here
              </Typography>
            </div>
          </ListItem>
        </List>
      </DialogContent>
    </Dialog>
  );
}
