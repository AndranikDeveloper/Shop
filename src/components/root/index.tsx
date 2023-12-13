import React from "react";
import { Header } from "../header";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};
