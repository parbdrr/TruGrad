import React from 'react'
import bmsce from '../assets/bmsce.jpg'
import rvce from '../assets/rvce.jpg';
import pes from '../assets/pes.jpeg';
import msruas from '../assets/msruas.jpg';
import jain from '../assets/jain.jpg';
import dayanandasagar from '../assets/dayanandasagar.jpg';
import reva from '../assets/reva.jpg';
import kle from '../assets/kle.jpg';
import acharya from '../assets/acharya.jpg';
import christ from '../assets/christ.jpg';
import vidyavardhaka from '../assets/vidyavardhaka.jpg';
import bti from '../assets/bti.jpg';
import sdm from '../assets/sdm.jpg';
import rkcollege from '../assets/rkcollege.jpg';
import cms from '../assets/cms.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Function to render stars based on the rating
const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating); // Number of full stars
  const halfStar = rating % 1 >= 0.5; // Check if there's a half star

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={`full-${i}`} className='text-yellow-500'>★</span>);
  }

  // Add half star if applicable
  if (halfStar) {
    stars.push(<span key="half" className='text-yellow-500'>☆</span>);
  }

  // Add empty stars to make a total of 5
  for (let i = stars.length; i < 5; i++) {
    stars.push(<span key={`empty-${i}`} className='text-gray-300'>☆</span>);
  }

  return stars;
};








const Home = () => {
  const [College, setCollege] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get("http://localhost:8800/colleges");
      setCollege(res.data);
    }
    getdata();
  }, [])
  
  const navigate= useNavigate()
  const handleclick=(id)=>{
    navigate(`/review/${id}`);
  }
  // console.log(College)
  return (

    <div className='w-full flex flex-wrap p-8 gap-11 justify-around'>
      {
        College.map((item) => {
          const rating = item.avg_rating.toFixed(1);
          const image=item.img;
          
          return (
      <div style={{ width: '30%', height: '26rem' }}      className='p-1 bg-white shadow-xl rounded-sm overflow-hidden flex flex-col border border-transparent hover:border-black' onClick={() => handleclick(item.id)} key={item.id}>
        <div className='w-full h-1/2 md:h-3/4'>
          <img src={eval(image)} alt={item.img} className='w-full h-full object-cover' />
        </div>
        <div className='w-full h-1/4 p-2 flex flex-col justify-between'>
          <div>
            <h2 className='text-lg font-semibold text-gray-800'>{item.name}</h2>
            <p className='text-sm text-gray-600'>{item.loc}</p>
          </div>
          <div className='flex items-center'>
            {renderStars(rating)}
            <span className='ml-2 text-sm text-gray-500'>({rating})</span>
          </div>
        </div>
      </div>
          )

        })
      }
    </div>
  )
}

export default Home           