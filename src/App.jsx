import { useEffect } from "react";
import BgVideo from "./assets/earth-bg.mp4";

// components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className=" h-[700px] relative">
        {/* 背景視頻 */}
        <video
          preload="auto"
          autoPlay
          loop
          muted
          className=" fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>

      <Services />
      <Banner />
      <Banner2 />
      <Footer />
    </div>
  );
};

export default App;
