import React, { useContext } from "react";
import { FiUser, FiHeart, FiLogOut } from "react-icons/fi";
import { IoBookSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function MyProfileHome() {
  const {logOut}=useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout =()=>{

    logOut()
    .then(()=>{
     navigate('/')
      console.log('log out successful')
      alert('success')

    


    })

    .error((error)=>{
      console.error(error)
    })


   
  }
  return (
    <div className="grid grid-cols-12 w-[60%] m-auto mt-5 ">
      <div className="blank col-span-8 bg-gradient-to-l from-cyan-50 to-blue-50">
        {" "}
      </div>

      <div className="col-span-4 bg-[#758989] h-[calc(100vh-35px)]">
        <ul className="space-y-5 font-semibold mt-48 pl-5 text-white">
          <li>
            <Link to="/profile/personal">
              <div className="flex gap-4 text-2xl cursor-pointer">
                <FiUser className="mt-1.5" />
                Personal details
              </div>
            </Link>
          </li>
          <li>
            <Link to="">
              <div className="flex gap-4 text-2xl cursor-pointer">
                <IoBookSharp className="mt-1.5" />
                Booking History
              </div>
            </Link>
          </li>
          <li>
            <Link to="/profile/fvrt">
              <div className="flex gap-4 text-2xl cursor-pointer">
                <FiHeart className="mt-1.5" />
                Favorite
              </div>
            </Link>
          </li>
          <li>

            <Link onClick={handleLogout} >
              <div className="flex gap-4 text-2xl cursor-pointer">
                <FiLogOut className="mt-1.5" />
                Logout
              </div>
            </Link>
          </li>
        </ul>
      </div>
      


    </div>
  );
}




