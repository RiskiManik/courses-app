import axios from "axios";
import { NextResponse } from "next/server";

const apiKey = process.env.YOUTUBE_API_KEY;

export async function GET() {
  const res = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=J7lZ0Nnsi0s%2Cq1UpRZbjPzA%2CHPedOTi2hk8&key=${apiKey} `
  );

  const data = await res.data;

  return NextResponse.json({ data });
}
