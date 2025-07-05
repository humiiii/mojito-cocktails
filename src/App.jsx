import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import ReactLenis from "lenis/react";
import Cocktails from "./sections/Cocktails";
import About from "./sections/About";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <ReactLenis root>
      <main>
        <NavBar />
        <Hero />
        <Cocktails/>
        <About/>
      </main>
    </ReactLenis>
  );
};
export default App;
