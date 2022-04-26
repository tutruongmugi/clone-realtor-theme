import React, { ReactNode } from "react";
import FullControlledFooter from "../components/common/FullControlledFooter";
import FullControlledHeader from "../components/common/FullControlledHeader";
import ButtonScrollToTop from "../components/common/ButtonScrollToTop";

function Layout(props: { children: ReactNode }) {
  return (
    <div>
      <FullControlledHeader widthContainer={"lg"} />
      <div>{props.children}</div>
      <ButtonScrollToTop />
      <FullControlledFooter />
    </div>
  );
}

export default Layout;
