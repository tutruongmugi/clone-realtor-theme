import { constants } from "perf_hooks";
import React, { useEffect } from "react";
import ListHome from "../src/components/listHome/ListHome";
import Layout from "../src/layouts/Layout";
import type { NextPage } from "next";
import { Article, Home } from "../src/interface";
import FullControlledBanner from "../src/components/common/FullControlledBanner";
import CoverDataStory from "../src/components/pages/realEstateForSale/coverDataStory";
import ListHomeArticle from "../src/components/listHomeArticle/ListHomeArticle";
import AddOnInformation from "../src/components/pages/realEstateForSale/addOnInformation";
import { useHomes } from "../src/providers/homes-provider";

const Realestateforsale: NextPage = () => {
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
  ];

  const articles: Article[] = [
    {
      name: "7 Bidding War Mistakes Today’s Homebuyers Are Making in Droves",
      image: "/images/rs1.jpg",
      titleAction: "Buy",
    },
    {
      name: "Should You Waive Contingencies To Win a Home? 4 Situations When It Might Be OK By Kathleen Willcox",
      image: "/images/rs2.jpg",
      titleAction: "Buy",
    },
    {
      name: "A Double Delight: The Week’s Oldest Home Is From 1695—and It Comes With a Bonus House From 1995 By Kellie Speed",
      image: "/images/rs3.jpg",
      titleAction: "unique homes",
    },
    {
      name: "Inside Shondaland: Peek at the Real Estate Portfolio of Shonda Rhimes By Claudine Zap",
      image: "/images/rs4.jpg",
      titleAction: "celebrity real estate",
    },
  ];

  const homesContext=useHomes();
  useEffect(()=>{
    homesContext.loadHomes()
  },[])

  return (
    <Layout>
      <FullControlledBanner />
      <ListHome homeData={homesContext.homes} homeTitle="Homes around $252,000" />
      <ListHome homeData={homesContext.homes} homeTitle="Newest Listings" />
      <ListHome homeData={homesContext.homes} homeTitle="Upcoming Open Houses" />
      <ListHome homeData={homesContext.homes} homeTitle="Affordable Homes" />
      <ListHome homeData={homesContext.homes} homeTitle="Luxury Homes" />
      <CoverDataStory />
      <ListHomeArticle articleData={articles} />
      <AddOnInformation />
    </Layout>
  );
};

export default Realestateforsale;
