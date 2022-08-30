import Header from "./components/Header";
import AboutSection from "./components/About/AboutSection";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer";
import UpBtn from "./components/UpBtn";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <AboutSection />
          <Portfolio />
          <UpBtn />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
