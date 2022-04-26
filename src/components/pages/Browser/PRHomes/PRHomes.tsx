import { Grid, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import NextLink from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const topRS = [
  "San Juan Homes for Sale",
  "Rincon Homes for Sale",
  "Cabo Rojo Homes for Sale",
  "Aguadilla Homes for Sale",
  "Isabela Homes for Sale",
  "Dorado Homes for Sale",
  "Alt De Villa Fontana Homes for Sale",
  "San Juan Homes for Sale",
  "Rincon Homes for Sale",
  "Cabo Rojo Homes for Sale",
  "Aguadilla Homes for Sale",
  "Isabela Homes for Sale",
  "Dorado Homes for Sale",
  "Alt De Villa Fontana Homes for Sale",
  "San Juan Homes for Sale",
  "Rincon Homes for Sale",
  "Cabo Rojo Homes for Sale",
  "Aguadilla Homes for Sale",
  "Isabela Homes for Sale",
  "Dorado Homes for Sale",
];

export default function PRHomes() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div style={{ marginTop: 20 }}>
      <Typography style={{ fontSize: 20, fontWeight: "bold" }}>
        San Juan, PR Real Estate & Homes for Sale
      </Typography>
      <div style={{ border: "1px solid #dcdcdc", padding: 20 }}>
        <Typography>
          Homes for sale in San Juan, PR have a median listing home price of
          $175,000. There are 487 active homes for sale in San Juan, PR. Some of
          the hottest neighborhoods near San Juan, PR are Santurce, Sabana Llana
          Sur, Hato Rey Norte, Viejo San Juan, Cangrejo Arriba. You may also be
          interested in single family homes and condo/townhomes for sale in
          popular zip codes like 00926, 00907, or three bedroom homes for sale
          in neighboring cities, such as Carolina, Guaynabo, Trujillo Alto,
          Caguas, Fajardo.
        </Typography>

        {isShown ? (
          <div>
            <Typography
              style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}
            >
              Top Real Estate Markets in Puerto Rico
            </Typography>
            <Grid container>
              {topRS.map((text, index) => (
                <Grid item key={index} md={4}>
                  <NextLink href="#" passHref>
                    <Link
                      underline="hover"
                      style={{ color: "#3377cc", fontSize: 12 }}
                    >
                      {text}
                    </Link>
                  </NextLink>
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          <div></div>
        )}

        {isShown ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#3377cc",
              justifyContent: "flex-end",
              cursor: "pointer",
            }}
            onClick={()=>{
                setIsShown(!isShown)
            }}
          >
            <Typography style={{ fontWeight: "bold", fontSize: 12 }}>
              LESS
            </Typography>
            <ArrowDropUpIcon />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#3377cc",
              justifyContent: "flex-end",
              cursor: "pointer",
            }}
            onClick={()=>{
                setIsShown(!isShown)
            }}
          >
            <Typography style={{ fontWeight: "bold", fontSize: 12 }}>
              MORE
            </Typography>
            <ArrowDropDownIcon />
          </div>
        )}
      </div>
    </div>
  );
}
