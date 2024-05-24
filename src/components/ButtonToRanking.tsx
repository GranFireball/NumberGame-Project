'use client'

import { useRouter } from "next/navigation";
import { MdLeaderboard } from "react-icons/md";

export default function ButtonToRanking() {
  const router = useRouter();

  return (
    <button onClick={() => router.push('/ranking')}>
      <div className="w-[60px] h-[70px] flex justify-center items-center bg-blue-800 hover:bg-blue-600 border-2 border-black rounded-lg">
        <MdLeaderboard size={40} color="white" />
      </div>
    </button>
  )
}