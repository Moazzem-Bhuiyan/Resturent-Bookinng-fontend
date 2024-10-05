import React, { useContext } from 'react'
import authlogo from '../../assets/authlogo.png'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { Link, NavLink } from 'react-router-dom';

export default function SignUp() {

  const{createUser} =useContext(AuthContext);


  const handleSignUp=(e)=>{

    e.preventDefault()

    const form = e.target;

    const name = form.fname.value;
    const email =form .email.value;
    const password =form .password.value;
    const contact =form .contact.value;

    console.log(name,email,password,contact)

    createUser(email,password)
    .then((result)=>{
      console.log(result.user)
    })
    .catch((error)=>{
      console.error(error)
    })
    

    




  };



  return (


    <div className=''>


        <div className='flex justify-center mt-32' ><img className='w-48 h-auto'  src={authlogo} alt="" /></div>

        <h1 className='text-center text-3xl mb-5 font-bold'>Great to have you back !</h1>


        <form className='p-5' onSubmit={handleSignUp}>

            <label htmlFor="name">First Name</label> <br />
            <input className='w-full bg-white border-2 rounded-md h-8 px-1 mb-3' placeholder='Enter your First Name' type="text" name="fname" id="" />

            <label htmlFor="name">Last Name</label> <br />
            <input className='w-full bg-white border-2 rounded-md h-8 px-1 mb-3' placeholder='Enter your Last Name' type="text" name="lname" id="" />

            <label htmlFor="name">Contact</label> <br />
            <input className='w-full bg-white border-2 rounded-md h-8 px-1 mb-3' placeholder='018#####3' type="text" name="contact" id="" />


            <label htmlFor="name"> Email </label> <br />
            <input className='w-full bg-white border-2  rounded-md h-8 px-1 mb-3' placeholder='Enter your email' type="email" name="email" id="" />


            <label htmlFor="name">Password</label> <br />
            <input className='w-full bg-white border-2  rounded-md h-8 px-1 mb-3' placeholder='Newpassword' type="password" name="password" id="" />


            <label htmlFor="name">Confirm Passsword</label> <br />
            <input className='w-full bg-white border-2  rounded-md h-8 px-1 mb-3' placeholder='Confirm Password' type="cpassword" name="confirm password" id="" />


            <input className='w-full  bg-gray-600 text-white mt-5 py-1 ' type="submit" value="Create Account" />

            <div className='flex justify-center mt-5'><p>Alrady Have An Account ? <NavLink to ='/auth/signin'><span className='text-primary'>Please Login</span></NavLink></p></div>
            







        </form>




    </div>



  )
}
