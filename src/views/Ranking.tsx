'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { TRankingPlayer } from "@/types";
import bgImg from "@/imgs/bgArcade.jpg";
import ButtonToHome from "@/components/ButtonToHome";
import RankingList from "@/components/RankingList";


export default function Ranking() {
  const [rankingPlayers, setRankingPlayers] = useState<TRankingPlayer[]>();

  useEffect(() => {
    fetch('http://localhost:3000/api/ranking', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((data) => data.json())
      .then((json) => {
        setRankingPlayers(json.sort(function (playerA: { points: number }, playerB: { points: number }) {
          return playerB.points - playerA.points;
        }))
      })
  }, []);

  return (
    <div className="relative min-h-screen w-full font-bold">
      <Image src={bgImg} alt="Imagem de Fundo Arcade" className="absolute w-full h-full object-cover -z-10 opacity-95" />
      <header className="pt-5 pl-5">
        <ButtonToHome />
      </header>
      <main className="w-full flex justify-center mt-10">
        <RankingList rankingPlayers={rankingPlayers} />
      </main>
    </div>
  )
}