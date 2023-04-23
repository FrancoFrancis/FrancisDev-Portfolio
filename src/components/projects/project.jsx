"use client";

import React, { useContext } from "react";
import { faCodeBranch, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./project.module.css";
import { ThemeContext } from "../../../context";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme?.state?.darkMode;
  const { ref: headingRef, inView: headingIsVisible } = useInView();
  const { ref: sectionRef, inView: sectionIsVisible } = useInView();
  return (
    <m.div
      ref={sectionRef}
      className={`${styles.projects}  ${
        headingIsVisible ? styles.animateSection : ""
      }`}
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
    >
      <h1
        ref={headingRef}
        className={`${styles.projectsHeading}  ${
          headingIsVisible ? styles.animateHeading : ""
        }`}
      >
        &lt;Projects/&gt;
      </h1>
      {/* className='projects-heading' */}
      <div className={styles["cards"]}>
        {/* one */}
        <div
          className={styles["card"]}
          style={{ backgroundColor: darkMode && "orangered" }}
        >
          <div className={styles["p-browser"]}>
            <div className={styles["p-circle"]}></div>
            <div className={styles["p-circle"]}></div>
            <div className={styles["p-circle"]}></div>
          </div>

          <div className={styles["content"]}>
            <h1>Ortentic Nigeria (Startup)</h1>
            <p>REACT + SASS + STRAPI + STRIPE</p>
            <p>E - commerce App for clothing and london used items </p>

            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/FrancoFrancis/ortentic-app"
                style={{ color: darkMode && "#fff" }}
              >
                <p>Code</p>
                <FontAwesomeIcon
                  icon={faCodeBranch}
                  height={"16"}
                  width={"16"}
                />
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://ortentic-app.vercel.app/"
                style={{ color: darkMode && "#fff" }}
              >
                <p>Live Prototype Demo (under construction)</p>
                <FontAwesomeIcon icon={faGlobe} height={"16"} width={"16"} />
              </a>
            </span>
          </div>
          <span
            className={styles["circle"]}
            style={{ color: darkMode && "#fff" }}
          ></span>
        </div>
        {/* two */}
        <div
          className={styles["card"]}
          style={{ backgroundColor: darkMode && "#08a308" }}
        >
          <div className={styles["p-browser"]}>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>

          <div className={styles["content"]}>
            <h1>Comrade Meme App</h1>
            <p>REACT + SASS</p>
            <p className={styles["desc"]}>
              App for popular viral meme built with React{" "}
            </p>

            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/FrancoFrancis/HAVEN-HOMES"
                style={{ color: darkMode && "#fff" }}
              >
                <p>Code</p>
                <FontAwesomeIcon
                  icon={faCodeBranch}
                  height={"16"}
                  width={"16"}
                />
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://comrade-meme-app.vercel.app/"
                style={{ color: darkMode && "#fff" }}
              >
                <p>Live Demo</p>
                <FontAwesomeIcon icon={faGlobe} height={"16"} width={"16"} />
              </a>
            </span>
          </div>
          <span className={styles["circle"]}></span>
        </div>
        {/* three */}
        <div
          className={styles["card"]}
          style={{ backgroundColor: darkMode && "#2222ed" }}
        >
          <div className={styles["p-browser"]}>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>

          <div className={styles["content"]}>
            <h1>Haven Homes</h1>
            <p>REACT + SASS</p>
            <p>Real Estate Web App </p>

            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/FrancoFrancis/HAVEN-HOMES"
                style={{ color: darkMode && "#fff" }}
              >
                <p>Code</p>
                <FontAwesomeIcon
                  icon={faCodeBranch}
                  height={"16"}
                  width={"16"}
                />
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://haven-homes-roan.vercel.app/"
                style={{ color: darkMode && "#fff" }}
              >
                <p>Live Demo</p>
                <FontAwesomeIcon icon={faGlobe} height={"16"} width={"16"} />
              </a>
            </span>
          </div>
          <span className={styles["circle"]}></span>
        </div>

        {/* four */}
        <div
          className={styles["card"]}
          style={{ backgroundColor: darkMode && "#5e17eb" }}
        >
          <div className={styles["p-browser"]}>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>

          <div className={styles["content"]}>
            <h1>Tenzies Game</h1>
            <p>REACT + SASS </p>
            <p>Tenzies game for my friends </p>

            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/FrancoFrancis/tenzies-game"
                style={{ color: darkMode && "#fff" }}
              >
                <p>Code</p>
                <FontAwesomeIcon
                  icon={faCodeBranch}
                  height={"16"}
                  width={"16"}
                />
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://tenzies-game-flax.vercel.app/"
                style={{ color: darkMode && "#fff" }}
              >
                <p>Live Demo</p>
                <FontAwesomeIcon icon={faGlobe} height={"16"} width={"16"} />
              </a>
            </span>
          </div>
          <span className={styles["circle"]}></span>
        </div>
        {/* five*/}
        <div
          className={styles["card"]}
          style={{ backgroundColor: darkMode && "#e01111" }}
        >
          <div className={styles["p-browser"]}>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>

          <div className={styles["content"]}>
            <h1>Tesla Clone</h1>
            <p>HTML + CSS + JavaScript</p>
            <p> Tesla official website clone </p>

            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/FrancoFrancis/tesla-website-clone"
                style={{ color: darkMode && "#fff" }}
              >
                <p>Code</p>
                <FontAwesomeIcon
                  icon={faCodeBranch}
                  height={"16"}
                  width={"16"}
                />
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="linkedin.com"
                style={{ color: darkMode && "#fff" }}
              >
                <p>Live Demo</p>
                <FontAwesomeIcon icon={faGlobe} height={"16"} width={"16"} />
              </a>
            </span>
          </div>
          <span className={styles["circle"]}></span>
        </div>
        {/* six */}
        <div
          className={styles["card"]}
          style={{ backgroundColor: darkMode && "#333" }}
        >
          <div className={styles["p-browser"]}>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div>

          <div className={styles["content"]}>
            <h1>My Github</h1>

            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/FrancoFrancis"
                style={{ color: darkMode && "#fff" }}
              >
                <p>Go-to my GitHub for more...</p>
                <FontAwesomeIcon icon={faGithub} height={"16"} width={"16"} />
              </a>
            </span>
          </div>
          <span
            className={styles["circle"]}
            style={{ borderColor: darkMode && "white" }}
          ></span>
        </div>
      </div>
    </m.div>
  );
};

export default Projects;