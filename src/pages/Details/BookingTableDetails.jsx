
import { useLoaderData, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const BookingTableDetails = () => {
  const loadedBooking = useLoaderData();
  const { id } = useParams();
  const idntt = parseInt(id);
  const data = loadedBooking.find((data) => data.id === idntt);

  return (
    <div className=" container m-auto md:p-10 md:mb-10">
      <div className="md:w-[60%] rounded-2xl space-y-5 m-auto p-10 shadow-2xl mt-10 mb-10">
        <img className="w-full" src={data.image} alt="" />

        <h1 className="text-2xl font-semibold">{data.title}</h1>
        <h1>{data.location}</h1>

        <h1 className="text-lg font-semibold">Book a table</h1>

        <div>
          <input
            className="border-2  border-black bg-white rounded-lg p-2 mr-5"
            type="date"
            name=""
            id=""
          />{" "}
          <span>
            <input
              className="border-2  border-black bg-white mt-2 rounded-lg p-2 mr-5"
              type="time"
              name=""
              id=""
            />
          </span>{" "}
          <span>
            {" "}
            <select
              className="border-2  border-black bg-white rounded-lg p-2 mr-5"
              name=""
              id=""
            >
              <option value="1">1</option> <option value="2">2</option>{" "}
              <option value="3">3</option> <option value="4">4</option>
            </select>
          </span>
        </div>

        <h1>{data.description}</h1>

        <button className="bg-secondary w-full text-lg py-2 text-white rounded-xl hover:bg-slate-600">
          Book Now
        </button>
      </div>

      {/* --------------------- */}

      <div className="w-[80%] m-auto " >
        <h1 className="text-3xl font-bold">Review</h1>
        &nbsp;
        <span className="text-2xl font-bold flex gap-3">
          4.5 <span className="mt-1"><FaStar /></span>
          <span className="text-sm font-normal mt-2">5,5067 Reviews</span>
        </span>
        <h1 className="text-2xl my-8 font-semibold">User Feedback</h1>
        {/* ========== */}
        <div className=" w-[100%] m-auto rounded-xl shadow-2xl">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://i.ibb.co.com/Pgt9bQh/Whats-App-Image-2024-08-14-at-20-33-20-52d82546.jpg"
              className=" rounded-full w-[105px] h-[100px] "
            />
            <div>
              <h1 className="text-xl font-bold">Moazzem Bhuiyan</h1> <hr />
              <div className="rating pt-2">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask  mask-star bg-orange-300"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange-300 "
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star  bg-orange-300"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star  bg-orange-300"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star  bg-orange-300"
                />
              </div>
              <p className="py-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
                sapiente nulla enim deserunt quibusdam nemo.
              </p>
            </div>
          </div>
        </div>
        
        &nbsp;
        &nbsp;
        {/*  */}
        <div className=" w-[100%] m-auto rounded-xl shadow-2xl">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://i.ibb.co.com/Pgt9bQh/Whats-App-Image-2024-08-14-at-20-33-20-52d82546.jpg"
              className=" rounded-full w-[105px] h-[100px] "
            />
            <div>
              <h1 className="text-xl font-bold">Moazzem Bhuiyan</h1> <hr />
              <div className="rating pt-2">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask  mask-star  bg-orange-300"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star  bg-orange-300"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star  bg-orange-300"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star  bg-orange-300"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star  bg-orange-300"
                />
              </div>
              <p className="py-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
                sapiente nulla enim deserunt quibusdam nemo.
              </p>
            </div>
          </div>
        </div>
        &nbsp;
        &nbsp;
        {/*  */}
        <div className=" w-[100%] m-auto rounded-xl shadow-2xl">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://i.ibb.co.com/Pgt9bQh/Whats-App-Image-2024-08-14-at-20-33-20-52d82546.jpg"
              className=" rounded-full w-[105px] h-[100px] "
            />
            <div>
              <h1 className="text-xl font-bold">Moazzem Bhuiyan</h1> <hr />
              <div className="rating pt-2">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask  mask-star  bg-orange-300"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star  bg-orange-300"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star  bg-orange-300"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star  bg-orange-300"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star  bg-orange-300"
                />
              </div>
              <p className="py-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
                sapiente nulla enim deserunt quibusdam nemo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingTableDetails;
