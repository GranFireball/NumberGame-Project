'use client'

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAttempts, incrementAttempt } from "@/lib/features/attemptSlicer";
import { fullLife } from "@/lib/features/lifeSlicer";
import { zeroPoints } from "@/lib/features/pointSlicer";
import { firstRound } from "@/lib/features/roundSlicer";
import { TAttempt } from "@/types";
import Attempt from "@/components/Attempt";
import GameHeader from "./GameHeader";
import GameFooter from "./GameFooter";

interface IGameProps {
  playerName: string | undefined;
  setPlayerName: Dispatch<SetStateAction<string | undefined>>;
  initialMaxNumber: number;
}

export default function GameScreen({ playerName, setPlayerName, initialMaxNumber }: IGameProps) {
  const attempts = useSelector((state: any) => state.attemptsCounter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    resetData();
  }, [])

  function resetData() {
    setPlayerName(undefined);
    dispatch(zeroPoints());
    dispatch(fullLife());
    dispatch(firstRound());
    dispatch(clearAttempts());
    dispatch(incrementAttempt());
  }

  return (
    <div className="relative h-[600px] font-bold">
      <GameHeader />
      <main>
        {
          playerName ?
            attempts.map((attempt: TAttempt) => {
              return (
                <Attempt key={attempt.id} attempt={attempt} />
              )
            })
            :
            <p className="mt-10 text-center text-4xl ">Digite seu Nome!</p>
        }
      </main>
      <GameFooter playerName={playerName} initialMaxNumber={initialMaxNumber} />
    </div>
  )
}