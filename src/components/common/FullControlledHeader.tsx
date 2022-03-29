import {
  AppBar,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  Link,
  Button,
  MenuItem,
  Menu,
  Paper,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/system";
import NextLink from "next/link";
import { useState } from "react";
import useStyles from "../../utils/styles";
import { menuItems } from "../../utils/data";

export default function FullControlledHeader() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const onClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const onMenuCloseHandler = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="sticky" style={{ top: 0 }}>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <NextLink href="/" passHref>
          <Link>
            <Typography className={classes.brand}>Realtor.com</Typography>
          </Link>
        </NextLink>

        <Hidden smDown>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {menuItems.map((item) => (
              <div key={item.title}>
                <Typography
                  className={classes.menuItem} 
                  onMouseOver={onClickHandler} 
                >
                  {item.title}
                </Typography>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={onMenuCloseHandler}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={onMenuCloseHandler}>
                    Homes for sale
                  </MenuItem>
                  <MenuItem onClick={onMenuCloseHandler}>
                    New Home Construction
                  </MenuItem>
                </Menu>
              </div>
            ))}
          </div>

          <div>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonHeader}
            >
              <Typography className={classes.grow}>Manage rentals</Typography>
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonHeader}
            >
              <Typography className={classes.grow}>Advertise</Typography>
            </Button>
          </div>
          <div>
            <NextLink href="/login" passHref>
              <Link className={classes.grow}>Log in</Link>
            </NextLink>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginLeft: 20, borderRadius: 36 }}
            >
              <Typography>Sign up</Typography>
            </Button>
          </div>
        </Hidden>

        <Hidden smUp>
          <IconButton>
            <AccountCircleIcon></AccountCircleIcon>
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
