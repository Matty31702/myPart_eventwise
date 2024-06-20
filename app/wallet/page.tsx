import React from "react";
import Navbar from "../components/navbar/Navbar";
import Image from "next/image";
import alkansiya from "../../public/alkansya.jpg";

const Wallet = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="ml-48 font-bold text-2xl mt-6">
        <h1 className="text-white">
          <span className="text-yellow-400">Budgeting</span> Overview
        </h1>
        <h1 className="uppercase text-white mt-7 text-md text-xl">
          Current balance
        </h1>
        <p className="text-yellow-400 hover:text-yellow-600 cursor-pointer">
          ***********
        </p>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center">
            <Image
              src={alkansiya}
              height={250}
              objectFit="cover"
              alt="savings_pic"
            />
          </div>
          <div className="text-center">
            <h1 className="uppercase text-white font-bold">
              Add to your budget
            </h1>
            <h1 className="text-yellow-400 text-3xl font-bold">₱20,000.00</h1>
          </div>
          <div
            className="text-white flex justify-around font-bold uppercase w-52 bg-gray-700 p-2 rounded-2xl hover:bg-gray-800 cursor-pointer mt-6"
            style={{ width: 600 }}
          >
            <h1 className="">Overview</h1>
            <h1>budget</h1>
            <h1 className="text-yellow-400">transaction</h1>
          </div>
        </div>
      </div>
      <div className="text-white flex justify-center gap-28 mt-6 mr-3">
        <div>
          <h1 className="uppercase mb-5">Function hall</h1>
          <h1 className="uppercase mb-5">catering</h1>
          <h1 className="uppercase mb-5">###########</h1>
          <h1 className="uppercase">###########</h1>
        </div>
        <div>
          <div>
            <h1>10.03.26</h1>
            <h1 className="text-sm text-center">8:00am</h1>
          </div>
          <div>
            <h1>10.03.28</h1>
            <h1 className="text-sm text-center">12:00am</h1>
          </div>
          <div>
            <h1>10.03.25</h1>
            <h1 className="text-sm text-center">1:00pm</h1>
          </div>
          <div>
            <h1>10.03.22</h1>
            <h1 className="text-sm text-center">4:00pm</h1>
          </div>
        </div>
        <div>
          <h1 className="mb-5">₽ 10,000.00</h1>
          <h1 className="mb-5">₽ 5,000.00</h1>
          <h1 className="mb-5">₽ 2,000.00</h1>
          <h1>₽ 2,000.00</h1>
        </div>
      </div>
      <div className="flex justify-center mt-4 ">
        <h1 className="text-black flex justify-center p-2 text-xl font-bold bg-yellow-400 w-40 rounded-2xl hover:bg-yellow-500 cursor-pointer">
          Services
        </h1>
      </div>
    </div>
  );
};

export default Wallet;
