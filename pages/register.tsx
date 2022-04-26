import {
  Typography,
  Link,
  Grid,
  Container,
  List,
  ListItem,
  TextField,
  Checkbox,
  Button,
} from "@mui/material";
import NextLink from "next/link";
import React from "react";
import HeaderAuthentication from "../src/components/common/HeaderAuthentication/header-authentication";
import useStyles from "../src/utils/styles";
import { Controller, useForm } from "react-hook-form";
import ErrorIcon from "@mui/icons-material/Error";
import ReactPlayer from "react-player";
import axios from "axios";
import { apiUrl } from "../src/constants/apiUrl";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

export default function Register() {
  const classes = useStyles();
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const submitHandler = async (data: {
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
  }) => {
    closeSnackbar();
    const { email, confirmEmail, password, confirmPassword, phoneNumber } =
      data;

    if (email !== confirmEmail) {
      enqueueSnackbar("emails don't match", { variant: "error" });
      return;
    }
    if (password !== confirmPassword) {
      enqueueSnackbar("passwords don't match", { variant: "error" });
      return;
    }
    await axios
      .post(apiUrl + "auth/register", {
        email: email,
        password: password,
        name: "name",
        phone: phoneNumber,
      })
      .then((response) => {
        console.log("response; ", response.data);
        reset({
          email: "",
          confirmEmail: "",
          password: "",
          confirmPassword: "",
          phoneNumber: "",
        });
        router.push("/login");
        enqueueSnackbar("Register Sucessfully!!!",{variant:'success'})
      })
      .catch((err) => {
        console.log("err; ", err.response.data);
      });
  };

  return (
    <div>
      <HeaderAuthentication isLoginHeader={false} />
      <Container maxWidth="lg">
        <div style={{ textAlign: "center", marginTop: 60, marginBottom: 30 }}>
          <Typography
            style={{ marginBottom: 15 }}
            className={classes.titleText}
          >
            Create a professional account
          </Typography>
          <Typography style={{ margin: "20px 0" }} className={classes.grayText}>
            {`Sign up to use your professional dashboard—it's fast and free. Showcase your brand, enhance your listings and much more.`}
          </Typography>
          <NextLink href="#" passHref>
            <Link className={classes.linkText}>
              Learn more about your professional dashboard. Visit our Support
              Site
            </Link>
          </NextLink>
        </div>
        <Grid container spacing={0.5}>
          <Grid item md={6} xs={12}>
            <form onSubmit={handleSubmit(submitHandler)}>
              <List>
                <ListItem style={{ display: "block" }}>
                  <Typography style={{ margin: "4px 0" }}>
                    Email address
                  </Typography>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: true,
                      pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    }}
                    render={({ field }) => (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <TextField
                          fullWidth
                          placeholder="Enter your email address"
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
                        {Boolean(errors.email) ? (
                          <ErrorIcon color="primary" sx={{ width: 50 }} />
                        ) : (
                          <div style={{ width: 60 }}></div>
                        )}
                      </div>
                    )}
                  ></Controller>
                </ListItem>
                <ListItem style={{ display: "block" }}>
                  <Typography style={{ margin: "4px 0" }}>
                    Confirm email address
                  </Typography>
                  <Controller
                    name="confirmEmail"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: true,
                      pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    }}
                    render={({ field }) => (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <TextField
                          fullWidth
                          placeholder="Confirm your email address"
                          id="confirmEmail"
                          inputProps={{ type: "confirmEmail" }}
                          error={Boolean(errors.confirmEmail)}
                          helperText={
                            errors.confirmEmail
                              ? errors.confirmEmail.type === "pattern"
                                ? "Please enter a valid email"
                                : "Email is required"
                              : ""
                          }
                          {...field}
                        />
                        {Boolean(errors.confirmEmail) ? (
                          <ErrorIcon color="primary" sx={{ width: 50 }} />
                        ) : (
                          <div style={{ width: 60 }}></div>
                        )}
                      </div>
                    )}
                  ></Controller>
                </ListItem>
                <ListItem style={{ display: "block" }}>
                  <Typography style={{ margin: "4px 0" }}>Password</Typography>
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: true,
                      minLength: 6,
                    }}
                    render={({ field }) => (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <TextField
                          fullWidth
                          placeholder="Enter your password"
                          id="password"
                          inputProps={{ type: "password" }}
                          error={Boolean(errors.password)}
                          helperText={
                            errors.password
                              ? errors.password.type === "minLength"
                                ? "Password length is more than 5"
                                : "Password is required"
                              : ""
                          }
                          {...field}
                        />
                        {Boolean(errors.password) ? (
                          <ErrorIcon color="primary" sx={{ width: 50 }} />
                        ) : (
                          <div style={{ width: 60 }}></div>
                        )}
                      </div>
                    )}
                  ></Controller>
                </ListItem>
                <ListItem style={{ display: "block" }}>
                  <Typography style={{ margin: "4px 0" }}>
                    Confirm password
                  </Typography>
                  <Controller
                    name="confirmPassword"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: true,
                      minLength: 6,
                    }}
                    render={({ field }) => (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <TextField
                          fullWidth
                          placeholder="Confirm your Password"
                          id="confirmPassword"
                          inputProps={{ type: "password" }}
                          error={Boolean(errors.confirmPassword)}
                          helperText={
                            errors.confirmPassword
                              ? errors.confirmPassword.type === "minLength"
                                ? "Password length is more than 5"
                                : "Password is required"
                              : ""
                          }
                          {...field}
                        />
                        {Boolean(errors.confirmPassword) ? (
                          <ErrorIcon color="primary" sx={{ width: 50 }} />
                        ) : (
                          <div style={{ width: 60 }}></div>
                        )}
                      </div>
                    )}
                  ></Controller>
                </ListItem>
                <ListItem style={{ display: "block" }}>
                  <Typography style={{ margin: "4px 0" }}>
                    Phone number
                  </Typography>
                  <Controller
                    name="phoneNumber"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: true,
                    }}
                    render={({ field }) => (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <TextField
                          fullWidth
                          placeholder="Enter your Phone Number"
                          id="phoneNumber"
                          inputProps={{ type: "phoneNumber" }}
                          error={Boolean(errors.phoneNumber)}
                          helperText={
                            errors.phoneNumber
                              ? "A valid phone number is required."
                              : ""
                          }
                          {...field}
                        />
                        {Boolean(errors.phoneNumber) ? (
                          <ErrorIcon color="primary" sx={{ width: 50 }} />
                        ) : (
                          <div style={{ width: 60 }}></div>
                        )}
                      </div>
                    )}
                  ></Controller>
                </ListItem>

                <ListItem style={{ justifyContent: "center" }}>
                  <Button
                    size="large"
                    variant="contained"
                    style={{ borderRadius: 4, backgroundColor: "#384cb8" }}
                    type="submit"
                  >
                    Next step
                  </Button>
                </ListItem>
                <ListItem
                  style={{ margin: "20px 0", justifyContent: "center" }}
                >
                  <Typography className={classes.grayText}>
                    Already have a professional account?{" "}
                    <NextLink href={`/login`} passHref>
                      <Link className={classes.linkText}>Log in here</Link>
                    </NextLink>
                  </Typography>
                </ListItem>
                <ListItem
                  style={{
                    margin: "20px 0",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Typography className={classes.grayText}>
                    Have questions? We're happy to help.{" "}
                    <NextLink href="#" passHref>
                      <Link className={classes.linkText}>Send us an email</Link>
                    </NextLink>
                  </Typography>
                </ListItem>
              </List>
            </form>
          </Grid>
          <Grid item md={6} xs={12}>
            <ReactPlayer
              url={"https://player.vimeo.com/video/656297662?h=193d600b48"}
              controls
              width="100%"
              height="30%"
              config={{
                file: {
                  attributes: {
                    disablepictureinpicture: "true",
                    controlsList: "nodownload",
                    onContextMenu: (e: any) => e.preventDefault(),
                  },
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
