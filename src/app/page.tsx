"use client";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import InfoComponent from "@/components/InfoComponent";
import dynamic from "next/dynamic";

// Dynamically import MapComponent
const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
});

export default function Home() {
  const [ipData, setIpData] = useState({});
  const [ip, setIp] = useState<string>("");

  const fetchData = async () => {
    const response = await fetch("/api/ip_address_info", {
      headers: { "Content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(ip),
    });
    const resData = await response.json();
    console.log(resData);
    setIpData(resData);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <main className="h-[100vh] flex flex-col">
      <div className="relative flex flex-col items-center">
        <Image
          src="/images/pattern-bg-desktop.png"
          alt="bg"
          height={2000}
          width={2000}
          className="bg-cover overflow-hidden h-[35vh] w-full"
        />
        <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full">
          <h1 className="mt-[5rem] font-bold text-3xl text-white">
            IP Address Tracker
          </h1>
          <section className="flex justify-center items-center mt-8 w-full">
            <SearchBar
              ip={ip}
              setIp={setIp}
              fetchData={fetchData}
              handleSubmit={(e: any) => handleSubmit(e)}
            />
          </section>
          <div className="w-[80%] mt-[5rem] z-10">
            <InfoComponent data={ipData} />
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <MapComponent />
      </div>
    </main>
  );
}
