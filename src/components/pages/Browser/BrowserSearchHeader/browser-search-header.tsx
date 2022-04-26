import {
  Box,
  Button,
  FormControl,
  Grid,
  Icon,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import SearchFilterItem from "../../../../globals/SearchFilterItem";
import ButtonBarItem from "../../../../globals/ButtonBarItem";
import ListingStatus from "./ListingStatus/listing-status";

const searchFilters = [
  "Price",
  "Property Tyoe",
  "Beds",
  "Baths",
  "Listing Status",
  "More Filters",
];
const propertyTypeItems = [
  "Any",
  "Single Family Home",
  "Condo",
  "Townhome",
  "Multi Family Home",
  "Mobile",
  "Farm",
  "Land",
];
const radioBedRooms = ["Any", "1+", "2+", "3+", "4+", "5+"];

export default function BrowserSearchHeader() {
  const [currentActiveTabIndex, setcurrentActiveTabIndex] = useState(-1);
  const [currentActiveBedIndex, setCurrentActiveBedIndex] = useState(0);
  const [currentActiveBathIndex, setCurrentActiveBathIndex] = useState(0);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [bedRoomsFrom, setBedRoomsFrom] = useState(0);
  const [bedRoomsTo, setBedRoomsTo] = useState(0);

  const [bathRoomsFrom, setBathRoomsFrom] = useState(0);
  const [bathRoomsTo, setBathRoomsTo] = useState(0);

  const handleChangeMinPrice = (e) => {
    setMinPrice(e.target.value);
  };
  const handleChangeMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleChangeBedRoomsFrom = (e) => {
    setBedRoomsFrom(e.target.value);
  };
  const handleChangeBedRoomsTo = (e) => {
    setBathRoomsTo(e.target.value);
  };
  const handleChangeBathRoomsFrom = (e) => {
    setBathRoomsFrom(e.target.value);
  };
  const handleChangeBathRoomsTo = (e) => {
    setBathRoomsTo(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        zIndex: 999,
        boxShadow: "0px 1px 3px 0px rgb(0 0 0 / 20%)",
        width: "100%",
        padding: 10,
        background: "white",
      }}
    >
      <div style={{ display: "flex" }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Address, City, Zip, Neighboorhood, School"
          InputProps={{
            sx: {
              borderRadius: "4px 0px 0px 4px",
              paddingRight: 0,
            },
            endAdornment: (
              <IconButton
                sx={{
                  "&:hover": {
                    color: "gray",
                    backgroundColor: "#fff",
                  },
                  color: "rgb(51, 51, 51)",
                }}
              >
                <ClearIcon />
              </IconButton>
            ),
          }}
        />
        <IconButton
          style={{
            borderRadius: "0px 4px 4px 0px",
            border: "1px solid rgb(217, 34, 40)",
            backgroundColor: "rgb(217, 34, 40)",
            color: "#fff",
            marginRight: 8,
          }}
        >
          {/* <img style={{ height: "100%" }} src="/icons/search-30.svg" /> */}
          <SearchIcon />
        </IconButton>
      </div>
      {searchFilters.map((searchFilterItem, index) => (
        <div key={index}>
          <SearchFilterItem
            text={searchFilterItem}
            isActive={currentActiveTabIndex === index}
            onClick={() => {
              if (currentActiveTabIndex === index) {
                setcurrentActiveTabIndex(-1);
              } else {
                setcurrentActiveTabIndex(index);
              }
            }}
          >
            {currentActiveTabIndex === index && index === 0 ? (
              <Box
                position="fixed"
                style={{
                  padding: 16,
                  backgroundColor: "#fff",
                  border: "1px solid rgb(148, 148, 148)",
                  borderRadius: 4,
                  width: 290,
                  marginTop: 10,
                  height: 140,
                  zIndex: 1,
                }}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <Typography fontWeight="bold" style={{ marginBottom: 20 }}>
                  Price
                </Typography>
                <div
                  style={{
                    marginTop: 25,
                    borderBottom: "1px solid #c4c4c4",
                    width: 4,
                    position: "absolute",
                    left: "50%",
                  }}
                ></div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <FormControl sx={{ minWidth: 120 }}>
                    <Select
                      value={minPrice}
                      onChange={handleChangeMinPrice}
                      displayEmpty
                      style={{
                        color: "#757575",
                        fontSize: 14,
                        fontWeight: 400,
                      }}
                    >
                      <MenuItem value={0}>Any Price</MenuItem>
                      <MenuItem value={50}>$50k</MenuItem>
                      <MenuItem value={90}>$90k</MenuItem>
                      <MenuItem value={140}>$140k</MenuItem>
                      <MenuItem value={180}>$180k</MenuItem>
                      <MenuItem value={250}>$250k</MenuItem>
                      <MenuItem value={300}>$300k</MenuItem>
                      <MenuItem value={350}>$350k</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ minWidth: 120 }}>
                    <Select
                      value={maxPrice}
                      onChange={handleChangeMaxPrice}
                      displayEmpty
                      style={{
                        color: "#757575",
                        fontSize: 14,
                        fontWeight: 400,
                      }}
                    >
                      <MenuItem value={90}>$90k</MenuItem>
                      <MenuItem value={182}>$180k</MenuItem>
                      <MenuItem value={250}>$250k</MenuItem>
                      <MenuItem value={350}>$350k</MenuItem>
                      <MenuItem value={450}>$450k</MenuItem>
                      <MenuItem value={500}>$500k</MenuItem>
                      <MenuItem value={600}>$600k</MenuItem>
                      <MenuItem value={0}>Any Price</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Box>
            ) : (
              <div></div>
            )}
            {currentActiveTabIndex === index && index === 1 ? (
              <Box
                position="fixed"
                style={{
                  padding: 16,
                  backgroundColor: "#fff",
                  border: "1px solid rgb(148, 148, 148)",
                  borderRadius: 4,
                  width: 290,
                  marginTop: 10,
                  height: 410,
                  zIndex: 1,
                }}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <Typography fontWeight="bold" style={{ marginBottom: 20 }}>
                  Property Type
                </Typography>
                <Grid container>
                  {propertyTypeItems.map((propertyTypeItem, index) => (
                    <Grid
                      key={index}
                      item
                      md={6}
                      style={{
                        display: "flex",
                        marginBottom: 5,
                        alignItems: "center",
                        color: "#757575",
                        cursor: "pointer",
                      }}
                      sx={{
                        "&:hover": {
                          color: "primary.main",
                          backgroundColor: "#000",
                        },
                      }}
                    >
                      <Icon style={{ width: 50, height: 50, marginRight: 8 }}>
                        <img
                          style={{ height: "100%" }}
                          src="/icons/property-type-item-1.png"
                        />
                      </Icon>
                      <Typography>{propertyTypeItem}</Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ) : (
              <div></div>
            )}
            {currentActiveTabIndex === index && index === 2 ? (
              <Box
                position="fixed"
                style={{
                  padding: 16,
                  backgroundColor: "#fff",
                  border: "1px solid rgb(148, 148, 148)",
                  borderRadius: 4,
                  width: 350,
                  marginTop: 10,
                  height: 200,
                  zIndex: 1,
                }}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <Typography fontWeight="bold">Bedrooms</Typography>
                <div style={{ display: "flex", marginBottom: 20 }}>
                  {radioBedRooms.map((bedRoomItem, index) => (
                    <ButtonBarItem
                      key={index}
                      text={bedRoomItem}
                      isActive={currentActiveBedIndex === index}
                      onClick={() => {
                        setCurrentActiveBedIndex(index);
                      }}
                    />
                  ))}
                </div>
                <Typography
                  style={{
                    fontSize: 12,
                    color: "#757575",
                    marginBottom: 10,
                  }}
                >
                  Or Select Bedrooms Range
                </Typography>
                <div
                  style={{
                    marginTop: 25,
                    borderBottom: "1px solid #c4c4c4",
                    width: 4,
                    position: "absolute",
                    left: "50%",
                  }}
                ></div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <FormControl sx={{ minWidth: 155 }}>
                    <Select
                      value={bedRoomsFrom}
                      onChange={handleChangeBedRoomsFrom}
                      displayEmpty
                      style={{
                        color: "#757575",
                        fontSize: 14,
                        fontWeight: 400,
                      }}
                    >
                      <MenuItem value={-1}>From</MenuItem>
                      <MenuItem value={0}>Studio</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ minWidth: 150 }}>
                    <Select
                      value={bedRoomsTo}
                      onChange={handleChangeBedRoomsTo}
                      displayEmpty
                      style={{
                        color: "#757575",
                        fontSize: 14,
                        fontWeight: 400,
                      }}
                    >
                      <MenuItem value={-1}>To</MenuItem>
                      <MenuItem value={0}>Studio</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Box>
            ) : (
              <div></div>
            )}
            {currentActiveTabIndex === index && index === 3 ? (
              <Box
                position="fixed"
                style={{
                  padding: 16,
                  backgroundColor: "#fff",
                  border: "1px solid rgb(148, 148, 148)",
                  borderRadius: 4,
                  width: 350,
                  marginTop: 10,
                  height: 200,
                  zIndex: 1,
                }}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                <Typography fontWeight="bold">Bathrooms</Typography>
                <div style={{ display: "flex", marginBottom: 20 }}>
                  {radioBedRooms.map((bathRoomItem, index) => (
                    <ButtonBarItem
                      key={index}
                      text={bathRoomItem}
                      isActive={currentActiveBathIndex === index}
                      onClick={() => {
                        setCurrentActiveBathIndex(index);
                      }}
                    />
                  ))}
                </div>
                <Typography
                  style={{
                    fontSize: 12,
                    color: "#757575",
                    marginBottom: 10,
                  }}
                >
                  Or Select Bathrooms Range
                </Typography>
                <div
                  style={{
                    marginTop: 25,
                    borderBottom: "1px solid #c4c4c4",
                    width: 4,
                    position: "absolute",
                    left: "50%",
                  }}
                ></div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <FormControl sx={{ minWidth: 155 }}>
                    <Select
                      value={bathRoomsFrom}
                      onChange={handleChangeBathRoomsFrom}
                      displayEmpty
                      style={{
                        color: "#757575",
                        fontSize: 14,
                        fontWeight: 400,
                      }}
                    >
                      <MenuItem value={0}>From</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ minWidth: 150 }}>
                    <Select
                      value={bathRoomsTo}
                      onChange={handleChangeBathRoomsTo}
                      displayEmpty
                      style={{
                        color: "#757575",
                        fontSize: 14,
                        fontWeight: 400,
                      }}
                    >
                      <MenuItem value={0}>To</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Box>
            ) : (
              <div></div>
            )}
            {currentActiveTabIndex === index && index === 4 ? (
              <ListingStatus />
            ) : (
              <div></div>
            )}
          </SearchFilterItem>
        </div>
      ))}

      <Button
        variant="outlined"
        sx={{
          "&:hover": {
            backgroundColor: "rgb(241, 241, 241)",
          },
        }}
      >
        Save Search
      </Button>
    </div>
  );
}
