import React, { ReactNode } from "react";
import FullControlledHeader from "../components/common/FullControlledHeader";

function HeaderLayout(props: { children: ReactNode }) {
  return (
    <div>
      <FullControlledHeader />
      <div>{props.children}</div>
    </div>
  );
}

export default HeaderLayout;
