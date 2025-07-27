import React from 'react'
import bmsce from '../assets/bmsce.jpg';
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
import { useParams,useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios  from 'axios';




const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStar = rating % 1 >= 0.5; // Check if there's a half star

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(<span key={`full-${i}`} className='text-yellow-500 text-2xl'>★</span>);
    }

    // Add half star if applicable
    if (halfStar) {
        stars.push(<span key="half" className='text-yellow-500 text-2xl'>☆</span>);
    }

    // Add empty stars to make a total of 5
    for (let i = stars.length; i < 5; i++) {
        stars.push(<span key={`empty-${i}`} className='text-gray-300 text-2xl '>☆</span>);
    }

    return stars;
};




const Review = () => {
    const {id}=useParams()
    const [college, setcollege] = useState([{"id":0,"name":"","loc":"","img":"","avg_rating":0}]);
    const [Reviews, setReviews] = useState([{"id":0,"sname":"","review":"","rating":0,"date":""}]);
    const [loding ,setLoding] = useState(0);
    const navigate=useNavigate();

    // useEffect(()=>setLoding(1),[]);

    useEffect(() => {
     const getdata=async()=>{
        const res1= await axios.get(`http://localhost:8800/colleges/${id}`);
        const res2= await axios.get(`http://localhost:8800/reviews/${id}`);
        setcollege(res1.data);
        setReviews(res2.data);
        // console.log("review="+Reviews);
        // console.log("college="+college);
        setLoding(1);
     }
     getdata();
    },[loding])

    const handlepost=()=>{
        const dataToSend = { id:college[0].id, mail:college[0].mail };
        navigate('/postreview', { state: dataToSend });
    }
    
    

    return (
        
        <div className='w-full flex flex-col items-center p-8'>
            <div className='w-full h-56 bg-white my-10 p-2 rounded-md gap-4 flex flex-shrink md:w-3/4'>
                <div className='w-2/6 h-full'><img src={eval(college[0].img)}  className='w-full h-full' /></div>
                <div className='w-2/3 h-full flex flex-col'>
                    <div className='text-4xl font-semibold'>{college[0].name}   </div>
                    <p className='text-xl font text-gray-600 my-2'>{college[0].loc}</p>
                    <div className='flex justify-between'>
                    <div className='flex items-center'> 
                        {renderStars(college[0].avg_rating)}
                        <span className='ml-2 text-2xl text-gray-500'>({college[0].avg_rating.toFixed(1)})</span>
                    </div>
                        <button className='m-1 p-2 bg-blue-700 text-white rounded-sm hover:bg-blue-900' onClick={handlepost} >Post review</button>
                    </div>
                  
                </div>

            </div>
            <div className="w-full bg-white p-2 rounded-md flex flex-col md:w-3/4">
                <div className="underline my-2 text-lg font-bold">Reviews</div>
                {/* individual review */}
                {
                    Reviews.map((item)=>{
                        return(
                            <div className="p-4 border-b border-gray-200" key={item.sname}>
                            <div className="text-sm font-semibold">{item.sname}</div>
                            <div className='flex items-center'>
                                {renderStars(item.rating)}
                                <span className='ml-2 text-lg text-gray-500'>({item.rating})</span>
                            </div>
                            <div className="text-sm text-gray-700">
                                "{item.review}"
                            </div>
                            <div className="text-xs text-gray-500 mt-2">
                                Reviewed on: {item.date}
                            </div>
                        </div>
                        )
                    })
                }
              
            </div>




        </div>
    )
}

export default Review  