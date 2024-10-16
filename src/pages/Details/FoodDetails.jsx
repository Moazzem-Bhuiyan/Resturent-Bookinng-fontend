import { useLoaderData, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function FoodDetails() {
  const loadedFood = useLoaderData();
  const { id } = useParams();
  const indt = parseInt(id);

  const data = loadedFood.find((data) => data.id === indt);
  
  // State to keep track of quantity
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1); // Increment quantity
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0)); // Decrement quantity
  };

  // Uncomment if you want to handle a case when data is not found
  // if (!data) {
  //   return <p>Food item not found.</p>;
  // }

  return (
    <div className="container m-auto mb-10 mt-10">
      <div className="grid lg:grid-cols-2 gap-10 shadow-2xl md:w-[80%] py-5 m-auto rounded-2xl px-2 ">
        <div className="img">
          <img className="w-full h-90" src={data.img} alt={data.name} />
        </div>

        <div className="des space-y-6">
          <h1 className="text-5xl font-semibold">{data.name}</h1>
          <h1 className="text-4xl font-semibold">{"$" + data.price}</h1>
          <h1 className="">{data.description}</h1>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex gap-2">
              <button 
                className="bg-orange-400 px-6 text-3xl rounded-s-md" 
                onClick={handleDecrease} // Decrease quantity
              >
                -
              </button>
              <h1 className="p-2">{quantity}</h1> {/* Display current quantity */}
              <button 
                className="bg-orange-400 px-6 text-3xl rounded-e-md" 
                onClick={handleIncrease} // Increase quantity
              >
                +
              </button>
            </div>

            <div className="add">
              <button className="bg-secondary w-full rounded-md text-xl py-2 text-white hover:bg-slate-600">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
