import { Typography } from "@mui/material";
import React from "react";
import SearchFeatureItem from "../../../common/SearchFeatures/searchFeatureItem";

export default function PopularSeaches({text}:{text:String}) {
  return (
    <div style={{marginTop:30}}>
      <Typography variant="h6" style={{ fontWeight: "bold",marginBottom:10 }}>
        {text}
      </Typography>

      <SearchFeatureItem text={"Rental Property"} />
    </div>
  );
}
