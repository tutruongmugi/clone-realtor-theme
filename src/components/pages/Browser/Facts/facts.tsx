import { Box, Grid, Hidden, Link, Typography } from "@mui/material";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import NavigateNextTwoToneIcon from "@mui/icons-material/NavigateNextTwoTone";
import { useState } from "react";

export default function Facts() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div style={{marginTop:30}}>
      <Typography variant="h6" style={{ fontWeight: "bold",marginBottom:10 }}>
        Facts about San Juan, PR
      </Typography>
      <Box style={{ padding: "20px 24px", border: "1px solid #dcdcdc" }}>
        <Link
          href="#"
          underline="hover"
          style={{ color: "rgb(51, 119, 204)", fontWeight: "bold" }}
        >
          San Juan Housing Market
        </Link>
        <Grid container>
          <Grid
            item
            xs={12}
            md={5}
            style={{ display: "flex", marginBottom: 15 }}
          >
            <Typography style={{ overflowWrap: "break-word", marginRight: 10 }}>
              Median listing home price
            </Typography>
            <ArrowUpwardIcon
              style={{ color: "rgb(61, 133, 10)", marginRight: 10 }}
            />
            <Typography style={{ fontWeight: "bold" }}>$147.5</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            style={{ display: "flex", marginBottom: 15 }}
          >
            <Typography style={{ overflowWrap: "break-word", marginRight: 10 }}>
              Median listing home price per sq.ft
            </Typography>
            <ArrowUpwardIcon
              style={{ color: "rgb(61, 133, 10)", marginRight: 10 }}
            />
            <Typography style={{ fontWeight: "bold" }}>$147</Typography>
          </Grid>
          <Hidden mdDown={isShown ? false : true}>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", marginBottom: 15 }}
            >
              <Typography
                style={{ overflowWrap: "break-word", marginRight: 10 }}
              >
                Active listings
              </Typography>
              <ArrowUpwardIcon
                style={{ color: "rgb(61, 133, 10)", marginRight: 10 }}
              />
              <Typography style={{ fontWeight: "bold" }}>$485</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              style={{ display: "flex", marginBottom: 15 }}
            >
              <Typography
                style={{ overflowWrap: "break-word", marginRight: 10 }}
              >
                Median rent
              </Typography>
              <ArrowUpwardIcon
                style={{ color: "rgb(61, 133, 10)", marginRight: 10 }}
              />
              <Typography style={{ fontWeight: "bold" }}>$2.85k</Typography>
            </Grid>
          </Hidden>
        </Grid>
        <Hidden mdUp>
          <div
            style={{
              color: "rgb(51, 119, 204)",
              display: "flex",
              cursor: "pointer",
              width: 120,
            }}
            onClick={()=>{
              setIsShown(!isShown)
            }}
          >
            <Typography
              style={{ fontWeight: "bold" }}
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {isShown? "SHOW LESS" : "SHOW MORE"}
              
            </Typography>
            <NavigateNextTwoToneIcon />
          </div>
        </Hidden>
      </Box>
    </div>
  );
}
