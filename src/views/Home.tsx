import Image from "next/image";
import bgImg from "@/imgs/bgArcade.jpg";
import ButtonToGame from "@/components/ButtonToGame";
import ButtonToRanking from "@/components/ButtonToRanking";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full font-bold">
      <Image src={bgImg} alt="Imagem de Fundo Arcade" className="absolute w-full h-full object-cover -z-10 opacity-95" />
      <header className="flex justify-end items-end  pt-5 pr-5 ">
        <ButtonToRanking />
      </header>
      <main className="flex flex-col justify-center items-center gap-10 mt-10">
        <h1 className="text-8xl font-extrabold text-white">Number Game</h1>
        <ButtonToGame />
      </main>
    </div>
  )
}