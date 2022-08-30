import { useEffect, useRef, useState } from "react";
import Nav from "./Nav";

export default function Header() {
  const svgRef = useRef();

  const [wavePosition, setWavePosition] = useState(0);

  useEffect(() => {
    setWavePosition(svgRef.current.getBoundingClientRect());
  }, []);

  return (
    <header id="home">
      <Nav wavePosition={wavePosition.y} />
      <div className="flex flex-col items-center justify-center h-screen text-white text-center bg-blue-900 p-4">
        <h1 className="text-3xl md:text-5xl font-medium mb-4 animate-fadeInDown">
          Hi, I'm <span className="text-orange-400">El Bhiruni</span>.
        </h1>
        <p className="text-3xl md:text-5xl font-medium mb-10 animate-fadeInDown animate-delay-1s">
          I am a Front-End Developer.
        </p>
        <a
          href="#about"
          className="inline-block w-12 h-12 text-orange-400 p-2 border-orange-400 border-2 rounded-full animate-bounce hover:brightness-125 transition-colors"
        >
          <svg
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        ref={svgRef}
      >
        <path
          fill="#1e3a8a"
          fillOpacity="1"
          d="m 0,0 v 160 l 59.999997,16 c 59.999933,15.99997 180.000113,47.99921 299.999993,42.69921 119.99987,-5.7 240.00012,-47.69844 359.99999,-53.39844 119.99988,-5.29998 240.00011,26.70003 360.00002,48 119.9998,21.69999 240,31.69844 300,37.39844 L 1440,256 V 0 Z"
        />
      </svg>
    </header>
  );
}
