import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function ImageFooter() {
  return (
    <Container maxWidth="md">
      <Image
        alt="books"
        src={"/images/book-realtor.jpg"}
        layout="responsive"
        width={800}
        height={200}
      />
    </Container>
  );
}
