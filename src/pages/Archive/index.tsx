import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));
const Archive = () => {
    return <>
        <Container>
            <p>Archive</p>
        </Container>
    </>;
};

export default Archive;