import { TAttempt } from "@/types";

interface IAttemptProps{
  attempt: TAttempt;
}

export default function Attempt({attempt}: IAttemptProps) {
  return (
    <article className="mt-10 text-center text-3xl font-bold">
      <h3>Tentativa {attempt.id}</h3>
      <p>{attempt.answer && attempt.answer}</p>
    </article>
  )
}