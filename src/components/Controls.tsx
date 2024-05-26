'use client'

import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { clearAttempts, incrementAttempt, answerAttempt } from "@/lib/features/attemptSlicer";
import { decrementLife } from "@/lib/features/lifeSlicer";
import { incrementPoints } from "@/lib/features/pointSlicer";
import { incrementRound } from "@/lib/features/roundSlicer";

interface IControlsProps {
  playerName: string | undefined;
  setPlayerName: Dispatch<SetStateAction<string | undefined>>;
  gameOver: boolean;
  setGameOver: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  initialMaxNumber: number;
}

export default function Controles({ playerName, setPlayerName, gameOver, setGameOver, loading, setLoading, initialMaxNumber }: IControlsProps) {
  const [nameInput, setNameInput] = useState<string>();
  const [numberInput, setNumberInput] = useState<number>();
  const [randomNumber, setRandomNumber] = useState<number | undefined>(undefined);
  const attempts = useSelector((state: any) => state.attemptsCounter.value);
  const life = useSelector((state: any) => state.lifesCounter.value);
  const round = useSelector((state: any) => state.roundsCounter.value);
  const router = useRouter();
  const dispatch = useDispatch();
  const maxAttempts = 3;

  useEffect(() => {
    generateRandomNumber();
  }, [round]);

  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * (initialMaxNumber + round)) + 1;
    setRandomNumber(randomNumber);
  }

  function handleName(nameValue: string) {
    setNameInput(nameValue);
  }

  function handleNumber(numberValue: number) {
    setNumberInput(numberValue);
  }

  function newRound() {
    setTimeout(() => dispatch(clearAttempts()), 4000);
    setTimeout(() => dispatch(incrementRound()), 5000);
    setTimeout(() => dispatch(incrementAttempt()), 6000);
    setTimeout(() => setLoading(false), 7000);
  }

  function checkNumber(numberInput: number) {
    setLoading(true);
    if (numberInput === randomNumber) {
      dispatch(answerAttempt("Acertou! O número é " + numberInput));
      receivePoints();
      newRound();
    }
    else {
      if (attempts.length === maxAttempts) {
        dispatch(answerAttempt("Errou! O número era " + randomNumber));
        dispatch(decrementLife());
        if (life > 1) {
          newRound();
        }
        else {
          setTimeout(() => setGameOver(true), 4000);
          setTimeout(() => setLoading(false), 5000);
        }
      }
      else {
        if (numberInput > randomNumber!) {
          dispatch(answerAttempt("Errou! O número é menor que " + numberInput));
        }
        else {
          dispatch(answerAttempt("Errou! O número é maior que " + numberInput));
        }
        dispatch(incrementAttempt());
        setTimeout(() => setLoading(false), 3000);
      }
    }
  }

  function receivePoints() {
    const additionalPoints = round * ((maxAttempts - attempts.length) + 1);
    dispatch(incrementPoints(Number(additionalPoints)));
  }

  function exit() {
    router.push('/');
  }

  function restart() {
    setGameOver(false);
  }

  return (
    <div className="relative w-full h-full flex justify-center items-center gap-8 font-bold">
      <div className="flex flex-col">
        <input className="w-80 h-20 p-4 text-6xl" type={playerName ? "number" : "text"} onChange={(e) => playerName ? handleNumber(Number(e.target.value)) : handleName(e.target.value)} />
        <label className="text-3xl text-gray-400 ">{playerName ? "Número" : "Max: 20 caracteres"}</label>
      </div>
      <div className="relative flex justify-center items-center">
        <span className="absolute top-[-40px] text-gray-400 text-3xl">CONFIRMAR</span>
        <button disabled={loading} className="w-[100px] h-[100px] bg-green-700 hover:bg-green-500 border-2 border-black rounded-full" onClick={() => {
          if (gameOver) {
            restart();
            return;
          }
          if (playerName) {
            if (numberInput) {
              checkNumber(numberInput);
              console.log(attempts);
            }
          }
          else {
            setLoading(true);
            if (nameInput !== undefined && nameInput?.length <= 20) {
              setPlayerName(nameInput);
            }
            setTimeout(() => setLoading(false), 1000);
          }
        }}></button>
      </div>
      <div className="absolute bottom-16 left-32">
        <div className="relative flex justify-center items-center">
          <span className="absolute top-[-40px] text-gray-400 text-3xl">SAIR</span>
          <button className=" w-[100px] h-[100px] bg-red-700 hover:bg-red-500 border-2 border-black rounded-full z-10" onClick={() => exit()}>
          </button>
        </div>
      </div>
    </div>
  )
} 