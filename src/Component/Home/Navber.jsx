import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FiUser, FiHeart, FiLogOut } from "react-icons/fi";
import { IoBookSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

export default function Navber() {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
       
        console.log("log out successful");
        alert("Are You Sure ");
        navigate("/");
      })

      .error((error) => {
        console.error(error);
      });
  };

  const link = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/bookingable">
        <li>Book a Table</li>
      </NavLink>
      <NavLink to="/fooddmenu">
        <li>Food</li>
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-white text-black container px-5 m-auto mt-10 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="" className=" lg:hidden">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              {/* hamburger icon */}
              <IoMdMenu className="text-2xl mr-2" />
            </label>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow  "
          >
            {link}
          </ul>
        </div>
        <a className="  w-[210] h-[54]">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-10 text-lg">
          {link}
        </ul>
      </div>
      <div className="navbar-end flex gap-3 ">
        {user ? (
          //--------------------------------------------------------------------------------

          // <Link to ="/profile/myprofilehome"> <button className="btn border-2">My Profile</button>  </Link>

          <div className=" drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn border-2 border-black text-white hover:bg-primary hover:border-blue-400 hover:text-white"
              >
                My Profile
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>

              <ul className="menu w-[350px]">
                {/* Sidebar content here */}
                <div className="col-span-4 bg-[#758888] h-screen">
                  <div>
                    {user ? (
                      <div className=" flex justify-center mt-10">
                        <img
                          className=" rounded-full"
                          src={user.photoURL}
                          alt=""
                        />
                      </div>
                    ) : (
                      <>
                        <FiUser></FiUser>
                      </>
                    )}
                  </div>

                  <div>
                    {user ? (
                      <div className=" flex justify-center mt-3 mb-2 text-xl font-bold text-white">
                        {user.email}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>

                  <ul className="space-y-5 font-semibold  pl-5 text-white">
                    <li>
                      <Link to="/profile/personal">
                        <div className="flex gap-4 text-xl cursor-pointer">
                          <FiUser className="mt-1.5" />
                          Personal details
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <div className="flex gap-4 text-xl cursor-pointer">
                          <IoBookSharp className="mt-1.5" />
                          Booking History
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/profile/fvrt">
                        <div className="flex gap-4 text-xl cursor-pointer">
                          <FiHeart className="mt-1.5" />
                          Favorite
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleLogout}>
                        <div className="flex gap-4 text-xl cursor-pointer">
                          <FiLogOut className="mt-1.5" />
                          Logout
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        ) : (
          // --------------------------------------------------------------------------------
          <Link to="/auth/signin">
            {" "}
            <a className="btn border-2 border-black hover:bg-primary hover:border-blue-400 hover:text-white">
              Login
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
