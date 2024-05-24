import Image from "next/image";
import bgImg from "@/imgs/bgArcade.jpg";
import ButtonToHome from "@/components/ButtonToHome";
import RankingList from "@/components/RankingList";

export default function Ranking() {
  return (
    <div className="relative min-h-screen w-full font-bold">
      <Image src={bgImg} alt="Imagem de Fundo Arcade" className="absolute w-full h-full object-cover -z-10 opacity-95" />
      <header className="pt-5 pl-5">
        <ButtonToHome />
      </header>
      <main className="w-full flex justify-center mt-10">
        <RankingList />
      </main>
    </div>
  )
}