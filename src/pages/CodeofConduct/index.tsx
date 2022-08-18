import { lazy } from "react";
import { Col, Row } from "antd";

const Container = lazy(() => import("../../common/Container"));

const CodeOfConduct = () => (
  <Container>
    <Row justify="center" style={{ paddingBlockEnd: "1em" }}>
      <h6>Code of Conduct</h6>
    </Row>
    <Row justify="start" style={{ paddingBlockEnd: "2em" }}>
      <Col>
        <p>
          Software Freedom Day is dedicated to providing a harassment-free experience for
          everyone, regardless of gender, sexual orientation, gender identity, disability,
          physical appearance, body size, race, or religion. We invite attendees to come to SFD
          in a spirit of curiosity, friendliness, open-mindedness, and respect. Any kind of
          harassment will not be tolerated.
        </p>
        <br />
        <p>At the conference venue, you agree to:</p>
        <ul>
          <li>
            Be kind and sensitive to the people around you and respect the boundaries of other
            attendees.
          </li>
          <li>
            Attempt to resolve differences of opinions peacefully and appropriately for a
            professional environment.
          </li>
          <li>
            Listen with empathy when someone has a different perspective and give suggestions
            for improvement.
          </li>
        </ul>
        <br />
        <p>
          This Code of Conduct applies to the venue of SFD 2022 Conference, pre-event and
          post-event informal gathering, and all events organized by the organizing committee
          of Software Freedom Day.
        </p>
        <p>
          If you are being harassed, notice that someone else is being harassed, or have any
          other concerns, please contact someone from the organizing committee. Thank you for
          helping make this a welcoming, friendly event for all.
        </p>
      </Col>
    </Row>
  </Container>
);

export default CodeOfConduct;
