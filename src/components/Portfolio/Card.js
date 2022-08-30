export default function Card({ img, tech, title, text, link }) {
  return (
    <div className="max-w-md h-full bg-white rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 drop-shadow-lg">
      <div className="max-h-40 sm:max-h-52 overflow-clip select-none">
        <img src={img} alt={title} draggable="false" />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap mb-4 gap-2">
          {tech.map((item) => {
            return (
              <span className="tag" key={tech.indexOf(item)}>
                {item}
              </span>
            );
          })}
        </div>
        <div className="mb-6 break-words">
          <h3 className="text-blue-700 text-lg font-semibold">{title}</h3>
          <p className="font-medium">{text}</p>
        </div>
        <div className="select-none">
          <span>
            <a
              href={link.live}
              target="_blank"
              rel="noreferrer"
              className="link-btn mr-2"
            >
              Live
            </a>
            <a
              href={link.source}
              target="_blank"
              rel="noreferrer"
              className="link-btn"
            >
              Source
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
