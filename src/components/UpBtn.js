export default function UpBtn() {
  return (
    <div className="text-right">
      <a
        href="#home"
        className="inline-block w-12 h-12 text-white bg-blue-900 p-2 rounded-full transition-all hover:brightness-125"
      >
        <svg
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="rotate-180"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </a>
    </div>
  );
}
