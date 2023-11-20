import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import { motion, useAnimation, useScroll } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div>
        <section id="Section 1">
          <Navbar />
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          <p className="section-text">Section 1</p>
        </section>
        <section id="Section 2" className="section-text">
          <p className="section-text">Section 2</p>
        </section>
        <section id="Section 3" className="section-text">
          <p className="section-text">Section 3</p>
        </section>
      </div>
    </>
  );
};

export default App;
