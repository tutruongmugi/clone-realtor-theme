import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import useStyles from "../../../utils/styles";

export default function SearchFeatureItem({ text }: { text: String }) {
  const classes = useStyles();
  return (
    <div
      style={{
        position: "relative",
        width: 200,
        height: 90,
        borderRadius: 5,
        overflow: "hidden",
        cursor: "pointer",
        backgroundImage: `url(${"/images/rs-cover-data-story.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize:'cover'
      }}
    >
      <div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0, 0, 0, 0.5)",
          width: "100%",
          height: "100%",
        }}
      >
        <Typography
          style={{
            fontWeight: "bold",
            color: "white",
          }}
        >
          {text}
        </Typography>
      </div>
      {/* <Image
        src="/images/rs1.jpg"
        alt="rs1"
        layout="fill"
        objectFit="cover"
        quality={100}
      /> */}
    </div>
  );
}
