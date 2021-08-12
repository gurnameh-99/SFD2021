import { lazy } from "react";
import { Row } from "antd";

const Container = lazy(() => import("../../common/Container"));
const Schedule = () => {
    return <>
        <Container>
            <Row justify="center" style={{ paddingBlockEnd: '2em' }}>
                <h6>Schedule Will be out soon!</h6>
            </Row>
            <Row justify="center" style={{ paddingBlockEnd: '2em' }}>
                <p>We are as eager as you are but some things are worth the wait 😊</p>
            </Row>
        </Container>
    </>;
};

export default Schedule;