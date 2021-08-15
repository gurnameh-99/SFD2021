import { lazy } from "react";
import { Col, Row } from "antd";
import { CustomNavLinkSmall, Span } from "./styles";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";

const Container = lazy(() => import("../../common/Container"));
const NotFound404 = () => {
    return <>
        <Container>
            <Row justify="center" style={{ paddingBlockEnd: '2em' }}>
                <h6 style={{ alignItems: "center" }}>404 Page Not Found!</h6>
            </Row>
            <Row justify="center" style={{ paddingBlockEnd: '0em' }}>
                <Col>
                    <SvgIcon src={"404.svg"} width="100%" height={"100%"}/>
                </Col>
            </Row>
            <Row justify="center" style={{ paddingBlockEnd: '3em' }}>
                <CustomNavLinkSmall
                    style={{ width: "180px" }}
                    to="/">                   
                    <Span>
                        <Button color={'#40af92'}>{"Go back Home"}</Button>
                    </Span>
                </CustomNavLinkSmall>
            </Row>
        </Container>
    </>;
};

export default NotFound404;