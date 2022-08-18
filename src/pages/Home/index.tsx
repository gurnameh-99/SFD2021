import { lazy, useState } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
// import SpeakersContent from "../../content/SpeakersContent.json";
import ModalVideo from "react-modal-video";
import Banner from "../../components/Banner";
// import SpeakerBlock from "../../components/speakers";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  const [videoShow, setVideoShow] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={videoShow}
        videoId="SpeDK1TPbew"
        onClose={() => setVideoShow(false)}
      />
      <Container>
        <ScrollToTop />
        <ContentBlock
          type="right"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon="Research.svg"
          id="intro"
        />
        <MiddleBlock
          title={MiddleBlockContent.title}
          content={MiddleBlockContent.text}
          button={MiddleBlockContent.button.title}
          setModalShow={setVideoShow}
          id="explore"
        />
        <ContentBlock
          type="right"
          title={MissionContent.title}
          content={MissionContent.text}
          icon="Programming 1.svg"
          id="mission"
        />
        {/* <SpeakerBlock items={SpeakersContent}/> */}
        <ContentBlock
          type="left"
          title={AboutContent.title}
          content={AboutContent.text}
          section={AboutContent.section}
          isCarousel={true}
          images={AboutContent.images}
          icon="graphs.svg"
          id="about"
        />

        <Banner />
      </Container>
    </>
  );
};

export default Home;
