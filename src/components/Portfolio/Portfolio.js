import Card from "./Card";
import ipAddressTracker from "../../images/ip-address-tracker.png";
import urlShortening from "../../images/url-shortening.png";
import adviceGeneratorApp from "../../images/advice-generator-app.png";
import etchASketch from "../../images/etch-a-sketch.png";

export default function Portfolio() {
  return (
    <section id="portfolio" className="pt-20 pb-10">
      <h2 className="text-center mb-4 lg:mb-10">Portfolio</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <Card
          img={ipAddressTracker}
          tech={["Next.js", "React Leaflet", "Tailwind CSS"]}
          title="IP Address Tracker"
          text="Get some information from ip address / domain"
          link={{
            live: "https://fem-ip-address-tracker-elbhiruni.vercel.app",
            source: "https://github.com/elbhiruni/fem-ip-address-tracker",
          }}
        />
        <Card
          img={urlShortening}
          tech={["React", "Axios", "styled-components", "Web Storage API"]}
          title="URL Shortening Landing Page"
          text="URL Shortener with shrtco.de"
          link={{
            live: "https://fem-url-shortening-api-landing-page-elbhiruni.vercel.app",
            source:
              "https://github.com/elbhiruni/fem-url-shortening-api-landing-page",
          }}
        />
        <Card
          img={adviceGeneratorApp}
          tech={["HTML", "Sass", "JavaScript"]}
          title="Advice Generator App"
          text="Generate random advice with api.adviceslip.com"
          link={{
            live: "https://fem-advice-generator-app-elbhiruni.vercel.app",
            source: "https://github.com/elbhiruni/fem-advice-generator-app",
          }}
        />
        <Card
          img={etchASketch}
          tech={["HTML", "CSS", "JavaScript"]}
          title="Etch-a-Sketch"
          text="Simple Etch a Sketch game"
          link={{
            live: "https://elbhiruni.github.io/odin-etch-a-sketch",
            source: "https://github.com/elbhiruni/odin-etch-a-sketch",
          }}
        />
      </div>
    </section>
  );
}
