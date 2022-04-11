import { Container, Grid, Hidden, Typography } from "@mui/material";
import React from "react";
import Layout from "../../src/layouts/Layout";
import FormContactInformation from "../../src/components/pages/realEstateAndHomesDetail/formContactInformation";
import HomeDetailInformation from "../../src/components/pages/realEstateAndHomesDetail/homeDetailInformation";
import Image from "next/image";
import { Home } from "../../src/interface";
import ListHomeCarousel from "../../src/components/listHome/ListHomecarousel";

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
];

export default function RealEstateandHomesDetail() {
  return (
    <Layout>
      <Container>
        <div>something above</div>
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
        <div   >
          <Typography variant="h6" style={{textAlign:'center',marginBottom:20,marginTop:40}}>Learn more about Se Calle # 11</Typography>
          <Grid container style={{justifyContent:'center'}} >
            <Grid item md={3} style={{marginRight:15}}>
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
    </Layout>
  );
}
