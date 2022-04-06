import React from "react";
import Appbar from "../appbar";
import Footer from "../footer";

export default function AppbarFooter({ children }) {
  return (
    <>
      <Appbar />
      {children}
      <Footer />
    </>
  );
}
