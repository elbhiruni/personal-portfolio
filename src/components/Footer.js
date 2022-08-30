export default function Footer() {
  return (
    <footer className="text-white font-medium">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1e3a8a"
          fillOpacity="1"
          d="M0,160L60,176C120,192,240,224,360,218.7C480,213,600,171,720,165.3C840,160,960,192,1080,213.3C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-blue-900">
        <div className="container flex flex-col lg:flex-row justify-evenly gap-y-8 py-10">
          <div className="w-full truncate">
            <h2 id="contact" className="text-white mb-4">
              Contact
            </h2>
            <a
              href="mailto:elbhiruni.tik@gmail.com"
              className="hover:underline underline-offset-4"
            >
              elbhiruni.tik@gmail.com
            </a>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 id="blog" className="text-white mb-4">
              Blog
            </h2>
            <a
              href="https://www.kotakode.com/blogs/3688/Tutorial-Memfoto-Codingan-Pada-Visual-Studio-Code-Menggunakan-CodeSnap"
              target="_blank"
              rel="noreferrer"
              className="hover:underline underline-offset-4"
            >
              Tutorial Memfoto Codingan Pada Visual Studio Code Menggunakan
              CodeSnap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
