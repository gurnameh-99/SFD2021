import { lazy } from "react";
import { Row } from "antd";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import WebIcon from '@material-ui/icons/Language';
import BlockIcon from '@material-ui/icons/AccountTreeTwoTone';
import AiIcon from '@material-ui/icons/DeviceHub';
import QnaIcon from '@material-ui/icons/QuestionAnswer';
import SecIcon from '@material-ui/icons/Security';
import EngineerIcon from '@material-ui/icons/Code';
import UiIcon from '@material-ui/icons/DeviceUnknown';
import BoltIcon from '@material-ui/icons/FlashOn';
import FinishIcon from '@material-ui/icons/CheckCircle';
import 'react-vertical-timeline-component/style.min.css';

const Container = lazy(() => import("../../common/Container"));
const Schedule = () => {
    return <>
        <Container>
            <Row justify="center" style={{ paddingBlockEnd: '2em' }}>
                <h6>Schedule SFD 2021</h6>
            </Row>
            <Row justify="center" style={{ paddingBlockEnd: '2em' }}>
                <VerticalTimeline className="vertical-timeline-custom-line">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ color: '#fff', background: "rgb(250 188 61)" }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(250 188 61)' }}
                        date="18th September 2021"
                        iconClassName="vertical-timeline-element-icon bounce-in"
                        iconStyle={{ background: 'rgb(250 188 61)', color: '#fff' }}
                        icon={<WebIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Sonia Singla</h3>
                        <h4 className="vertical-timeline-element-subtitle">10:30 - 11:30 am IST</h4>
                        <p>
                            Browsers and open source in the web domain.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ color: '#fff', background: "rgb(231 231 231)" }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(231 231 231)' }}
                        date="18th September 2021"
                        iconStyle={{ background: 'rgb(250, 188, 61)', color: '#fff' }}
                        icon={<BlockIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Gokul Alex</h3>
                        <h4 className="vertical-timeline-element-subtitle">12:00 - 1:00 pm IST</h4>
                        <p>
                            Post Quantum Cryptography - Facets and Frontiers
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ color: '#fff', background: "rgb(231 231 231)" }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(231 231 231)' }}
                        date="18th September 2021"
                        iconStyle={{ background: 'rgb(250, 188, 61)', color: '#fff' }}
                        icon={<AiIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Zarreen Naowal Reza</h3>
                        <h4 className="vertical-timeline-element-subtitle">3:15 - 4:15 pm IST</h4>
                        <p>
                            Data Science, deep learning and the role of open source.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ color: '#fff', background: "rgb(231 231 231)" }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(231 231 231)' }}
                        date="18th September 2021"
                        iconStyle={{ background: 'rgb(250, 188, 61)', color: '#fff' }}
                        icon={<QnaIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Panel Discussion - Jivitesh Dhaliwal, Akshay Kumar, Pranav Kumar</h3>
                        <h4 className="vertical-timeline-element-subtitle">5:00 - 6:00 pm IST</h4>
                        <p>
                            A deep dive into open source.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ color: '#fff', background: "rgb(231 231 231)" }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(231 231 231)' }}
                        date="19th September 2021"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<SecIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Madhava Jay</h3>
                        <h4 className="vertical-timeline-element-subtitle">10:30 - 11:30 am IST</h4>
                        <p>
                            Open Source is your Destiny.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ color: '#fff', background: "rgb(231 231 231)" }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(231 231 231)' }}
                        date="19th September 2021"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<UiIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Adyasha Mohanty</h3>
                        <h4 className="vertical-timeline-element-subtitle">12:00 - 1:00 pm IST</h4>
                        <p>
                            User Experience, User Interface design and FOSS.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ color: '#fff', background: "rgb(231 231 231)" }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(231 231 231)' }}
                        date="19th September 2021"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<EngineerIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Apaar Kamal</h3>
                        <h4 className="vertical-timeline-element-subtitle">2:00 - 3:00 pm IST</h4>
                        <p>
                            SWE experience at google and FOSS in the insdustry.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ color: '#fff', background: "rgb(231 231 231)" }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(231 231 231)' }}
                        date="19th September 2021"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<BoltIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Lighting Talks - Madhav Gaba and Ritesh Aggarwal</h3>
                        <h4 className="vertical-timeline-element-subtitle">3:15 - 4:15 pm IST</h4>
                        <p>
                            GSOC, Competetive programming, Open Source to Corporate.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<FinishIcon />}
                    />
                </VerticalTimeline>
            </Row>
        </Container>
    </>;
};

export default Schedule;