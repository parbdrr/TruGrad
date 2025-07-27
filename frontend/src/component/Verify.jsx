import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";


const Verify = () => {
    const location=useLocation();
  const [code, setCode] = useState("");
  const navigate=useNavigate();
  const { state } = location;

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (code.trim() === "") {
      alert("Please enter the verification code.");
      return;
    }
    const request= await fetch("http://localhost:8800/verify",{
        method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ passcode:code }),
    })
    const data=await request.json();

    if(data.success){
        alert("review posted succesfully")
        navigate(`/review/${state.id}`)
    }
    else
    alert("wrong verification code")
 

  };

  return (
    <div className="w-full flex flex-col items-center p-4 m-12">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Verify Your College Email ID
      </h1>

      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 mb-12">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label className="text-gray-700 text-sm font-semibold">
            Enter Verification Code:
          </label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter the code sent to your email"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold rounded-md py-2 hover:bg-blue-600 transition duration-200"
          >
            Verify & Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verify;
