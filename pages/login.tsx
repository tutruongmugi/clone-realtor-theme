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
import React, { useContext, useEffect } from "react";
import HeaderAuthentication from "../src/components/common/HeaderAuthentication/header-authentication";
import useStyles from "../src/utils/styles";
import { Controller, useForm } from "react-hook-form";
import ErrorIcon from "@mui/icons-material/Error";
import ReactPlayer from "react-player";
import { apiUrl } from "../src/constants/apiUrl";
import axios from "axios";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useAuth } from "../src/providers/authentication-provider";

export default function Login() {
  const classes = useStyles();
  const router = useRouter();

  const authContext = useAuth();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (authContext?.isAuthenticated) {
      console.log("userinfo: ", authContext?.userInfo);
      console.log("token: ", authContext?.accessToken);
      reset({ email: "", password: "" });
      router.push("/");
      enqueueSnackbar("Login Sucessfully!!!", { variant: "success" });
    }
  }, [authContext?.isAuthenticated]);

  const submitHandler = async (data: any) => {
    const { email, password } = data;
    // await axios
    //   .post(apiUrl + "auth/login", {
    //     email: email,
    //     password: password,
    //   })
    //   .then((response) => {
    //     console.log("response; ", response.data);
    //     reset({ email: "", password: "" });

    //     router.push("/");
    //     enqueueSnackbar("Login Sucessfully!!!",{variant:'success'})
    //   })
    //   .catch((err) => {
    //     console.log("err; ", err);
    //   });
    await authContext?.login(email, password);
  };

  return (
    <div>
      <HeaderAuthentication isLoginHeader={true} />
      <Container maxWidth="md">
        <div style={{ textAlign: "center", marginTop: 60, marginBottom: 30 }}>
          <Typography
            style={{ marginBottom: 15 }}
            className={classes.titleText}
          >
            Welcome back to realtor.com® for professionals
          </Typography>
          <Typography style={{ margin: "20px 0" }} className={classes.grayText}>
            Log in to your professional dashboard account to enhance your
            listings, manage ratings, reviews and recommendations, send reports
            to clients, and much more.
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
                <ListItem style={{ display: "block", margin: "10px 0" }}>
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
                  <NextLink href="#" passHref>
                    <Link
                      style={{
                        padding: "8px 0",
                        position: "absolute",
                        right: 70,
                      }}
                      className={classes.linkText}
                    >
                      Forgot Email?
                    </Link>
                  </NextLink>
                </ListItem>
                <ListItem style={{ display: "block", margin: "10px 0" }}>
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
                  <NextLink href="#" passHref>
                    <Link
                      style={{
                        padding: "8px 0",
                        position: "absolute",
                        right: 70,
                      }}
                      className={classes.linkText}
                    >
                      Forgot Email?
                    </Link>
                  </NextLink>
                </ListItem>
                <ListItem style={{ display: "flex" }}>
                  <Checkbox
                    sx={{
                      color: "#5769CC",
                      "&.Mui-checked": {
                        color: "#5769CC",
                      },
                      "&:hover": {
                        backgroundColor: "white",
                      },
                    }}
                    defaultChecked
                  />
                  <Typography>Remember me</Typography>
                </ListItem>
                <ListItem style={{ justifyContent: "center" }}>
                  <Button
                    size="large"
                    variant="contained"
                    style={{ borderRadius: 4, backgroundColor: "#384cb8" }}
                    type="submit"
                  >
                    Log in
                  </Button>
                </ListItem>
                <ListItem
                  style={{ margin: "20px 0", justifyContent: "center" }}
                >
                  <Typography className={classes.grayText}>
                    Don't have an account?{" "}
                    <NextLink href={`/register`} passHref>
                      <Link className={classes.linkText}>Sign up</Link>
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
                    Trying to log in to your ReadyConnect/Opcity dashboard?{" "}
                    <NextLink href={`/register`} passHref>
                      <Link className={classes.linkText}>Click here</Link>
                    </NextLink>
                  </Typography>
                </ListItem>
              </List>
            </form>
          </Grid>
          <Grid item md={6} xs={12}>
            <ReactPlayer
              url={"https://player.vimeo.com/video/656297718?h=0ede5d041c"}
              controls
              width="100%"
              height="50%"
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
