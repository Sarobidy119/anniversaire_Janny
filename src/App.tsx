import { useState } from "react";
import Hero from "./components/Hero";
import BirthdayMessage from "./components/BirthdayMessage";
import Wishes from "./components/Wishes";
import Gallery from "./components/Gallery";
import Surprise from "./components/Surprise";
import Blessing from "./components/Blessing";
import MusicPlayer from "./components/MusicPlayer";
import FinalSection from "./components/FinalSection";
import IntroLoader from "./components/IntroLoader";

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <IntroLoader onComplete={() => setIntroDone(true)} />}
      <Hero />
      <BirthdayMessage />
      <Wishes />
      <Gallery />
      <Surprise />
      <Blessing />
      <FinalSection />
      <MusicPlayer />
    </>
  );
}

export default App;
