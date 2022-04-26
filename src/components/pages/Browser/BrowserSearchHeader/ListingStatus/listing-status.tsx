import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Grid,
  Checkbox,
} from "@mui/material";
import React from "react";

const listingStatusRadio = [
  "Any - For Sale",
  "Existing Homes",
  "New Construction",
  "Foreclosures",
  "Recently Sold",
  "55+ Community",
];
const listingStatusCheckBox = [
  "55+ Community",
  "Hide Foreclosures",
  "Hide 55+ Community",
  "Price Reduced",
  "Open House",
  "Virtual Tours",
  "3D Tours",
];

export default function ListingStatus() {
  return (
    <Box
      position="absolute"
      style={{
        padding: 16,
        backgroundColor: "#fff",
        border: "1px solid rgb(148, 148, 148)",
        borderRadius: 4,
        width: 400,
        marginTop: 10,
        height: 400,
        zIndex: 1,
      }}
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <Typography fontWeight="bold">Listing Status</Typography>
      <FormControl>
        <RadioGroup defaultValue={"0"} name="radio-buttons-group">
          <Grid container>
            {listingStatusRadio.map((listingStatusRadioItem, index) => (
              <Grid item key={index} md={6}>
                <FormControlLabel
                  value={index}
                  control={<Radio size="small" />}
                  label={listingStatusRadioItem}
                />
              </Grid>
            ))}
          </Grid>
        </RadioGroup>
      </FormControl>
      <div style={{height:1,borderBottom:'1px solid #c4c4c4',marginTop:20,marginBottom:20}}></div>
      <FormControl>
        <RadioGroup defaultValue={"0"} name="radio-buttons-group">
          <Grid container>
            {listingStatusCheckBox.map((listingStatusCheckBoxItem, index) => (
              <Grid item key={index} md={index<3? 12 : 6 }>
                <FormControlLabel 
                  control={<Checkbox size="small" defaultChecked={index===0} />}
                  label={listingStatusCheckBoxItem}
                />
              </Grid>
            ))}
          </Grid>
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
