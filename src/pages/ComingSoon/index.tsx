import { lazy } from "react";
import { Col, Row } from "antd";
import { CustomNavLinkSmall, Span, SubHeading } from "./styles";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";

const Container = lazy(() => import("../../common/Container"));
const ComingSoon = () => {
  return (
    <>
      <Container>
        <Row
          style={{ paddingBlockEnd: "2em", flexDirection: "column", alignContent: "center" }}
        >
          <h6 style={{ alignItems: "center" }}>Schedule for SFD 2022 </h6>
          <SubHeading>is Coming Soon . Stay Tuned ... </SubHeading>
        </Row>
        <Row justify="center" style={{ paddingBlockEnd: "0em" }}>
          <Col style={{ width: "500px", height: "400px" }}>
            <SvgIcon src={"building-website.svg"} width="100%" height="100%" />
          </Col>
        </Row>
        <Row justify="center" style={{ paddingBlockEnd: "3em" }}>
          <CustomNavLinkSmall style={{ width: "180px" }} to="/">
            <Span>
              <Button color={"#40af92"}>{"Go back Home"}</Button>
            </Span>
          </CustomNavLinkSmall>
        </Row>
      </Container>
    </>
  );
};

export default ComingSoon;
