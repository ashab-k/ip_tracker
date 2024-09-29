import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const ip = await req.json();
  console.log(ip);
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country?apiKey=${process.env.API_KEY}&ipAddress=${ip}`
  );
  const resData = await response.json();
  console.log(resData);
  return NextResponse.json(resData);
}
