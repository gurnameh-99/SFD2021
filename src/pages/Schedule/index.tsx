import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));
const Schedule = () => {
    return <>
        <Container>
            <p>Schedule</p>
        </Container>
    </>;
};

export default Schedule;