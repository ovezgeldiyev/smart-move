import React from "react";
import Intro from "./components/Intro";
import News from "./components/News";
import Contr from "./components/Contr";
import Mission from "./components/Mission";
import Stake from "./components/Stake";
import Support from "./components/Support";
import { botNews, botNews_2, topNews, topNews_2 } from "../../Base/modul";

export default function Home() {
  return (
    <>
      <Intro />
      <News modul={topNews} modul2={topNews_2} />
      <Contr />
      <Mission />
      <Stake />
      <News modul={botNews} modul2={botNews_2} />
      <Support />
    </>
  );
}
