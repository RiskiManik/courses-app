import axios from "axios";
import { NextResponse } from "next/server";

const apiKey = process.env.YOUTUBE_API_KEY;

export async function GET() {
  const res = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=UCU7YluxOYon-yofPxfGHVog&maxResults=25&key=${apiKey} `
  );

  const data = await res.data;

  return NextResponse.json({ data });
}
