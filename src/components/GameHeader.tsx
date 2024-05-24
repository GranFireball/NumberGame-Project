'use client'

import { useSelector } from "react-redux";
import Lifes from "./Lifes";
import Trophies from "./Trophies";

export default function GameHeader() {
  const round = useSelector((state: any) => state.roundsCounter.value);
  const sizeIcon = 40;

  return (
    <header className="flex justify-between p-4 ">
      <Lifes sizeIcon={sizeIcon} />
      <div className="flex flex-col items-center gap-2">
        <span className="text-4xl ">ROUND</span>
        <span className="text-6xl">{round}</span>
      </div>
      <Trophies sizeIcon={sizeIcon} />
    </header>
  )
}