import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import MinPointsModel from "@/models/MinPoints";
import RankingPlayerModel from "@/models/RankingPlayer";
import { TMinPoints, TRankingPlayer } from "@/types";

async function addToRanking(player: TRankingPlayer) {
  await RankingPlayerModel.create({ name: player.name, points: player.points });
}

async function isRankingFull() {
  const maxRankingPlayers = 10
  const ranking = await RankingPlayerModel.find();
  if (ranking.length >= maxRankingPlayers) {
    return true;
  }
  else {
    return false;
  }
}

async function removeFromRanking(minPoints: TMinPoints[]) {
  const ranking = await RankingPlayerModel.find();
  const deletePlayer = ranking.findLast((player) => player.points === minPoints[0].points);
  await RankingPlayerModel.deleteOne({ _id: deletePlayer?._id });
}

async function defineNewMinPoints(points: Number) {
  const ranking = await RankingPlayerModel.find();
  let newMinPoints = points;
  for await (let player of ranking) {
    if (player.points < newMinPoints) {
      newMinPoints = player.points;
    }
  }
  return newMinPoints;
}

async function updateMinPoints(oldMinPoints: Number, newMinPoints: Number) {
  const minPoints = MinPointsModel.findOne({ points: oldMinPoints });
  await MinPointsModel.updateOne(minPoints, { "$set": { points: newMinPoints } });
}

async function hasEnoughPoints(points: Number) {
  const minPoints = await MinPointsModel.find();
  if (minPoints.length > 0) {
    if (await isRankingFull()) {
      if (points > minPoints[0].points) {
        await removeFromRanking(minPoints);
        const newMinPoints = await defineNewMinPoints(points);
        await updateMinPoints(minPoints[0].points, newMinPoints);
        return true;
      }
      else {
        return false;
      }
    }
    else {
      if (points < minPoints[0].points) {
        await updateMinPoints(minPoints[0].points, points);
      }
      return true;
    }
  }
  else {
    await MinPointsModel.create({ points: points });
    return true;
  }
}

async function addedToRanking(player: TRankingPlayer) {
  if (await hasEnoughPoints(player.points)) {
    addToRanking(player);
    return true;
  }
  else {
    return false;
  }
}

export async function POST(request: NextRequest) {
  const player = await request.json();
  await connectMongoDB();
  if (await addedToRanking(player)) {
    return NextResponse.json({ message1: "PARABÉNS!", message2: "Você entrou para o TOP 10!" });
  }
  return NextResponse.json({ message1: "TENTE NOVAMENTE!", message2: "Você não entrou para o TOP 10!" });
}