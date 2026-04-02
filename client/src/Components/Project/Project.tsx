import "./Project.scss";
import "../../styles/_link.scss";
import { useAnimated } from "../UseHook/useAnimaned";
import Briaton from "./Projects/Brianot";
import Crypto from "./Projects/Crypto";
import Monster from "./Projects/Monster";
import Stage from "./Projects/Stage";

export const Project = () => {
  useAnimated(".project__card");

  return (
    <>
      <section className="project-sect" id="project">
        <div className="project">
          <div className="container">
            <div className="project__wrapper">
              <h2 className="project__title">My Project</h2>
              <div className="project__cards">
                <Stage/>
                <Monster/>
                <Briaton/>
                <Crypto/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
