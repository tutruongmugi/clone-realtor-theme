import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function CoverDataStory() {
  return (
    <div
      style={{
        display: "block",
        position: "relative",
        marginTop: 80,
        justifyContent: "center",
        backgroundImage: `url(${"/images/rs-cover-data-story.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: 620,
        // backgroundColor:'#000',
        // opacity:1
      }}
    >
      {/* <Image
        src="/images/rs-cover-data-story.jpg"
        alt="Cover Data Story"
        layout="responsive"
        width={700}
        height={225}
      ></Image> */}
      <Box
        style={{
          position: "absolute",
          // textAlign: "center",
          // top: "50%",
          // left: "50%",
          // transform: "translate(-50%,-50%)",
          background: "rgba(0, 0, 0, 0.5)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Typography
            style={{ color: "#fff", fontWeight: "bold", fontSize: 56 }}
          >
            Trends
          </Typography>
          <Typography
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 20,
            }}
          >
            Here Are the 10 Towns in America Where You Can Still Buy an
            Affordable (and Great) Vacation Home
          </Typography>
          <Button
            variant="outlined"
            style={{
              borderRadius: 32,
              padding: "8px 16px",
              color: "white",
              borderColor: "white",
              marginTop: 20,
            }}
          >
            Read More
          </Button>
        </div>
      </Box>
    </div>
  );
}
