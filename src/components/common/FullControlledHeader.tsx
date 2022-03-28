import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";

export default function FullControlledHeader() {
  return (
    <AppBar position="sticky" style={{ top: 0 }}>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center">
          <Avatar
            src="https://avatars.githubusercontent.com/u/25724101?s=40&v=4"
            alt="hello"
          />

          <Typography
            variant="h6"
            component="h1"
            style={{ fontWeight: 600, marginLeft: 16 }}
          >
            User Factory Page
          </Typography>
        </Box>

        <Hidden smDown>
          <Box display="flex" alignItems="center">
            <Box display="flex" alignItems="center">
              <Link href="/home" passHref>
                <a style={{ color: "white", marginRight: 16 }}>Home</a>
              </Link>
              <Link href="/about-us" passHref>
                <a style={{ color: "white", marginRight: 16 }}>About us</a>
              </Link>
            </Box>

            <Box display="flex" alignItems="center">
              <Link href="/login" passHref>
                <a style={{ color: "white", marginRight: 16 }}>Login</a>
              </Link>
              <Link href="/sign-up" passHref>
                <a style={{ color: "white" }}>Sign up</a>
              </Link>
            </Box>
          </Box>
        </Hidden>

        <Hidden smUp>
          <IconButton>
            <Menu style={{ color: "white" }} />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
