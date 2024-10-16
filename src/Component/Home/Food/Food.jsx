import { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';


const 
Food = () => {
    const [food, setFood] = useState([]);

    useEffect(() => {
        fetch("food.json")
          .then((res) => res.json())
          .then((data) => setFood(data));
      }, []);


    return (
        <div>

<div className="container px-5 m-auto mt-10 mb-20">

    <div className='w-full bg-primary  px-4 flex justify-center my-5'>
    <div className="py-1">
  <ul>
  <button className='hover:bg-white rounded-xl px-5 py-2'>All</button>
  <button className='hover:bg-white rounded-xl px-5 py-2'>Kabab</button>
  <button className='hover:bg-white rounded-xl px-5 py-2'>Sushi</button>
  <button className='hover:bg-white rounded-xl px-5 py-2'>Pizza</button>
  <button className='hover:bg-white rounded-xl px-5 py-2'>Rice</button>
  <button className='hover:bg-white rounded-xl px-5 py-2'>Fry</button>
  <button className='hover:bg-white rounded-xl px-5 py-2'>Chiken</button>
  </ul>
</div>



    </div>

    <div className='flex justify-center my-10 border w-80 m-auto px-2 rounded-xl '><input className=' bg-white outline-none px- py-2 rounded-xl w-full' type="search" placeholder='Search your food' name="" id="" /> <button className='mr-2 text-2xl rounded-full'><CiSearch /></button></div>
      

    <h1 className="text-3xl text-center my-2 font-semibold">
          Explore <span className="text-primary">Yummy Recipe</span>
        </h1> <hr />

      <div className="grid lg:grid-cols-4 gap-10 mt-10">
        {food.map((item) => (
          <div className="bg-slate-100 rounded-xl " key={item.id}>
            {/* Link to the details page for each food item */}
            <Link className=" space-y-8" to={`/fooddetails/${item.id}`}>
              <img className="w-full" src={item.img} alt={item.name} />
             <div className="p-5 space-y-5">
             <h1 className="text-3xl font-semibold my-2">{item.name}</h1>
              <h1 className="text-gray-400">{item.description}</h1>
              <h1 className="text-2xl font-semibold">{"$" + item.price}</h1>
             </div>
            </Link>

            <div className="p-5"> <button className="bg-secondary text-white w-full lg:w-full  rounded-xl px-10 mt-5 py-1.5  hover:bg-green-700">
              Order Now
            </button></div>
          </div>
        ))}
      </div>
    </div>
            
        </div>
    );

};

export default Food;