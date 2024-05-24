'use client'

import Image from "next/image";
import { useState } from "react";
import bgImg from "@/imgs/bgArcade.jpg";
import Controls from "@/components/Controls";
import GameOverScreen from "@/components/GameOverScreen";
import GameScreen from "@/components/GameScreen";

export default function Game() {
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [playerName, setPlayerName] = useState<string | undefined>(undefined);
  const initialMaxNumber = 4;

  return (
    <div className="relative min-h-screen w-full font-bold">
      <Image src={bgImg} alt="Imagem de Fundo Arcade" className="absolute w-full h-full object-cover -z-10 opacity-95" />
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-col items-center bg-slate-900 pt-10 px-80">
          <div className="flex justify-center items-center w-full">
            <div className="relative flex flex-col justify-center items-center w-full">
              <div className="w-[1600px] h-[400px] flex justify-center items-center bg-sky-500 border-[40px] border-black shadow-2xl shadow-black z-20">
                <h1 className="text-[160px]">Number Game</h1>
              </div>
              <div className="w-[1600px] h-[40px] flex justify-between mt-5">
                <div className="w-[119px] h-[8px] bg-black rotate-[40deg] z-10"></div>
                <div className="w-[119px] h-[8px] bg-black rotate-[140deg] z-10"></div>
                <div className="absolute w-[1600px] h-[60px] flex justify-between bg-gradient-to-b from-gray-700 to-gray-950 mt-[-20px] ">
                  <div className="relative">
                    <div className="absolute left-[-84px]  bottom-0 w-0 h-0 border-x-[90px] border-x-transparent border-b-[90px] border-b-slate-900"></div>
                  </div>
                  <div className="relative">
                    <div className="absolute right-[-84px]  bottom-0 w-0 h-0 border-x-[90px] border-x-transparent border-b-[90px] border-b-slate-900"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[1400px] h-[800px] bg-blue-500 border-x-[125px] border-y-[100px] border-black">
              {
                gameOver ?
                  <GameOverScreen playerName={playerName} loading={loading} setLoading={setLoading} />
                  :
                  <GameScreen playerName={playerName} setPlayerName={setPlayerName} initialMaxNumber={initialMaxNumber}/>
              }
            </div>
          </div>
          <div className=" w-[1840px] h-[500px] flex justify-between bg-gradient-to-b from-gray-950 to-gray-700 mt-[-20px] ">
            <div className="relative">
              <div className="absolute left-[-145px] top-[238px] w-[530px] h-[8px] bg-black rotate-[114deg] z-10"></div>
              <div className="absolute left-[-230px]  bottom-0 w-0 h-0 border-x-[230px] border-x-transparent border-t-[501px] border-t-slate-900"></div>
            </div>
            <Controls playerName={playerName} setPlayerName={setPlayerName} gameOver={gameOver} setGameOver={setGameOver} loading={loading} setLoading={setLoading} initialMaxNumber={initialMaxNumber}/>
            <div className="relative">
              <div className="absolute right-[-145px] top-[238px] w-[530px] h-[8px] bg-black rotate-[66deg] z-10"></div>
              <div className="absolute right-[-230px]  bottom-0 w-0 h-0 border-x-[230px] border-x-transparent border-t-[501px] border-t-slate-900"></div>
            </div>
          </div>
          <div className="w-[1840px] h-[40px] flex justify-between mt-5">
            <div className="w-[119px] h-[8px] bg-black rotate-[45deg] z-10"></div>
            <div className="w-[119px] h-[8px] bg-black rotate-[135deg] z-10"></div>
            <div className="absolute w-[1840px] h-[60px] flex justify-between bg-gradient-to-b from-gray-700 to-gray-950 mt-[-20px] ">
              <div className="relative">
                <div className="absolute left-[-84px]  bottom-0 w-0 h-0 border-x-[90px] border-x-transparent border-b-[90px] border-b-slate-900"></div>
              </div>
              <div className="relative">
                <div className="absolute right-[-84px]  bottom-0 w-0 h-0 border-x-[90px] border-x-transparent border-b-[90px] border-b-slate-900"></div>
              </div>
            </div>
          </div>
          <div className="w-[1650px] h-[600px] bg-black">
          </div>
        </div>
      </div>
    </div>
  )
}