import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "antd";

function Layout(props: LayoutProps) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
