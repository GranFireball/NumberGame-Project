'use client'

import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";

export default function ButtonToHome() {
  const router = useRouter();

  return (
    <button onClick={() => router.push('/')}>
      <div className="w-[60px] h-[70px] flex justify-center items-center bg-blue-800 hover:bg-blue-600 border-2 border-black rounded-lg">
        <FaHome size={40} color="white" />
      </div>
    </button>
  )
}