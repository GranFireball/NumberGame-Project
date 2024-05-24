import { TRankingPlayer } from "@/types";
import LoadingSpinner from "./LoadingSpinner";
import RankingPlayer from "./RankingPlayer";

interface IRankingListProps {
  rankingPlayers: TRankingPlayer[] | undefined;
}

export default function RankingList({ rankingPlayers }: IRankingListProps) {
  return (
    <div className=" flex flex-col justify-center items-center gap-5 text-center mt-[-20px] p-5 border-2 border-blue-800 rounded-md bg-black text-white">
      <h1 className="text-6xl mb-20">TOP 10</h1>
      <section>
        <div className="w-full flex text-3xl underline mb-10">
          <p className="w-[200px]">Posição</p>
          <p className="w-[600px]">Nome</p>
          <p className="w-[200px]">Pontos</p>
        </div>
        {
          rankingPlayers ?
            rankingPlayers.length > 0 ?
              rankingPlayers.map((player, index) => {
                return (
                  <RankingPlayer key={index} position={index + 1} player={player} />
                )
              })
              :
              <p className="text-2xl">Nenhum Jogador Cadastrado</p>
            :
            <LoadingSpinner />
        }
      </section>
    </div>
  )
}