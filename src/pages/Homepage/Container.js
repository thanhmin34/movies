import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import SideSearch from "../../components/SideSearch";
import Homepage from "./Homepage";

const Container = () => {
  return (
    <div className="w-full max-w-screen-xl flex flex-row align-center ">
      <Sidebar />
      <Homepage />

      <SideSearch></SideSearch>
    </div>
  );
};

export default Container;
