'use client'

import { useRouter } from "next/navigation";
import { useState, Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { TFinalMessage } from "@/types";
import LoadingSpinner from "./LoadingSpinner";

interface IGameOverProps {
  playerName: string | undefined;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export default function GameOverScreen({ playerName, loading, setLoading }: IGameOverProps) {
  const points = useSelector((state: any) => state.pointsCounter.value);
  const [finalMessage, setFinalMessage] = useState<TFinalMessage | undefined>();
  const [requestDone, setRequestDone] = useState<boolean>(false);
  const router = useRouter();

  if (requestDone === false) {
    setRequestDone(true);
    setLoading(true);
    fetch('/api/addToRanking', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "name": playerName, "points": points })
    })
      .then((data) => data.json())
      .then((json) => setFinalMessage(json))
      .finally(() => {
        setLoading(false);
        router.refresh();
      })
  }

  return (
    <main className="w-full h-full flex flex-col justify-center items-center text-4xl text-center font-bold gap-10">
      <h1 className="text-6xl">GAME OVER</h1>
      <h3>SEUS PONTOS: {points}</h3>
      {
        loading || !finalMessage ?
          <LoadingSpinner />
          :
          <>
            <div>
              <p>{finalMessage.message1}</p>
              <p>{finalMessage.message2}</p>
            </div>

            <p>Clique em CONFIRMAR para tentar novamente</p>
          </>
      }
    </main>
  )
}