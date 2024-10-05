import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


export default function Auth() {
  return (

    <div className=" grid lg:grid-cols-2 lg:gap-5 md:w-[50%] m-auto border-2 rounded-2xl md:mt-16 ">
    
      <Sidebar></Sidebar>


      <div className=" ">

        <Outlet></Outlet>

      </div>


    </div>
  );
}
