import { IconButton } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function SlideImages() {
  return (
    <div style={{  }}>
      <ArrowForwardIosIcon />
      <div style={{display:'flex',width:'100%',height:500}}>
        <img src="/images/rs1.jpg" alt="" />
        <img src="/images/rs2.jpg" alt="" />
        <img src="/images/rs3.jpg" alt="" />
        <img src="/images/rs4.jpg" alt="" />
      </div>
    </div>
  );
}
