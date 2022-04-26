import {
  List,
  ListItem,
  Link,
  Typography,
  Grid,
  Button,
  IconButton,
} from "@mui/material";
import React from "react";
import NextLink from "next/link";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import BungalowIcon from "@mui/icons-material/Bungalow";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GradingIcon from "@mui/icons-material/Grading";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import HandymanIcon from "@mui/icons-material/Handyman";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const images = [
  "/images/ex-home-detail-1.jpg",
  "/images/ex-home-detail-2.jpg",
  "/images/ex-home-detail-3.jpg",
  "/images/ex-home-detail-4.jpg",
];
const properties = {
  duration: 5000,
  autoplay: false,
  transitionDuration: 500, 
  infinite: true,
  indicators: false,
  // nextArrow: (
  //   <IconButton sx={{ color:'red',marginRight: "-60px",
  //   width: 50,
  //   height: 50,
  //   position: "absolute",
  //   top: "75%",
  //   left: 25,}} >
  //     <ArrowForwardIosIcon />
  //   </IconButton>
  // ),
  // prevArrow: (
  //   <IconButton>
  //     <ArrowForwardIosIcon />
  //   </IconButton>
  // ),
};

export default function HomeDetailInformation() {
  return (
    <div>
      <Slide {...properties}>
        {images.map((item, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                height: 450,
                width: "100%",
                position: "relative",
                backgroundImage: `url(${item})`,
              }}
            ></div>
          </div>
        ))}
      </Slide>
      <Grid container>
        <Grid item md={8}>
          <List>
            <ListItem>
              <NextLink href="#" passHref>
                <Link>
                  <Typography style={{ color: "#3377cc" }}>
                    How much home can you afford?
                  </Typography>
                </Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: 15,
                    height: 15,
                    backgroundColor: "#36b396",
                    borderRadius: 4,
                    marginRight: 8,
                  }}
                ></div>
                <Typography>For Sale</Typography>
              </div>
            </ListItem>
            <ListItem style={{ display: "flex", alignItems: "center" }}>
              <Typography style={{ fontSize: 28, fontWeight: "bold" }}>
                $183000
              </Typography>
              <Typography
                style={{ fontSize: 16, fontWeight: "bold", marginLeft: 24 }}
              >
                Est
              </Typography>
              <NextLink href="#" passHref>
                <Link
                  style={{
                    display: "flex",
                    color: "#3377cc",
                  }}
                >
                  <Typography style={{ fontSize: 16, marginLeft: 8 }}>
                    $1,064/mo
                  </Typography>
                  <ModeEditOutlineOutlinedIcon />
                </Link>
              </NextLink>
            </ListItem>
            <ListItem style={{ display: "flex" }}>
              <div style={{ display: "flex", marginRight: 16 }}>
                <Typography style={{ fontWeight: "bold", marginRight: 4 }}>
                  7
                </Typography>
                <Typography>bed</Typography>
              </div>
              <div style={{ display: "flex", marginRight: 16 }}>
                <Typography style={{ fontWeight: "bold", marginRight: 4 }}>
                  4
                </Typography>
                <Typography>bath</Typography>
              </div>
              <div style={{ display: "flex", marginRight: 16 }}>
                <Typography style={{ fontWeight: "bold", marginRight: 4 }}>
                  3.638
                </Typography>
                <Typography>sqft</Typography>
              </div>
              <div style={{ display: "flex", marginRight: 16 }}>
                <Typography style={{ fontWeight: "bold", marginRight: 4 }}>
                  3.485
                </Typography>
                <Typography>sqft lot</Typography>
              </div>
            </ListItem>
            <ListItem>
              <Typography>Cupido, San Juan, PR 00926</Typography>
            </ListItem>
            <ListItem>
              <Grid container>
                <Grid
                  item
                  md={4}
                  sm={6}
                  xs={4}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 16,
                  }}
                >
                  <BungalowIcon style={{ marginRight: 8 }} />
                  <div>
                    <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
                      Single Family
                    </Typography>
                    <Typography style={{ color: "gray", fontSize: 12 }}>
                      Property Type
                    </Typography>
                  </div>
                </Grid>
                <Grid
                  item
                  md={4}
                  sm={6}
                  xs={4}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 16,
                  }}
                >
                  <CalendarTodayIcon style={{ marginRight: 8 }} />
                  <div>
                    <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
                      11 Days
                    </Typography>
                    <Typography style={{ color: "gray", fontSize: 12 }}>
                      Time on realtor.com
                    </Typography>
                  </div>
                </Grid>
                <Grid
                  item
                  md={4}
                  sm={6}
                  xs={4}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 16,
                  }}
                >
                  <GradingIcon style={{ marginRight: 8 }} />
                  <div>
                    <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
                      $50
                    </Typography>
                    <Typography style={{ color: "gray", fontSize: 12 }}>
                      Price per sqft
                    </Typography>
                  </div>
                </Grid>
                <Grid
                  item
                  md={4}
                  sm={6}
                  xs={4}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 16,
                  }}
                >
                  <SquareFootIcon style={{ marginRight: 8 }} />
                  <div>
                    <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
                      2 cars
                    </Typography>
                    <Typography style={{ color: "gray", fontSize: 12 }}>
                      Garage
                    </Typography>
                  </div>
                </Grid>
                <Grid
                  item
                  md={4}
                  sm={6}
                  xs={4}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 16,
                  }}
                >
                  <HandymanIcon style={{ marginRight: 8 }} />
                  <div>
                    <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
                      1975
                    </Typography>
                    <Typography style={{ color: "gray", fontSize: 12 }}>
                      Year Built
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem style={{ display: "flex" }}>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: 20, height: 35, marginRight: 8 }}
              >
                Ask a question
              </Button>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginTop: 20, height: 35 }}
              >
                Share this home
              </Button>
            </ListItem>
          </List>
        </Grid>
        <Grid md={4}>
          <Typography>Map</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
