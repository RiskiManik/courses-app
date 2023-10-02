import axios from "axios";
import { NextResponse } from "next/server";

const apiKey = process.env.YOUTUBE_API_KEY;

const channel = [
  "UCkXmLjEr95LVtGuIm3l2dPg",
  "UCU7YluxOYon-yofPxfGHVog",
  "UC14ZKB9XsDZbnHVmr4AmUpQ",
];

export async function GET() {
  const channels = channel.join("%");
  const res = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCkXmLjEr95LVtGuIm3l2dPg%2CUCU7YluxOYon-yofPxfGHVog%2CUC14ZKB9XsDZbnHVmr4AmUpQ&key=${apiKey} `
  );

  const data = await res.data;

  const result = data.items.map((item: any) => {
    return item.snippet;
  });

  return NextResponse.json({ data: result });
}
