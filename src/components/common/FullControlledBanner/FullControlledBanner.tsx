import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { menuRealEstateForSaleItems } from "./__data__";
import AppbarMenuItem from "../../../globals/AppbarMenuItem";
import SearchInput from "../../../globals/searchInput";

export default function FullControlledBanner() {
  

  const [currentActiveTabIndex, setCurrentActiveTabIndex] = useState(0);
  const [currentMouseEnterTabIndex, setCurrentMouseEnterTabIndex] = useState<
    number | null
  >(null);

  return (
    <div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          zIndex: -1,
          position: "relative",
        }}
      >
        <Image
          alt="Banner"
          src="/images/banner.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <Box
        style={{
          position: "absolute",
          textAlign: "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Typography style={{ color: "#fff", fontWeight: "bold", fontSize: 56 }}>
          Title Home
        </Typography>
        <Typography style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
          Subtitle Home
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          {menuRealEstateForSaleItems.map((item, index) => (
            <div key={index}>
              <AppbarMenuItem
                text={item}
                isActive={
                  currentActiveTabIndex === index ||
                  currentMouseEnterTabIndex === index
                }
                onClick={() => {
                  setCurrentActiveTabIndex(index);
                }}
                onMouseEnter={() => {
                  setCurrentMouseEnterTabIndex(index);
                }}
                onMouseLeave={() => {
                  setCurrentMouseEnterTabIndex(null);
                }}
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  height: 48,
                }}
              ></AppbarMenuItem>
            </div>
          ))}
        </div>
        <SearchInput />
      </Box>
    </div>
  );
}
