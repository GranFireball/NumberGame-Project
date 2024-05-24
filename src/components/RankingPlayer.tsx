import { TRankingPlayer } from "@/types";

interface IRankingPlayerProps {
  position: Number;
  player: TRankingPlayer;
}

export default function RankingPlayer({ position, player }: IRankingPlayerProps) {
  return (
    <article className="flex text-3xl mt-4">
      <p className="w-[200px]">{position.toString()}</p>
      <p className="w-[600px]">{player.name}</p>
      <p className="w-[200px] truncate">{player.points}</p>
    </article>
  )
}