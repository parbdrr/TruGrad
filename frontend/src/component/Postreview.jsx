import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const PostReview = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [smail, setsmail] = useState("");
  const location = useLocation();
  const { state } = location;
  const navigate=useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !rating || !review || !smail) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    const fullmail=smail+state.mail
    // Example: Submitting the review (Replace with API call)

        const response= await fetch("http://localhost:8800/sendverification",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id:state.id, name, fullmail, review, rating }),
        });
    const dataToSend = { id:state.id, };
    navigate("/verify", {state : dataToSend})

    // Reset form
    setName("");
    setRating("");
    setReview("");
    setsmail("");
    
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-3/4 bg-white p-6 my-11 flex flex-col shadow-lg rounded-lg">
        <h1 className="text-xl font-bold mb-4">Rate Your College</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <div className="flex">
                 <input
              type="text"
              value={smail}
              onChange={(e) => setsmail(e.target.value)}
              className="w-3/4 p-2 border rounded-md"
              placeholder="Enter your college email id"
              required
            />
            <div className="m-2">{state.mail}</div>
            </div>
           
          </div>

          {/* Rating Dropdown */}
          <div>
            <label className="block text-gray-700 font-semibold">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Select a rating</option>
              <option value="5">⭐️⭐️⭐️⭐️⭐️ (Excellent)</option>
              <option value="4">⭐️⭐️⭐️⭐️ (Very Good)</option>
              <option value="3">⭐️⭐️⭐️ (Good)</option>
              <option value="2">⭐️⭐️ (Average)</option>
              <option value="1">⭐️ (Poor)</option>
            </select>
          </div>

          {/* Review Textarea */}
          <div>
            <label className="block text-gray-700 font-semibold">Your Review</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Write your review here..."
              rows="4"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostReview;
