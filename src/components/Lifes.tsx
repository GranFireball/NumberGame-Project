'use client'

import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";

interface ILifesProps {
  sizeIcon: number;
}

export default function Lifes({ sizeIcon }: ILifesProps) {
  const life = useSelector((state: any) => state.lifesCounter.value);
  return (
    <div className="w-[152px] flex gap-4">
      {Array.from({ length: life }).map((_, index) => (
        <FaHeart key={index} color="red" size={sizeIcon} />
      ))}
    </div>
  )
}