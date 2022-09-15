import { lazy } from "react";
import { Row } from "antd";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import WebIcon from "@material-ui/icons/Language";
import BlockIcon from "@material-ui/icons/AccountTreeTwoTone";
import AiIcon from "@material-ui/icons/DeviceHub";
import QnaIcon from "@material-ui/icons/QuestionAnswer";
import SecIcon from "@material-ui/icons/Security";
import EngineerIcon from "@material-ui/icons/Code";
import UiIcon from "@material-ui/icons/DeviceUnknown";
import BoltIcon from "@material-ui/icons/FlashOn";
import FinishIcon from "@material-ui/icons/CheckCircle";
import "react-vertical-timeline-component/style.min.css";

const Container = lazy(() => import("../../common/Container"));
const Schedule = () => {
  return (
    <>
      <Container>
        <Row justify="center" style={{ paddingBlockEnd: "2em" }}>
          <h6>Schedule SFD 2022</h6>
        </Row>
        <Row justify="center" style={{ paddingBlockEnd: "2em" }}>
          <VerticalTimeline className="vertical-timeline-custom-line">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ color: "#fff", background: "rgb(250 188 61)" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(250 188 61)" }}
              date="18th September 2022"
              iconClassName="vertical-timeline-element-icon bounce-in"
              iconStyle={{ background: "rgb(250 188 61)", color: "#fff" }}
              icon={<WebIcon />}
            >
              <h3 className="vertical-timeline-element-title">Pclub</h3>
              <h4 className="vertical-timeline-element-subtitle">11:00 am - 11:15 am IST</h4>
              <p>Introduction</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ color: "#fff", background: "rgb(231 231 231)" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(231 231 231)" }}
              date="17th September 2022"
              iconStyle={{ background: "rgb(250, 188, 61)", color: "#fff" }}
              icon={<BlockIcon />}
            >
              <h3 className="vertical-timeline-element-title">Pclub</h3>
              <h4 className="vertical-timeline-element-subtitle">11:15 - 11:45 am IST</h4>
              <p>Keynote Presentation</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ color: "#fff", background: "rgb(231 231 231)" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(231 231 231)" }}
              date="17th September 2022"
              iconStyle={{ background: "rgb(250, 188, 61)", color: "#fff" }}
              icon={<AiIcon />}
            >
              <h3 className="vertical-timeline-element-title">Pclub</h3>
              <h4 className="vertical-timeline-element-subtitle">11:45 - 12:00 noon IST</h4>
              <p>Networking with audience(break)</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ color: "#fff", background: "rgb(231 231 231)" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(231 231 231)" }}
              date="17th September 2022"
              iconStyle={{ background: "rgb(250, 188, 61)", color: "#fff" }}
              icon={<QnaIcon />}
            >
              <h3 className="vertical-timeline-element-title">Sandeep Singh</h3>
              <h4 className="vertical-timeline-element-subtitle">12:00 - 1:00 pm IST</h4>
              <p>Koli Network</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ color: "#fff", background: "rgb(231 231 231)" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(231 231 231)" }}
              date="17th September 2022"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<SecIcon />}
            >
              <h3 className="vertical-timeline-element-title">Pclub</h3>
              <h4 className="vertical-timeline-element-subtitle">1:00 - 1:15 pm IST</h4>
              <p>GradRight Workshop</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ color: "#fff", background: "rgb(231 231 231)" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(231 231 231)" }}
              date="17th September 2022"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<UiIcon />}
            >
              <h3 className="vertical-timeline-element-title">Pclub</h3>
              <h4 className="vertical-timeline-element-subtitle">1:15 - 2:00 pm IST</h4>
              <p>Panel Discussion</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ color: "#fff", background: "rgb(231 231 231)" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(231 231 231)" }}
              date="17th September 2022"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<EngineerIcon />}
            >
              <h3 className="vertical-timeline-element-title">Pclub</h3>
              <h4 className="vertical-timeline-element-subtitle">2:00 - 3:00 pm IST</h4>
              <p>Lunch</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ color: "#fff", background: "rgb(231 231 231)" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(231 231 231)" }}
              date="17th September 2022"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<BoltIcon />}
            >
              <h3 className="vertical-timeline-element-title">Karan Balkar</h3>
              <h4 className="vertical-timeline-element-subtitle">3:00 - 4:00 pm IST</h4>
              <p>Intergrating Google Assistant for Continuous Integration (CI) </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ color: "#fff", background: "rgb(231 231 231)" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(231 231 231)" }}
              date="17th September 2022"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<BoltIcon />}
            >
              <h3 className="vertical-timeline-element-title">Pclub</h3>
              <h4 className="vertical-timeline-element-subtitle">5:00 - 5:00 pm IST</h4>
              <p>Lightning Talks </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ color: "#fff", background: "rgb(231 231 231)" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(231 231 231)" }}
              date="18th September 2022"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<BoltIcon />}
            >
              <h3 className="vertical-timeline-element-title">Pclub</h3>
              <h4 className="vertical-timeline-element-subtitle">11:00 - 11:15 am IST</h4>
              <p>Introduction </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ color: "#fff", background: "rgb(231 231 231)" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(231 231 231)" }}
              date="18th September 2022"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<BoltIcon />}
            >
              <h3 className="vertical-timeline-element-title">Pclub</h3>
              <h4 className="vertical-timeline-element-subtitle">11:15 - 11:45 am IST</h4>
              <p> Panel Discussion II</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ color: "#fff", background: "rgb(231 231 231)" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(231 231 231)" }}
              date="18th September 2022"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<BoltIcon />}
            >
              <h3 className="vertical-timeline-element-title">Pclub</h3>
              <h4 className="vertical-timeline-element-subtitle">11:45 - 12:00 am IST</h4>
              <p> Guess the UI/UX</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ color: "#fff", background: "rgb(231 231 231)" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(231 231 231)" }}
              date="18th September 2022"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<BoltIcon />}
            >
              <h3 className="vertical-timeline-element-title">Karthik Ohri</h3>
              <h4 className="vertical-timeline-element-subtitle">12:00 - 1:00 pm IST</h4>
              <p>Metabrainz</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ color: "#fff", background: "rgb(231 231 231)" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(231 231 231)" }}
              date="18th September 2022"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<BoltIcon />}
            >
              <h3 className="vertical-timeline-element-title">Pclub</h3>
              <h4 className="vertical-timeline-element-subtitle">1:00 - 1:15 pm IST</h4>
              <p>Question of the hour</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ color: "#fff", background: "rgb(231 231 231)" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(231 231 231)" }}
              date="18th September 2022"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<BoltIcon />}
            >
              <h3 className="vertical-timeline-element-title">Pclub</h3>
              <h4 className="vertical-timeline-element-subtitle">1:15 - 2:00 pm IST</h4>
              <p>Eduwal Workshop</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ color: "#fff", background: "rgb(231 231 231)" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(231 231 231)" }}
              date="18th September 2022"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<BoltIcon />}
            >
              <h3 className="vertical-timeline-element-title">Lunch</h3>
              <h4 className="vertical-timeline-element-subtitle">2:00 - 3:00 pm IST</h4>
              <p>Lunch</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ color: "#fff", background: "rgb(231 231 231)" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(231 231 231)" }}
              date="18th September 2022"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<BoltIcon />}
            >
              <h3 className="vertical-timeline-element-title">Umang Kaira</h3>
              <h4 className="vertical-timeline-element-subtitle">3:00 - 4:00 pm IST</h4>
              <p>Gadot & Octaflyte</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ color: "#fff", background: "rgb(231 231 231)" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(231 231 231)" }}
              date="18th September 2022"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<BoltIcon />}
            >
              <h3 className="vertical-timeline-element-title">Pclub</h3>
              <h4 className="vertical-timeline-element-subtitle">4:00 - 5:00 pm IST</h4>
              <p>Panel Discussion III</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon={<FinishIcon />}
            />
          </VerticalTimeline>
        </Row>
      </Container>
    </>
  );
};

export default Schedule;
