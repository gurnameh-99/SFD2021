import { lazy } from "react";
import { Row } from "antd";
import Snake from "snake-game-react";

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
            <Row justify="center" style={{ paddingBlockEnd: '2em' }}>
                <Snake
                    color1="#025839"
                    color2="#05de90"
                    backgroundColor="#ebebeb"
                />
            </Row>

        </Container>
    </>;
};

export default Schedule;