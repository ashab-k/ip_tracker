"use client";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

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
    <main className="h-[100vh]">
      <div className="flex flex-col relative items-center border">
        <Image
          src="/images/pattern-bg-desktop.png"
          alt="bg"
          height={2000}
          width={2000}
          className="bg-cover overflow-hidden h-[35vh] w-auto"
        />
        <div className="w-[100%] flex flex-col items-center justify-center absolute">
          <h1 className="mt-[2rem] font-bold text-[3vw]">IP Address Tracker</h1>
          <section className="flex w-[100%] justify-center items-center mt-[3rem] ">
            <SearchBar
              ip={ip}
              setIp={setIp}
              fetchData={fetchData}
              handleSubmit={(e: any) => handleSubmit(e)}
            />
          </section>
        </div>
      </div>
      hello
    </main>
  );
}
