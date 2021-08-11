import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));
const CFP = () => {
    return <>
        <Container>
            <p>Call for paper</p>
        </Container>
    </>;
};

export default CFP;