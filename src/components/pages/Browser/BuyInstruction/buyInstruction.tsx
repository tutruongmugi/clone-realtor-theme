import {
  Button,
  FormControl,
  Grid,
  Hidden,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ReactPlayer from "react-player";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";
import NextLink from "next/link";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";

export default function BuyInstruction() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [packing, setPacking] = useState("");
  const [sizeOfMove, setSizeOfMove] = useState("");

  const handleChangePacking = (e) => {
    setPacking(e.target.value);
  };
  const handleChangeSizeOfMove = (e) => {
    setSizeOfMove(e.target.value);
  };

  const submitHandler = () => {};

  return (
    <div style={{ marginTop: 20 }}>
      <Typography style={{ fontSize: 20, fontWeight: "bold" }}>
        How to buy a home in San Juan, PR
      </Typography>
      <Grid container spacing={0.4}  >
        <Hidden mdDown>
          <Grid item md={4}>
            <div style={{ border: "1px solid #dcdcdc", padding: 20 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography>How to Buy</Typography>
                <NextLink href="#" passHref>
                  <Link
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "#37c",
                      width: 120,
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: 12,
                        fontWeight: "bold",
                      }}
                    >
                      MORE VIDEOS
                    </Typography>
                    <ArrowRightIcon />
                  </Link>
                </NextLink>
              </div>
              <ReactPlayer
                url={
                  "https://videos-fms.jwpsrv.com/0_62542a4c_0x27a5f19b960f6ec70d93cb7a631b4c9e7cda3903/content/conversions/Obf13ESt/videos/ckJjvmOE-21944002.mp4"
                }
                controls
                playing
                width="100%"
                height="100%"
                config={{
                  file: {
                    attributes: {
                      disablepictureinpicture: "true",
                      controlsList: "nodownload",
                      onContextMenu: (e) => e.preventDefault(),
                    },
                  },
                }}
                style={{ marginTop: 20 }}
              />
              <Typography
                style={{ fontWeight: "bold", marginTop: 20, fontSize: 16 }}
              >
                3 Desperate Moves Buyers Should Avoid
              </Typography>
              <Typography style={{ marginTop: 10, fontSize: 14 }}>
                Video: 3 Desperate Moves Buyers Should Avoid
              </Typography>
              <NextLink href="#" passHref>
                <Link
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#37c",
                    width: 120,
                    marginTop: 10,
                    marginBottom: 20,
                  }}
                >
                  <Typography
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    READ MORE
                  </Typography>
                  <ArrowDropDownTwoToneIcon />
                </Link>
              </NextLink>
            </div>
          </Grid>
        </Hidden>
        <Hidden xsDown>
          <Grid item md={4} sm={6}>
            <div style={{ border: "1px solid #dcdcdc", padding: 20 }}>
              <Typography style={{ fontSize: 16, marginBottom: 20 }}>
                Be prepared to buy
              </Typography>
              <Image
                alt="rs-banner1"
                src="/images/rs1.jpg"
                layout="responsive"
                width={700}
                height={300}
              />
              <Typography
                style={{ fontSize: 16, marginTop: 20, fontWeight: "bold" }}
              >
                Get Pre-Approved
              </Typography>
              <Typography style={{ marginTop: 10 }}>
                A pre-approval letter from a lender makes your offer stronger.
              </Typography>
              <div
                style={{
                  marginTop: 20,
                  justifyContent: "center",
                  display: "flex",
                  marginBottom: 20,
                }}
              >
                <Button variant="outlined" color="primary">
                  Get Pre-Approved
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item md={4} sm={6}>
            <form
              onSubmit={handleSubmit(submitHandler)}
              style={{ border: "1px solid #dcdcdc", padding: 20 }}
            >
              <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
                Moving Cost Calculator
              </Typography>
              <Grid container spacing={1}>
                <Grid item md={6}>
                  <Typography style={{ marginTop: 20, fontWeight: "bold" }}>
                    Move from
                  </Typography>
                  <Controller
                    name="zipCode"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: true,
                      minLength: 5,
                    }}
                    render={({ field }) => (
                      <TextField
                        placeholder="ZIP code"
                        id="zipCode"
                        inputProps={{ maxLength: 5 }}
                        error={Boolean(errors.zipCode)}
                        helperText={
                          errors.zipCode
                            ? "Please enter your current five-digit ZIP code"
                            : ""
                        }
                        {...field}
                      />
                    )}
                  ></Controller>
                </Grid>
                <Grid item md={6}>
                  <Typography style={{ marginTop: 20, fontWeight: "bold" }}>
                    Move to
                  </Typography>
                  <TextField placeholder="ZIP code" />
                </Grid>
                <Grid item md={6}>
                  <Typography
                    style={{ fontSize: 16, marginTop: 20, fontWeight: "bold" }}
                  >
                    Size of move
                  </Typography>
                  <FormControl style={{ marginTop: 20 }} sx={{ minWidth: 120 }}>
                    <Select
                      value={sizeOfMove}
                      onChange={handleChangeSizeOfMove}
                      displayEmpty
                    >
                      <MenuItem disabled value="">
                        <em>Choose a size...</em>
                      </MenuItem>
                      <MenuItem value="Studio">Studio</MenuItem>
                      <MenuItem value="1">1 Bedroom</MenuItem>
                      <MenuItem value="2">2 Bedroom</MenuItem>
                      <MenuItem value="2.5">2-3 Bedroom</MenuItem>
                      <MenuItem value="3">3 Bedroom</MenuItem>
                      <MenuItem value="4">4 Bedroom</MenuItem>
                      <MenuItem value="5">5 Bedroom</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item md={6}>
                  <Typography
                    style={{ fontSize: 16, marginTop: 20, fontWeight: "bold" }}
                  >
                    Packing
                  </Typography>
                  <FormControl style={{ marginTop: 20 }} sx={{ minWidth: 120 }}>
                    <Select
                      value={packing}
                      onChange={handleChangePacking}
                      displayEmpty
                    >
                      <MenuItem disabled value="">
                        <em>Choose an option...</em>
                      </MenuItem>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Partial">Partial</MenuItem>
                      <MenuItem value="Full">Full</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: 20, marginBottom: 20 }}
              >
                Get Estimates
              </Button>
            </form>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}
