import { useState } from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

export const App = () => {
  // Khởi tạo mảng heroData: có 3 Object, mỗi Object có 2 thuộc tính.
  let heroData = [
    { text1: "Driver into", text2: "what your love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "give into", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};
export default App;
