import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ExploreRecipe() {
  const [food, setFood] = useState([]);
  const [slice, setSlice] = useState(4);

  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);

  return (
    <div className="container px-5 m-auto mt-10">
      <div className="flex justify-between">
        <h1 className="text-4xl my-10 font-semibold">
          Explore <span className="text-primary">Yummy Recipe</span>
        </h1>

        <button onClick={() => setSlice(food.length)}>See all</button>
      </div>

      <div className="grid lg:grid-cols-4 gap-10">
        {food.slice(0, slice).map((item) => (
          <div key={item.id}>
            {/* Link to the details page for each food item */}
            <Link to={`/fooddetails/${item.id}`}>
              <img className="w-full h-[300px] rounded-2xl" src={item.img} alt={item.name} />
              <h1 className="text-3xl font-semibold my-2">{item.name}</h1>
              <h1 className="text-gray-400">{item.description}</h1>
              <h1 className="text-2xl font-semibold">{"$" + item.price}</h1>
            </Link>

            <button className="bg-secondary text-white w-full lg:w-1/2  rounded-3xl px-10 mt-5 py-1.5  hover:bg-slate-600">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

