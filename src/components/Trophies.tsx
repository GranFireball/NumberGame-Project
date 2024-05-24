'use client'

import { useSelector } from "react-redux";
import { FaTrophy } from "react-icons/fa";

interface ITrophiesProps {
  sizeIcon: number;
}

export default function Trophies({ sizeIcon }: ITrophiesProps) {
  const points = useSelector((state: any) => state.pointsCounter.value);

  return (
    <div className="w-[152px] flex justify-end gap-2">
      <FaTrophy color="yellow" size={sizeIcon} />
      <span className="text-5xl">{points}</span>
    </div>
  )
}