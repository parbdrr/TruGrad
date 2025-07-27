




import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate=useNavigate();
  return (
    <div className='bg-black w-full min-h-20 flex flex-col justify-between items-center p-2 md:flex-row'>
      <div onClick={()=>{navigate("/")}} className='text-white text-2xl font-bold ml-8 w-56 h-16 flex justify-normal items-center'>


      <h1 className="text-xl font-bold text-white drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]">
        MY COLLEGE REVIEW
      </h1>
        
        
        
        
        
        </div>
      <div className='w-full h-2/3 border text-white border-slate-500 mx-8 my-2 rounded-3xl p-1 flex justify-around items-center md:w-1/3' style={{ boxShadow: '0px 0px 2px 1px white' }}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-blue-500 font-semibold hover:font-semibold'
              : 'text-white hover:text-blue-500 hover:font-semibold'
          }
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-blue-500 font-semibold hover:font-semibold'
              : 'text-white hover:text-blue-500 hover:font-semibold'
          }
          to="/about"
        >
          ABOUT US
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-blue-500 font-semibold hover:font-semibold'
              : 'text-white hover:text-blue-500 hover:font-semibold'
          }
          to="/contact"
        >
          CONTACT US
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;