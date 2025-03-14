import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * The main App component.
 * @returns {ReactElement} The rendered component.
 */
function App() {
  /**
   * The state of the preloader.
   * @type {boolean}
   */
  const [load, upadateLoad] = useState(true);

  /**
   * The effect hook that sets a timeout to update the preloader state.
   * @function
   */
  useEffect(() => {
    /**
     * The timeout function.
     * @function
     */
    const timer = setTimeout(() => {
      /**
       * Update the preloader state.
       */
      upadateLoad(false);
    }, 1200);

    /**
     * The cleanup function.
     */
    return () => clearTimeout(timer);
  }, []);

  /**
   * The main JSX element.
   * @returns {ReactElement} The rendered JSX.
   */
  return (
    <Router>
      <Preloader load={load} />
      <div
        className="App"
        /**
         * If the preloader is active, add the "no-scroll" class to the div.
         */
        id={load ? "no-scroll" : "scroll"}
        /**
         * The main app container.
         * This container wraps all the main components.
         */
      >
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
