import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import RankingPlayerModel from "@/models/RankingPlayer";

export async function GET() {
  await connectMongoDB();
  const ranking = await RankingPlayerModel.find();
  return NextResponse.json(ranking);
}
