import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function SearchFeatureItem({ text }: { text: String }) {
  return (
    <div
      style={{
        position: "relative",
        width: 200,
        height: 90,
        borderRadius: 5,
        overflow: "hidden",
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:'8px 6px',
        cursor:'pointer', 
      }}
    >
      <Image
        src="/images/rs1.jpg"
        alt="rs1"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Typography
        style={{
          fontWeight: "bold",
          color: "white",
          position: "absolute",
        }}
      >
        {text}
      </Typography>
    </div>
  );
}
