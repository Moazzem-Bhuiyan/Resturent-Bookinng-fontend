
import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './Component/Home/Navber'
import Footer from './Component/Home/Footer'

function App() {


  return (


    <>


      <Navber></Navber>
    <div>
      <Outlet></Outlet>
    </div>

    <Footer></Footer>
     
    </>


  )

}

export default App
