import { ArrowUpward } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function ButtonScrollToTop() {
  const [isTop, setIsTop] = useState(true);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const setIsScrollOnTop = () => {
      if (window?.scrollY > 0) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };
    window.addEventListener("scroll", setIsScrollOnTop);
    return () => {
      window.removeEventListener("scroll", setIsScrollOnTop);
    };
  }, []);

  return (
    <>
      {isTop ? null : (
        <IconButton
          style={{
            background: "black",
            position: "fixed",
            bottom: 32,
            right: 32,
          }}
          onClick={scrollToTop}
        >
          <ArrowUpward style={{ color: "white" }} />
        </IconButton>
      )}
    </>
  );
}
