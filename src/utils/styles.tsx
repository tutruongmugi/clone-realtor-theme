import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  carouselItemClass: {
    width: "250px !important",
    margin: "10px 20px 10px 0",
  },
  backgroundImg: {
    position: "relative",
    maxWidth: 200,
    minWidth: 200,
    maxHeight: 90,
    minHeight: 90,
  },
  carouselItemClassPopulars: {
    width: "200px !important",
    margin: "2px 10px 2px 0",
  },
  googleButton: {
    "& .MuiButton-startIcon": {
      marginLeft: -46,
      marginRight: 36
    },
    border: "1px solid rgb(148, 148, 148) ",
    color: "black",
    "&:hover": {
      backgroundColor: theme.palette.divider,
      borderColor: theme.palette.divider,
    },
  },
  facebookButton: {
    "& .MuiButton-startIcon": {
      marginLeft: -30,
      marginRight: 36, 
    },
    border: "1px solid rgb(148, 148, 148) ",
    color: "rgb(255, 255, 255)",
    backgroundColor: "#1877F2",
    "&:hover": {
      backgroundColor: "rgb(21, 103, 208)",
      borderColor: "rgb(21, 103, 208)",
    },
  },
  appleButton: { 
    "& .MuiButton-startIcon": {
      marginLeft: -50,
      marginRight: 36
    },
    border: "1px solid rgb(148, 148, 148) ",
    color: "rgb(255, 255, 255)",
    backgroundColor: "#000",
    "&:hover": {
      backgroundColor: "rgb(117, 117, 117)",
      borderColor: "rgb(117, 117, 117)",
    },
  },
  emailButton: { 
    "& .MuiButton-startIcon": {
      marginLeft: -60,
      marginRight: 50
    },
     
  },
}));

export default useStyles;
