import React from "react";
import Navbar from "../components/navbar/Navbar";

const BudgetTransaction = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="ml-48 mt-4">
        <h1 className="text-yellow-400 text-3xl font-bold">Budget</h1>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center text-white font-semibold text-xl mt-4">
          <h1 className="">Wedding Budget</h1>
          <p className="text-yellow-400 italic">₱1,500,900</p>
          <p>
            <span className="text-yellow-400 italic">left out</span> 2,500,000
          </p>
          <div className="mt-4 p-2 bg-yellow-400 rounded-2xl hover:bg-yellow-500">
            <button>
              <h1 className="text-black">Create New Budget</h1>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <div
          className="flex justify-center p-2 bg-gray-700 rounded-2xl"
          style={{ width: 500 }}
        >
          <div className="flex justify-center gap-52">
            <div className="text-yellow-400 justify-between text-lg font-semibold ">
              <h1 className="text-white">Expenses</h1>
              <h1>Food & Catering</h1>
              <h1>Venue: Church</h1>
              <h1>Reception</h1>
              <h1>Photography</h1>
              <h1>Other Amenities</h1>
            </div>
            <div className="text-yellow-400 justify-between text-lg font-semibold">
              <h1 className="text-white">View All</h1>
              <h1>-50,000</h1>
              <h1>-200,000</h1>
              <h1>-200,000</h1>
              <h1>-200,000</h1>
              <h1>-200,000</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <div
          className="flex justify-center p-2 bg-gray-700 rounded-2xl"
          style={{ width: 500 }}
        >
          <div className="flex justify-center gap-52">
            <div className="text-yellow-400 justify-between text-lg font-semibold ">
              <h1 className="text-white">Status Overview</h1>
              <div className="text-center">
                <h1>Food & Catering</h1>
                <h1 className="font-light text-sm">3,000 ax</h1>
              </div>
              <h1>Photography</h1>
            </div>
            <div className="text-yellow-400 justify-between text-lg font-semibold">
              <h1 className="text-white hover:text-gray-400">View All</h1>
              <h1>Scheduled</h1>
              <h1 className="mt-4">Scheduled</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetTransaction;
