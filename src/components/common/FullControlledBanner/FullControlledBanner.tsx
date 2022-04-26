import { Box, Hidden, IconButton, Typography, useTheme } from "@mui/material";
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
          width: "100vw",
          overflow: "hidden",
          position: "relative",
          height: "50vh",
        }}
      >
        <Image
          alt="Banner"
          src="/images/banner.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <Box
          style={{
            position: "absolute",
            textAlign: "center",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Typography
            align="center"
            style={{ color: "#fff", fontWeight: "bold" }}
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.75rem",
                md: "2.25rem",
              },
            }}
          >
            To each their home.℠
          </Typography>
          <Typography
            style={{ color: "#fff" }}
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1.25rem",
                md: "1.75rem",
              },
            }}
          >
            Let’s find a home that’s perfect for you
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "16px 0",
            }}
          >
            {menuRealEstateForSaleItems.map(
              (menuRealEstateForSaleItem, index) => (
                <Hidden
                  mdDown={
                    ["buy", "rent", "pre-approval"].includes(
                      menuRealEstateForSaleItem.toLowerCase()
                    )
                      ? false
                      : true
                  }
                  key={index}
                >
                  <AppbarMenuItem
                    text={menuRealEstateForSaleItem}
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
                      textTransform: "uppercase",
                      height: 48,
                      marginLeft: 8,
                      marginRight: 8,
                    }}
                    textProps={{
                      style: { fontWeight: "bold" },
                      variant: "body2",
                    }}
                  />
                </Hidden>
              )
            )}
          </div>
          <SearchInput />
        </Box>
      </div>
    </div>
  );
}
