import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" main bg-black px-10 ">

      <div className="first grid lg:grid-cols-2 md:w-[90%]  m-auto py-10">

        <div className="imgtxt space-y-5 ">
          <img className="md:w-[346px] md:h-[84px]" src={logo} alt="" />

          <h1 className="text-white text-sm space-x-4">
            The Food we had enjoyed at the time of dinner. It was really
            delicious taste <br /> with great quality, everything had unique
            taste which we had ordered, nice <br /> arrangement and services
            from the staff while eating, we found nothing bad <br /> about this
            hotel.
          </h1>
        </div>

        <div className="flex gap-10 justify-center text-white p-2 100 lg:justify-end">

          <div>
            <h1 className="font-bold text-xl">Follow us</h1>
           <ul className="flex gap-3 mt-5 text-2xl">
           <span><i><FaSquareInstagram /></i></span>
            <span><i><FaFacebook /></i></span>
            <span><i className=""><FaTwitterSquare /></i></span>
           </ul>
          </div>

          <div>
            <h1 className="font-bold text-xl">Call Us</h1>
            <h1 className="mt-5">+48 661120 49</h1>
          </div>


        </div>

      </div>

      <hr />

      <div className="grid lg:grid-cols-2  w-[90%] m-auto py-5 mb-10 ">

        <div className="items-start">
          <h1 className="text-white">Design & Developed by Moazzem Hossen Bhuiyan</h1>
        </div>

        <div className=" flex justify-center lg:justify-end text-white items-end">

          <ul className="flex gap-10 text-lg ">
            <NavLink to= '/about'><li>About Us</li></NavLink>
            <NavLink to='/privecy'><li>Privecy Policy</li></NavLink>
            <NavLink to='terms'><li>Terms of use </li></NavLink>
          </ul>



        </div>

      </div>


    </div>
  );
}
