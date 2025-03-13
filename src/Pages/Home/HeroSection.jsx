import React from "react";
import "./HeroSection.css";
import hero from "../../assets/hero.jpg"; 
import { FaQuran, FaMosque, FaStarAndCrescent } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>تدبر في آيات الله</h1>
        <p>اقرأ واستمع للقرآن الكريم، وتابع مواقيت الصلاة، واحتسب الأجر.</p>
        <div className="hero-icons">
      <FaQuran className="icon" />
      <FaMosque className="icon" />
      <FaStarAndCrescent className="icon" />
    </div>
      </div>

      <div className="hero-image">
        <img src={hero} alt="طفل يقرأ القرآن" />
      </div>

     
      <svg
        className="wave"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path fill="#e6c69d" fillOpacity="1"
          d="M0,224L80,202.7C160,181,320,139,480,144C640,149,800,203,960,224C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
        </path>
      </svg>
    </section>
  );
};

export default HeroSection;

