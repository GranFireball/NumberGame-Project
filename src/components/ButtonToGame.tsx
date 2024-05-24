'use client'

import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

export default function ButtonToGame() {
  const router = useRouter();

  return (
    <button onClick={() => router.push('/game')}>
      <div className="w-[200px] h-[100px] flex justify-center items-center p-6 bg-blue-800 hover:bg-blue-600 border-2 border-black rounded-lg">
        <FaPlay size={40} color="black" />
      </div>
    </button>
  )
}