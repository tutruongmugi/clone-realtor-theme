import React, { ReactNode } from "react";
import FullControlledFooter from "../components/common/FullControlledFooter";
import FullControlledHeader from "../components/common/FullControlledHeader";

function Layout(props: { children: ReactNode }) {
  return (
    <div>
      <FullControlledHeader />
      <div>{props.children}</div>
      <FullControlledFooter />
    </div>
  );
}

export default Layout;
