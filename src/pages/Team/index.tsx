import { lazy } from "react";
import { Row, Avatar, Col } from "antd";
import { TeamRow } from "./styles";

const Container = lazy(() => import("../../common/Container"));

const Team = (() => {
    return (
        <Container>
            <Row justify="center" style={{ paddingBlockEnd: '2em' }}>
                <h6>The Team</h6>
            </Row>
            <Row justify="center" style={{ paddingBlockEnd: '2em' }}>
                <p>The ones who make things work under the hood 👨🛠📋</p>
            </Row>
            <TeamRow>
                <Col>
                    <Avatar size={150} src="/img/team/Archit Uniyal.jpg" style={{ marginInline: "16px" }} />
                    <Row justify="center" style={{ alignItems: 'center', alignContent: 'center', paddingBlock: '0.5em' }}>
                        <p style={{ fontWeight: 'bold' }}>Archit Uniyal</p>
                    </Row>
                </Col>
                <Col>
                    <Avatar size={150} src="/img/team/Kshitij Saluja.jpeg" style={{ marginInline: "16px" }} />
                    <Row justify="center" style={{ alignItems: 'center', alignContent: 'center', paddingBlock: '0.5em' }}>
                        <p style={{ fontWeight: 'bold' }}>Kshitij Saluja</p>
                    </Row>
                </Col>
                <Col>
                    <Avatar size={150} src="/img/team/Gurunameh.jpeg" style={{ marginInline: "16px" }} />
                    <Row justify="center" style={{ alignItems: 'center', alignContent: 'center', paddingBlock: '0.5em' }}>
                        <p style={{ fontWeight: 'bold' }}>Gurunameh Singh</p>
                    </Row>
                </Col>
                <Col>
                    <Avatar size={150} src="/img/team/Tarun Jain.jpg" style={{ marginInline: "16px" }} />
                    <Row justify="center" style={{ alignItems: 'center', alignContent: 'center', paddingBlock: '0.5em' }}>
                        <p style={{ fontWeight: 'bold' }}>Tarun Jain</p>
                    </Row>
                </Col>
            </TeamRow>
            <TeamRow >
                <Col>
                    <Avatar size={150} src="/img/team/Harbans Singh.jpg" style={{ marginInline: "16px" }} />
                    <Row justify="center" style={{ alignItems: 'center', alignContent: 'center', paddingBlock: '0.5em' }}>
                        <p style={{ fontWeight: 'bold' }}>Harbans Singh</p>
                    </Row>
                </Col>
                <Col>
                    <Avatar size={150} src="/img/team/Aryan basu.jpg" style={{ marginInline: "16px" }} />
                    <Row justify="center" style={{ alignItems: 'center', alignContent: 'center', paddingBlock: '0.5em' }}>
                        <p style={{ fontWeight: 'bold' }}>Aryan basu</p>
                    </Row>
                </Col>
                <Col>
                    <Avatar size={150} src="/img/team/_Aditi  Shandyal.jpg" style={{ marginInline: "16px" }} />
                    <Row justify="center" style={{ alignItems: 'center', alignContent: 'center', paddingBlock: '0.5em' }}>
                        <p style={{ fontWeight: 'bold' }}>Aditi Shandyal</p>
                    </Row>
                </Col>
                <Col>
                    <Avatar size={150} src="/img/team/Kanishk Tyagi.jpg" style={{ marginInline: "16px" }} />
                    <Row justify="center" style={{ alignItems: 'center', alignContent: 'center', paddingBlock: '0.5em' }}>
                        <p style={{ fontWeight: 'bold' }}>Kanishk Tyagi</p>
                    </Row>
                </Col>
            </TeamRow>
            <TeamRow >
                <Col>
                    <Avatar size={150} src="/img/team/Gaurika.jpeg" style={{ marginInline: "16px" }} />
                    <Row justify="center" style={{ alignItems: 'center', alignContent: 'center', paddingBlock: '0.5em' }}>
                        <p style={{ fontWeight: 'bold' }}>Gaurika</p>
                    </Row>
                </Col>
                <Col>
                    <Avatar size={150} src="/img/team/Ritvik Gupta.jpg" style={{ marginInline: "16px" }} />
                    <Row justify="center" style={{ alignItems: 'center', alignContent: 'center', paddingBlock: '0.5em' }}>
                        <p style={{ fontWeight: 'bold' }}>Ritvik Gupta</p>
                    </Row>
                </Col>
                <Col>
                    <Avatar size={150} src="/img/team/Jatin Jain.jpg" style={{ marginInline: "16px" }} />
                    <Row justify="center" style={{ alignItems: 'center', alignContent: 'center', paddingBlock: '0.5em' }}>
                        <p style={{ fontWeight: 'bold' }}>Jatin Jain</p>
                    </Row>
                </Col>
                {/* <Col>
                    <Avatar size={150} src="/img/team/Kanishk Tyagi.jpg" style={{ marginInline: "16px" }} />
                    <Row justify="center" style={{ alignItems: 'center', alignContent: 'center', paddingBlock: '0.5em' }}>
                        <p style={{ fontWeight: 'bold' }}>Kanishk Tyagi</p>
                    </Row>
                </Col> */}
            </TeamRow>
        </Container>
    );
});

export default Team;