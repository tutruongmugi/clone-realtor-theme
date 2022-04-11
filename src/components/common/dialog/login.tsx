import React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Controller, useForm } from "react-hook-form";
import { Button, List, ListItem, Typography, Link } from "@mui/material";
import GoogleLogin from "react-google-login";
import GoogleButton from "react-google-button";
import NextLink from "next/link";

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

  const submitHandler =  () => {


  };

  const responseGoogle = (response) => {
    console.log(response);
  };

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
              <Button variant="contained" color="primary" fullWidth>
                Continue
              </Button>
            </ListItem>
          </List>
        </form>
        <List>
          <ListItem>
            <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              render={(renderProps) => (
                <GoogleButton onClick={renderProps.onClick}>
                  Sign in with Google
                </GoogleButton>
              )}
            />
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
