import { useState } from 'react'
import './output.css'
import Nav from './component/nav'
import { createBrowserRouter, RouterProvider,Route } from 'react-router-dom'
import Home from './component/home'
import About from './component/about'
import Contact from './component/contact'
import { Routes } from 'react-router-dom'
import Review from './component/review'
import Postreview from './component/Postreview'
import Verify from './component/Verify'
import Footer from './component/Footer'
const router= createBrowserRouter([
  {
    path:'/',
    element: <div><Nav/><Home/><Footer/></div>  
  },
  {
    path:'/about',
    element: <div><Nav/><About/><Footer/></div>
  },
  {
    path:'/contact',
    element: <div><Nav/><Contact/><Footer/></div>
  },
  {
    path:'/review/:id',
    element: <div><Nav/><Review/><Footer/></div>
  },
  {
    path:'/postreview',
    element: <div><Nav/> <Postreview/><Footer/> </div>
  },
  {
    path:'/verify',
    element: <div><Nav/> <Verify/> <Footer/></div>
  }
])

function App() {
  

  return (
      <div className='w-svw bg-gray-400' >
    
        <RouterProvider router={router}/>
      </div>


         
   
  )
}

export default App
