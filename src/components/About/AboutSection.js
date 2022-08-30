import Icon from "./Icon";
import Skills from "./Skills";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row lg:justify-between lg:min-h-screen pt-20"
    >
      <div className="flex flex-col lg:self-center lg:w-[45%]">
        <h2 className="text-center lg:text-left mb-2">About</h2>
        <p className="lg:text-lg font-medium mb-2">
          I am currently focusing on Frontend Development. Before focusing on
          programming I had experience as a Computer Technician.
        </p>
        <p className="lg:text-lg font-medium mb-4 lg:mb-10">
          Now I prefer to learn through documentation and I think I learn
          faster, but when I get stuck I will watch video tutorials.
        </p>
        <Icon />
      </div>
      <div className="lg:self-center mt-10 lg:mt-0">
        <Skills />
      </div>
    </section>
  );
}
