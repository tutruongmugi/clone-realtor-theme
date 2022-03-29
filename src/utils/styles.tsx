import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  brand: {
    color: "#000",
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  buttonHeader: {
    marginRight: 20,
    border: "1px solid",
    "&:hover": { boderBottom: "3px solid transparent" },
  },
  grow: {
    color: "#333",
    fontSize: "14px",
  },
  menuItem: {
    color: "#333",
    fontSize: "14px",
    marginRight: "16px",
    "&:hover": { boderBottom: "3px solid transparent" },
  },
});

export default useStyles;
