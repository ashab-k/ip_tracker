"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import React from "react";

const SearchBar = ({ handleSubmit, ip, setIp, fetchData }: any) => {
  return (
    <section className="lg:w-[30rem] md:w-[25rem] sm-[25rem] ">
      <form action="" onSubmit={(e) => handleSubmit(e)} className="w-[100%] ">
        <div className="w-[100%] h-[2.5rem] lg:h-[3rem] sm:h-[2.5rem] flex justify-between border rounded-lg">
          <div className="w-[100%]">
            <input
              className="w-[100%] h-[100%] text-black text-lg px-5 outline-none border-none rounded-lg"
              type="text"
              name=""
              value={ip}
              onChange={(e) => {
                setIp(e.target.value);
              }}
              placeholder="Enter IP address"
              id=""
              onClick={() => {
                fetchData;
              }}
            />
          </div>
          <div className="w-[10%] grid items-center ">
            <Image
              src="/images/icon-arrow.svg"
              height={15}
              width={15}
              alt="icon"
              className="ml-5"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
