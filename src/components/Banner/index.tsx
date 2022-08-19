import { useEffect } from "react";
import { useCycle } from "framer-motion";

import ImageHolder from "./ImageHolder";
import IconHolder from "./IconHolder";

import { gatherTown, Uiet } from "./scenes";

import "./banner.css";
import { Row } from "antd";
const SLIDE_CHANGE_TIME_MS = 4000;

const Banner = () => {
  const [currentScene, setCurrentScene] = useCycle(Uiet);

  useEffect(() => {
    const timeOut = setTimeout(setCurrentScene, SLIDE_CHANGE_TIME_MS);
    return () => clearTimeout(timeOut);
  }, [currentScene, setCurrentScene]);

  return (
    <>
      <Row align="middle" justify="center">
        <h1>Our Sponsors</h1>
      </Row>
      <div className="hero">
        <IconHolder icon={currentScene.icon} text={currentScene.text} />
        <ImageHolder img={currentScene.image1} className="animal-image animal-image__one" />
        <ImageHolder img={currentScene.image2} className="animal-image animal-image__two" />
        <ImageHolder img={currentScene.image3} className="animal-image animal-image__three" />
      </div>
    </>
  );
};

export default Banner;
