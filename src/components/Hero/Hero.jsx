import "./Hero.css";
import arrow_btn from "../../assets/arrow_btn.png";
import pause_icon from "../../assets/pause_icon.png";
import play_icon from "../../assets/play_icon.png";

const Hero = ({
  setPlayStatus,
  heroData,
  heroCount,
  setHeroCount,
  playStatus,
}) => {
  return (
    <div className="hero">
      <div className="hero__text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <div className="hero__explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt="" />
      </div>

      <div className="hero__dot-play">
        <ul className="hero__dots">
          <li
            onClick={() => {
              setHeroCount(0);
            }}
            // className={heroCount === 0 ? "hero__dot orange" : "hero__dot"}
            className={`hero__dot ${heroCount === 0 ? "orange" : ""}`}
          >
            Car 1
          </li>
          <li
            onClick={() => {
              setHeroCount(1);
            }}
            className={heroCount === 1 ? "hero__dot orange" : "hero__dot"}
          >
            Car 2
          </li>
          <li
            onClick={() => {
              setHeroCount(2);
            }}
            className={heroCount === 2 ? "hero__dot orange" : "hero__dot"}
          >
            Car 3
          </li>
        </ul>
      </div>

      <div className="hero__play">
        <img
          onClick={() => {
            setPlayStatus(!playStatus);
          }}
          src={playStatus ? pause_icon : play_icon}
          alt=""
        />
        <p>See the video</p>
      </div>
    </div>
  );
};

export default Hero;
