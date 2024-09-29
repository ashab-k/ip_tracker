import React from "react";

const InfoComponent = ({ data }: any) => {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 w-[80%]">
      <div>
        <div>IP ADDRESS</div>
        <div>{data.ip}</div>
      </div>
      <div>
        <div>LOCATION</div>
        <div>
          {data.location.country} , {data.location.region}
        </div>
      </div>
      <div>
        <div>TIME-ZONE</div>
        <div>{data.location.timezone}</div>
      </div>
      <div>
        <div>ISP</div>
        <div>{data.isp}</div>
      </div>
    </section>
  );
};

export default InfoComponent;
