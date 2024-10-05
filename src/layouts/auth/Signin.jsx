import React, { useContext } from 'react';
import authlogo from '../../assets/authlogo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import google from '../../assets/g.png';

export default function Signin() {
  const { googleIn } = useContext(AuthContext);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        navigate('/');
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const googleClick = () => {
    googleIn()
      .then((result) => {
        navigate('/');
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <img className="w-28 h-auto" src={authlogo} alt="Auth Logo" />
        </div>

        <h1 className="text-center text-3xl font-bold">Great to have you back!</h1>

        {/* Sign-in Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              className="w-full border border-gray-300 rounded-md h-10 px-3 mt-1"
              placeholder="Enter your email or username"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              className="w-full border border-gray-300 rounded-md h-10 px-3 mt-1"
              placeholder="Enter your password"
              type="password"
              name="password"
              id="password"
              required
            />
          </div>

          <div>
            <input
              className="w-full cursor-pointer bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition"
              type="submit"
              value="Sign In"
            />
          </div>
        </form>

        {/* Google Sign-in Button */}
        <div
          onClick={googleClick}
          className="flex items-center gap-3 bg-slate-200 cursor-pointer py-2 px-4 rounded-md justify-center hover:bg-slate-300 transition"
        >
          <img className="w-6 h-6" src={google} alt="Google Logo" />
          <span>Sign In with Google</span>
        </div>

        {/* Create Account Link */}
        <div className="text-center">
          <h1 className="mt-5 text-sm">
            New Here?{' '}
            <NavLink to="/auth/signup" className="text-blue-500 hover:underline">
              Create an Account
            </NavLink>
          </h1>
        </div>
      </div>
    </div>
  );
}
