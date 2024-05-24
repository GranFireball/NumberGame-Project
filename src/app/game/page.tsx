'use client'

import { Provider } from "react-redux";
import store from "@/lib/store";
import Game from "@/views/Game";

export default function GamePage() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  )
}