import { lazy } from "react";
import { Col, Row } from "antd";
import { CustomNavLinkSmall, Span } from "./styles";
import { Button } from "../../common/Button";

const Container = lazy(() => import("../../common/Container"));
const CFP = () => {
  return (
    <>
      <Container>
        <Row justify="center" style={{ paddingBlockEnd: "0em" }}>
          <h6 style={{ alignItems: "center" }}>Welcome to SFD 2022 CFP</h6>
        </Row>
        <hr
          style={{
            color: "grey",
            backgroundColor: "grey",
            height: 5,
            borderRadius: "0.5em",
          }}
        />
        <Row justify="start" style={{ paddingBlockStart: "2em" }}>
          <Col>
            <h3>What is Software Freedom Day?</h3>
            <p>
              Software Freedom Day is an event held all across the world to celebrate the usage
              of Free and Open Source Software (FOSS). The event aims to sensitize students
              about the virtues of Open Source Software and encourages it usage.
            </p>
          </Col>
        </Row>
        <Row justify="start">
          <Col>
            <h3>Who Should Submit a Proposal?</h3>
            <p>
              We value any proposal you may submit. As it is our goal to put SFD on the map
              when it comes to quality, we will consider any talks and/or workshop proposals
              submitted by experts and qualified professionals. It does not matter to us if you
              are new to the stage or a veteran presenter – if you know that you have something
              to contribute to SFD 2022 we would love to hear from you.
            </p>
          </Col>
        </Row>
        <Row justify="start">
          <Col>
            <h3>How to write a proposal?</h3>
            <p>
              In your proposal, include the topic of the talk, explain in a short sentence what
              the audience will learn and include estimated duration of the talk. Tell us why
              you think that the chosen talk or workshop is insightful and helpful to the
              audience. Explain how you will present the subject and enlighten the audience so
              that the subject is well received. Who from the audience will benefit from your
              presentation or workshop? Is knowledge in specific areas needed in advance to
              follow along.
            </p>
          </Col>
        </Row>
        <Row justify="start" style={{ paddingBlockEnd: "2em" }}>
          <Col>
            <h3>Guidelines</h3>
            <ul>
              <li>
                No promotion for products or companies, no call for 'we are hiring' (but you
                may name your employer)
              </li>
              <li>
                Talks and presentations can vary from 30 minutes minimum to 45 minutes maximum.
                They can be anything related to Open Source Software.
              </li>
              <li>
                If you are planning a workshop then please ensure you stipulate estimated
                duration of the workshop in your proposal as well as provide us with a sample
                material that you will be using.
              </li>
              <li>
                lightning talks are 10 minutes talks and are useful if you feel that a
                particular subject matter warrants a closer look but does not require a full on
                presentation.
              </li>
              <li>
                We encourage a wide range of topic spanning from development, business solution
                and personal experience among others. Please let us know in advance what media
                are you planning to use and if you have any special / out of ordinary
                requirements.
              </li>
            </ul>
          </Col>
        </Row>
        <Row justify="center" style={{ paddingBlockEnd: "3em" }}>
          <CustomNavLinkSmall
            style={{ width: "180px" }}
            onClick={() => window.open("https://www.papercall.io/pclub-sfd-2022", "_blank")}
          >
            <Span>
              <Button color={"#40af92"}>{"Submit Proposal"}</Button>
            </Span>
          </CustomNavLinkSmall>
        </Row>
      </Container>
    </>
  );
};

export default CFP;
