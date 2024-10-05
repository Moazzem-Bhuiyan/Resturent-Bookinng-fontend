import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App';
import Navber from './Component/Home/Navber';
import Footer from './Component/Home/Footer';
import BookingBanner from './Component/Home/BookingBanner';
import Service from './Component/Home/Service';
import ExploreRecipe from './Component/Home/ExploreRecipe';
import Banner from './Component/Home/Banner';
import Home from './Component/Home';
import About from './Component/Home/About Page/About';
import Privecy from './Component/Home/About Page/Privecy';
import Terms from './Component/Home/About Page/Terms';
import Auth from './layouts/auth/Auth';
import Sidebar from './layouts/auth/Sidebar';
import SignUp from './layouts/auth/SignUp';
import Signin from './layouts/auth/Signin';
import MyProfileHome from './layouts/My profile/MyProfileHome';

import Favorite from './layouts/My profile/Favorite';
import Logout from './layouts/My profile/Logout';
import MyProfile from './layouts/My profile/MyProfile';
import Personaldetails from './layouts/My profile/personaldetails';
import FoodDetails from './pages/Details/FoodDetails';
import BokkingTable from './Component/Home/BokkingTable/BokkingTable';
import BookingTableDetails from './pages/Details/BookingTableDetails';
import Food from './Component/Home/Food/Food';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateAuth from './AuthProvider/PrivateAuth';






const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children:[
      {
        path:'/',
        element: <Home></Home>

      },

      {
        path:'/navber',
        element:<Navber></Navber>,
      },
      {
        path:'/banner',
        element:<Banner></Banner>
      },
      {
        path:'/explorerecipe',
        element:<ExploreRecipe></ExploreRecipe>
      },
      {
        path:'/service',
        element:<Service></Service>
      },
      {
        path:'/bookingbanner',
        element:<BookingBanner></BookingBanner>
      },
      {
        path:'/footer',
        element:<Footer></Footer>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/privecy',
        element: <Privecy></Privecy>
      },
      {
        path:'/terms',
        element:<Terms></Terms>
      },
      {
        path:'/fooddmenu',
        element: <Food></Food>,
        
      },

      {
        path:'/fooddetails/:id',
        element: <FoodDetails></FoodDetails>,
        loader: ()=> fetch('/food.json'),
      },

      {
        path:'/bookingable',
        element:<PrivateAuth>
          <BokkingTable></BokkingTable>
          </PrivateAuth>
      },
      
      {
        path:'/bookingabledetails/:id',
        element:<BookingTableDetails></BookingTableDetails>,
        loader:()=> fetch('/booking.json'),
      },
    

    ]
  },
  {
    path:'/auth',
    element:<Auth></Auth>,

    children:[

      {
        path :'signup',
        element:<SignUp></SignUp>
      },
      {
        path :'signin',
        element:<Signin></Signin>
      },

      {
        path :'sidebar',
        element:<Sidebar></Sidebar>
      },  
    ]
  },
  {
    path: '/profile',
    element: <MyProfile />,
    children: [
      {
        path: 'myprofilehome',
        element: <MyProfileHome />
      },
      {
        path: 'personal',
        element: <Personaldetails />
      },
      {
        path: 'fvrt',
        element: <Favorite />
      },
      {
        path: 'logout',
        element: <Logout />
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(

  <StrictMode>

<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>

  </StrictMode>,
)
