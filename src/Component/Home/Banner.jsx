import React from "react";
import banner from "../../assets/banner.png";

export default function Banner() {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 container px-5 m-auto">
      <div className="text md:mt-40 mt-10 ml-28">
        <h1 className="text-6xl font-semibold mb-10 ">
          Good <span className="text-primary">Booking </span> Great <br />{" "}
          memories{" "}
        </h1>
        <h4 className="my-10 text-xl text-gray-400">
          Enable dine to cpustomixe their <br /> booking by requesting a
          specific table <br /> location or view{" "}
        </h4>

        {/* <input
          className="border-2 bg-white rounded-3xl w-1/2 p-1 mb-5"
          type="search"
          name="search"
          id=""
          placeholder="Search Food 🔍 "
        /> */}
      </div>

      <div className="img">
        <img
          className="md:w-[80%] m-auto md:h-auto flex justify-center -mt-10"
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
}
