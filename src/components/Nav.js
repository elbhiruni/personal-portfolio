import { useEffect, useRef, useState } from "react";

export default function Nav({ wavePosition }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll() {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navRef = useRef();
  return (
    <div
      className={
        scrollPosition >= wavePosition
          ? "opacity-100 transition-all duration-300"
          : "opacity-0 invisible transition-all duration-300"
      }
    >
      <nav
        className="w-full backdrop-blur-sm bg-white/80 rounded-b-sm fixed top-0 right-0 shadow-lg z-50"
        ref={navRef}
      >
        <ul className="flex flex-wrap justify-center font-semibold text-blue-900 p-4 gap-8">
          <li className="hover:underline underline-offset-4">
            <a href="#about">About</a>
          </li>
          <li className="hover:underline underline-offset-4">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="hover:underline underline-offset-4">
            <a href="#blog">Blog</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
