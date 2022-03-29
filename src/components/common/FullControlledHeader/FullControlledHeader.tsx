/* eslint-disable @next/next/no-img-element */
import {
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  Link,
  Button,
  useTheme,
  Container,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NextLink from "next/link";
import { ReactNode, useState } from "react";
import { makeStyles } from "@mui/styles";
import { menuItems } from "./__data__";
import { Box, BoxProps } from "@mui/system";

const useStyle = makeStyles({
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

function AppbarMenuItem({
  text,
  isActive,
  style,
  ...props
}: {
  text: ReactNode | string;
  isActive: boolean;
} & BoxProps) {
  const theme = useTheme();

  return (
    <Link href="#">
      <Box
        style={{
          padding: "14px 6px",
          borderBottom: `4px solid ${
            isActive ? theme.palette.primary.main : "transparent"
          }`,
          height: 64,
          display: "flex",
          alignItems: "center",
          ...style,
        }}
        {...props}
      >
        {typeof text === "string" ? <Typography>{text}</Typography> : text}
      </Box>
    </Link>
  );
}

export default function FullControlledHeader() {
  const theme = useTheme();

  const [currentActiveTabIndex, setcurrentActiveTabIndex] = useState(0);
  const [currentMouseEnterTabIndex, setcurrentMouseEnterTabIndex] = useState<
    number | null | "login" | "signup"
  >(null);

  return (
    <Container maxWidth="xl">
      <Toolbar
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "white",
          padding: "0 12px",
          borderBottom: `1px solid ${theme.palette.text.secondary}`,
        }}
      >
        <NextLink href="/" passHref>
          <Link>
            <img
              src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
              alt="logo"
              style={{ display: "inline-block", height: 24 }}
            />
          </Link>
        </NextLink>

        <Hidden mdDown>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {menuItems.map((menuItem, index) => (
              <div key={menuItem.title}>
                <AppbarMenuItem
                  text={menuItem.title}
                  isActive={
                    currentActiveTabIndex === index ||
                    currentMouseEnterTabIndex === index
                  }
                  onClick={() => {
                    setcurrentActiveTabIndex(index);
                  }}
                  onMouseEnter={() => {
                    setcurrentMouseEnterTabIndex(index);
                  }}
                  onMouseLeave={() => {
                    setcurrentMouseEnterTabIndex(null);
                  }}
                />
              </div>
            ))}
          </div>
        </Hidden>

        <Hidden lgDown>
          <Box display="flex" alignItems="center" height="48px">
            <Button
              style={{ margin: "0 4px", borderRadius: 6 }}
              variant="outlined"
              color="inherit"
            >
              Manage rentals
            </Button>
            <Button
              style={{ margin: "0 4px", borderRadius: 6 }}
              variant="outlined"
              color="inherit"
            >
              Advertise
            </Button>
          </Box>
        </Hidden>

        <Box display="flex" alignItems="center">
          <AppbarMenuItem
            text="Login"
            isActive={currentMouseEnterTabIndex === "login"}
            onMouseEnter={() => {
              setcurrentMouseEnterTabIndex("login");
            }}
            onMouseLeave={() => {
              setcurrentMouseEnterTabIndex(null);
            }}
          />
          <AppbarMenuItem
            text={
              <Button variant="contained" color="primary">
                Sign up
              </Button>
            }
            isActive={currentMouseEnterTabIndex === "signup"}
            onMouseEnter={() => {
              setcurrentMouseEnterTabIndex("signup");
            }}
            onMouseLeave={() => {
              setcurrentMouseEnterTabIndex(null);
            }}
          />
        </Box>
      </Toolbar>

      {currentMouseEnterTabIndex !== null && (
        <Box
          position="fixed"
          style={{
            background: "red",
            height: 200,
            width: "100%",
            top: 65,
            left: 0,
            right: 0,
          }}
        ></Box>
      )}
    </Container>
  );
}
