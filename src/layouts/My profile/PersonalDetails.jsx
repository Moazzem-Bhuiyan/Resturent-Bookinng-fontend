import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function Personaldetails() {

  const {user}=useContext(AuthContext);
  
  return (
    <div className="container p-2 m-auto mt-20">
      <h1 className="text-4xl font-semibold">Profile Picture</h1>

      <div className=" lg:flex md:gap-48 ">
        <div>
          {/* <i>
            <img
              src="placeholder-image-url"
              alt="Profile Picture"
              className="w-32 h-32 rounded-full"
            />
          </i> */}

          {
            user? <><img className="w-32 h-32 rounded-full" src={user.photoURL} alt="" /></>:<></>
          }
        </div>

        <div className="text-center space-y-5">
          <h1 className="text-xl">Maximum size 5MB. Format: jpg, png, jpeg</h1>
          <button className="bg-secondary text-white text-xl p-2 px-20 rounded-3xl">
            Change Picture
          </button>
        </div>
      </div>

      <form>
        <div className="grid grid-cols-3 gap-10">
          <div>
            {" "}
            <label htmlFor="fullname">Full Name:</label>
            <br />
            <input
            defaultValue={user?.displayName}
              type="text"
              name="fullname"
              placeholder="Enter Your Full Name"
              id="fullname"
              className="border  border-green-500 p-2 bg-white w-full rounded"
            />
          </div>
          <div>
            <label htmlFor="sex">Sex:</label>
            <br />
            <select id="sex" name="sex" className="border border-green-500 bg-white w-full p-2 rounded">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="dateofbirth">Date Of Birth:</label>
            <br />
            <input
              type="date"
              name="dateofbirth"
              id="dateofbirth"
              className="border border-green-500 w-1/2 p-2 bg-white rounded"
            />{" "}
            <br />
          </div>
        </div>

        <div className="my-10 w-1/4">
          <label htmlFor="contact">Contact Number:</label>
          <br />
          <input
            type="tel"
            name="contact"
            id="contact"
            className="border p-2 border-green-500 bg-white w-full rounded"
          />
          <br />
        </div>

        <div className="md:w-1/2 w-full grid md:grid-cols-3 my-10 ">
          <div>
            {" "}
            <label htmlFor="oldpassword">Old Password:</label>
            <br />
            <input
              type="password"
              name="oldpassword"
              id="oldpassword"
              className="border border-green-500 p-2 bg-white rounded"
            />
          </div>

          <div>
            <label htmlFor="newpassword">New Password:</label>
            <br />
            <input
              type="password"
              name="newpassword"
              id="newpassword"
              className="border border-green-500 p-2 bg-white rounded"
            />
          </div>

          <div>
            {" "}
            <label htmlFor="confirmpassword">Confirm Password:</label>
            <br />
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              className="border border-green-500 p-2 bg-white rounded"
            />
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <input
            className="w-1/2 bg-primary text-white text-xl rounded-lg p-2 cursor-pointer"
            type="submit"
            value="Save Changes"
          />
          <input
            className="w-1/2 text-red-500 border-2 border-red-500 text-xl rounded-lg p-2 cursor-pointer"
            type="button"
            value="Delete Account"
          />
        </div>
      </form>
    </div>
  );
}
