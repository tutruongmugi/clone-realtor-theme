import {
  Box,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { Home } from "../../src/interface";
import HomePaginationItem from "../../src/components/realEstateAndHomes-Search/homePaginationItem";
import ListHomeWithSpecialFeatures from "../../src/components/listHome/ListHomeWithSpecialFeatures";
import PopularSeaches from "../../src/components/pages/Browser/PopularSeaches";
import Facts from "../../src/components/pages/Browser/Facts/facts";
import NearByLocation from "../../src/components/pages/Browser/NearByLocation/NearByLocation";
import BuyInstruction from "../../src/components/pages/Browser/BuyInstruction/buyInstruction";
import PRHomes from "../../src/components/pages/Browser/PRHomes/PRHomes";
import Layout from "../../src/layouts/Layout";
import BrowserSearchHeader from "../../src/components/pages/Browser/BrowserSearchHeader/browser-search-header";

const homes: Home[] = [
  {
    name: "Single-Family-Home",
    image: "/images/rs1.jpg",
    price: 299000,
    bed: 2,
    bath: 3,
    sqft: 5,
    acreLot: 5,
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
    acreLot: 5,
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
    acreLot: 5,
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
    acreLot: 0,
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
    acreLot: 0,
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
    acreLot: 0,
    address: "6562 SW 129th Ln,Ocala, FL 34473",
    updatedAt: "bbbb",
    seen: false,
  },
];

export default function Search() {
  const [sortIndex, setSortIndex] = useState(0);

  return (
    <Layout>
      <div style={{ padding: 10 }}>
        <BrowserSearchHeader />
        <div style={{ marginTop: 60 }}>
          <Typography
            style={{ fontWeight: "bold" }}
            sx={{
              fontSize: {
                sx: "1rem",
                md: "1.5rem",
              },
            }}
          >
            San Juan, PR Real Estate & Homes for Sale
          </Typography>
          <Box
            style={{ display: "flex" }}
            sx={{
              justifyContent: {
                xs: "space-between",
                md: "flex-start",
              },
            }}
          >
            <Typography style={{ marginRight: 10 }}>482 homes</Typography>
            <div style={{ display: "flex" }}>
              <Typography style={{ marginRight: 5 }}>Sort by</Typography>
              <Box
                style={{
                  display: "flex",
                  color: "#3377cc",
                  alignItems: "center",
                }}
              >
                <Typography>Relevant Listings</Typography>
                <KeyboardArrowDownIcon />
              </Box>
            </div>
          </Box>
        </div>
        <Grid container spacing={1} style={{ marginTop: 10 }}>
          {homes.map((home, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <HomePaginationItem homeItem={home} />
            </Grid>
          ))}
        </Grid>
        <div
          style={{ justifyContent: "center", display: "flex", marginTop: 30 }}
        >
          <Stack spacing={2}>
            <Pagination
              count={10}
              variant="outlined"
              shape="rounded"
              size="large" 
            />
          </Stack>
        </div>
        <Typography style={{ marginTop: 20,textAlign:'center' }}>
          Found 296 matching properties
        </Typography>

        <Container maxWidth="lg">
          <ListHomeWithSpecialFeatures homeData={homes} />
          <PopularSeaches text={"Popular searches in San Juan, PR"} />
          <Facts />
          <PopularSeaches text={"Property types in San Juan, PR"} />
          <NearByLocation />
          <BuyInstruction />
          <PRHomes />
        </Container>
      </div>
    </Layout>
  );
}
