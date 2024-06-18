import { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

export const App = () => {
  // Khởi tạo mảng heroData: có 3 Object, mỗi Object có 2 thuộc tính.
  let heroData = [
    { text1: "Driver into", text2: "what your love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give into", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);
  //Chuyen anh 3s 1 lan
  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []); 

  // useEffect(() => {
  //   const intervalId = setTimeout(() => {
  //     setHeroCount((count) => (count === 2 ? 0 : count + 1));
  //     // Bắt đầu setTimeout lại sau mỗi 3000 mili giây
  //     intervalId = setTimeout(() => {
  //       setHeroCount((count) => (count === 2 ? 0 : count + 1));
  //     }, 3000);
  //   }, 3000);
  //   // Dọn dẹp interval khi component unmount
  //   return () => clearTimeout(intervalId);
  // }, []);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]} // lấy theo khi chọn heroCount
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};
export default App;
