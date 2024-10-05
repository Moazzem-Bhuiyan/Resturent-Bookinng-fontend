import React from "react";
import service from "../../assets/service.png";
import img1 from "../../assets/im1.png";
import img2 from "../../assets/im2.png";
import img3 from "../../assets/im3.png";
import img4 from "../../assets/im4.png";
import img5 from "../../assets/im5.png";

export default function Service() {
  return (
    <div className="container px-5 m-auto mt-[150px] md:mb-[150px] grid lg:grid-cols-2 gap-5  ">
      <div className="img ">
        <img className="mt-5" src={service} alt="" />
      </div>

      <div className="txt ">
        <h1 className="text-5xl font-bold w-full mt-10 space-x-2 space-y-3 ">
          We are <span className="text-primary">more</span> than{" "}
          <span className="text-secondary">multiple</span> <br /> service
        </h1>
        <p className="mt-10">
          This is a type of resturent which typically serves food and drink, in
          addition to light refreshments such as baked goods or snacks. The term
          comes frome the rench word meaning food
        </p>

        <div className="mt-10 grid lg:grid-cols-2 gap-5 justify-center ">
          <ul className=" space-y-5 font-semibold">
            <li className="flex gap-4  text-[18px]">
              <img className="w-[26px] h-[26px]" src={img1} alt="" /> Online
              ordering
            </li>
            <li className="flex gap-4 text-[18px]">
              <img className="w-[26px] h-[26px]" src={img2} alt="" /> Online
              ordering
            </li>
            <li className="flex gap-4 text-[18px]">
              <img className="w-[26px] h-[26px]" src={img3} alt="" /> Online
              ordering
            </li>
          </ul>

          <ul className=" space-y-5 font-semibold">
            <li className="flex gap-4 text-[18px]">
              <img className="w-[26px] h-[26px]" src={img4} alt="" /> Online
              ordering
            </li>
            <li className="flex gap-4 text-[18px]">
              <img className="w-[26px] h-[26px]" src={img5} alt="" /> Online
              ordering
            </li>
            <li className="flex gap-4 text-[18px]">
              <img className="w-[26px] h-[26px]" src={img1} alt="" /> Online
              ordering
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
