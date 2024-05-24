'use client'

import { useSelector } from "react-redux";

interface IGameFooterProps {
  playerName: string | undefined;
  initialMaxNumber: number;
}

export default function GameFooter({ playerName, initialMaxNumber }: IGameFooterProps) {
  const round = useSelector((state: any) => state.roundsCounter.value);
  const maxPossibleNumber = initialMaxNumber + Number(round);

  return (
    <footer className="absolute w-full bottom-0 p-4 text-4xl flex justify-between">
      <p>{playerName ? playerName : null}</p>
      <p>{playerName ? `Números Possíveis: 1 até ${maxPossibleNumber}` : null}</p>
    </footer>
  )
}