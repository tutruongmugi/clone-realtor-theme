import {
  Container,
  Grid,
  Hidden,
  IconButton,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import NextLink from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRouter } from "next/router";
import Layout from "../../../layouts/Layout";
import useStyles from "../../../utils/styles";
import { Home } from "../../../interface";
import HomeDetailInformation from "./homeDetailInformation";
import FormContactInformation from "./formContactInformation";
import ListHomeCarousel from "../../listHome/ListHomeCarousel";
import { useHomeDetail } from "../../../providers/home-detail-provider";

const homes: Home[] = [
  {
    name: "Single-Family-Home",
    image: "/images/rs1.jpg",
    price: 299000,
    bed: 2,
    bath: 3,
    sqft: 5,
    acrelot: 5,
    address: "6562 SW 129th Ln,Ocala, FL 34473",
    updatedAt: "Unique Home",
    seen: false,
  },
  {
    name: "Single-Family-Home",
    image: "/images/rs2.jpg",
    price: 250000,
    bed: 3,
    bath: 3,
    sqft: 5,
    acrelot: 5,
    address: "6562 SW 129th Ln,Ocala, FL 34473",
    updatedAt: "bbbb",
    seen: false,
  },
  {
    name: "Single-Family-Home",
    image: "/images/rs3.jpg",
    price: 499000,
    bed: 4,
    bath: 3,
    sqft: 5,
    acrelot: 5,
    address: "6562 SW 129th Ln,Ocala, FL 34473",
    updatedAt: "bbbb",
    seen: false,
  },
  {
    name: "Single-Family-Home",
    image: "/images/rs4.jpg",
    price: 263000,
    bed: 2,
    bath: 2,
    sqft: 3,
    acrelot: 0,
    address: "6562 SW 129th Ln,Ocala, FL 34473",
    updatedAt: "bbbb",
    seen: false,
  },
  {
    name: "Single-Family-Home",
    image: "/images/rs4.jpg",
    price: 263000,
    bed: 2,
    bath: 2,
    sqft: 3,
    acrelot: 0,
    address: "6562 SW 129th Ln,Ocala, FL 34473",
    updatedAt: "bbbb",
    seen: false,
  },
];

export default function RealEstateAndHomesDetail() {
  const classes = useStyles();
  const router = useRouter();
  const homeDetailContext = useHomeDetail();

  useEffect(() => {
    let id = "1";
    homeDetailContext?.loadHome(id);
    console.log("homeDetailContext", homeDetailContext?.gettingHome);
  }, []);

  const [inputValue, setInputValue] = useState("");
  return (
    // <Layout>
      <Container>
        <div>
          <div
            style={{ display: "flex", alignItems: "center", margin: "5px 0" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": {
                  color: "rgb(117, 117, 117)",
                },
              }}
              onClick={() => {
                router.back();
              }}
            >
              <ArrowBackIosNewIcon style={{ fontSize: 16 }} />
              <Typography style={{ marginRight: 10 }}>Back</Typography>
            </Box>
            <TextField
              style={{ width: 200 }}
              size="small"
              placeholder="Address, City, Zip, Neighboorhood, School"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              InputProps={{
                sx: {
                  borderRadius: "4px 0px 0px 4px",
                  paddingRight: 0,
                },
                endAdornment:
                  inputValue === "" ? (
                    <div></div>
                  ) : (
                    <IconButton
                      sx={{
                        "&:hover": {
                          color: "gray",
                          backgroundColor: "#fff",
                        },
                        color: "rgb(51, 51, 51)",
                      }}
                    >
                      <ClearIcon />
                    </IconButton>
                  ),
              }}
            />
            <IconButton
              style={{
                borderRadius: "0px 4px 4px 0px",
                border: "1px solid rgb(217, 34, 40)",
                backgroundColor: "rgb(217, 34, 40)",
                color: "#fff",
                marginRight: 8,
              }}
            >
              <SearchIcon />
            </IconButton>
    
            <Grid container>
              <Grid
                item
                lg={5}
                md={12}
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 5,
                }}
              >
                <NextLink href="#" passHref>
                  <Link > 
                  Puerto Rico</Link>
                </NextLink>
                <NavigateNextIcon style={{ color: "gray" }} />
                <NextLink href="#" passHref>
                  <Link >San Juan County</Link>
                </NextLink>
                <NavigateNextIcon style={{ color: "gray" }} />
                <NextLink href="#" passHref>
                  <Link >San Juan</Link>
                </NextLink>
                <NavigateNextIcon style={{ color: "gray" }} />
              </Grid>
              <Grid item lg={7} md={12}>
                <Typography  >
                  145-190 S Lic Eugenio Maria De Hostos Ave Unit B116
                </Typography>
              </Grid>
            </Grid>
     
          </div>
          <div style={{ marginTop: 10 }}>
            <Typography style={{ fontSize: 12, fontWeight: 400 }}>
              Presented by:
            </Typography>
            <div style={{ display: "flex", marginBottom: 10 }}>
              <Typography style={{ fontSize: 12, fontWeight: 700 }}>
                Nilka Rosado{" "}
              </Typography>
              <Typography
                style={{ fontSize: 12, fontWeight: 400, margin: "0 3px" }}
              >
                with{" "}
              </Typography>
              <Typography style={{ fontSize: 12, fontWeight: 700 }}>
                ORBITA
              </Typography>
            </div>
          </div>
        </div>
        <Grid container>
          <Grid item md={9}>
            <HomeDetailInformation />
          </Grid>
          <Hidden mdDown>
            <Grid item md={3}>
              <FormContactInformation />
            </Grid>
          </Hidden>
        </Grid>
        <div>
          <Typography
            variant="h6"
            style={{ textAlign: "center", marginBottom: 20, marginTop: 40 }}
          >
            Learn more about Se Calle # 11
          </Typography>
          <Grid container style={{ justifyContent: "center" }}>
            <Grid item md={3} style={{ marginRight: 15 }}>
              <FormContactInformation />
            </Grid>
            <Grid item md={6}>
              <Image
                src="/images/ex-home-detail-1.jpg"
                alt="#"
                width={550}
                height={430}
                layout="responsive"
              />
            </Grid>
          </Grid>
        </div>
        <ListHomeCarousel homeData={homes} homeTitle="Similar homes" />
      </Container>
    // </Layout>
  );
}
