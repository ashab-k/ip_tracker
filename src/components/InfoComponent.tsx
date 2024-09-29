import React from "react";

const InfoComponent = ({ data }: any) => {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 w-[100%] h-[15vh] border text-black bg-white rounded-xl shadow-lg py-3 px-5">
      <div>
        <div className="text-gray-500 font-semibold">IP ADDRESS</div>
        <div className="text-xl font-bold py-3 ">{data.ip}</div>
      </div>
      <div>
        <div className="text-gray-500 font-semibold">LOCATION</div>
        <div className="text-xl font-bold py-3 ">
          {data.location?.country} {data.location?.region}
        </div>
      </div>
      <div>
        <div className="text-gray-500 font-semibold">TIME-ZONE</div>
        <div className="text-xl font-bold py-3 ">
          {" "}
          UTC {data.location?.timezone}
        </div>
      </div>
      <div>
        <div className="text-gray-500 font-semibold">ISP</div>
        <div className="text-xl font-bold py-3 ">{data.isp}</div>
      </div>
    </section>
  );
};

export default InfoComponent;
