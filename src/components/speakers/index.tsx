import { Card, Col, Row } from 'antd';
import { Fade } from "react-awesome-reveal";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import {
  LeftContentSection,
} from "./styles";
import "../../styles/hideScrollbar.css"
import { useContext } from 'react';
import { CaretLeftFilled, CaretRightFilled, LinkOutlined } from '@ant-design/icons';
const { Meta } = Card;
// type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const SpeakerBlock = (items: any) => {

  function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext)

    return (
      <Col style={{ alignContent: 'center', justifyContent: 'center', alignSelf: 'center', minHeight: "5rem" }}>
        <button disabled={isFirstItemVisible} onClick={() => scrollPrev()} style={{ border: 0, borderRadius: 50, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginInline: "1rem", marginBlock: "1rem", backgroundColor: "#fff", blockSize: "10rem" }}>

          <CaretLeftFilled style={{ color: "#40af92" }} size={50} />
        </button>
      </Col>
    );
  }

  function RightArrow() {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext)

    return (
      <Col style={{ alignContent: 'center', justifyContent: 'center', alignSelf: 'center', minHeight: "5rem" }}>

        <button disabled={isLastItemVisible} onClick={() => scrollNext()} style={{ border: 0, borderRadius: 10, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", marginInline: "1rem", marginBlock: "1rem", backgroundColor: "#fff", blockSize: "10rem" }}>
          <CaretRightFilled style={{ color: "#40af92" }} size={50} />
        </button>
      </Col>
    );
  }

  function Cardm({
    onClick,
    selected,
    itemId,
    item
  }:
    any
  ) {
    // const visibility = useContext(VisibilityContext)
    return (
      <div style={{ padding: "1.6rem" }}>

        <Card hoverable cover={<img alt={item.name} src={item.img} height={350} style={{ objectFit: "cover" }} />} style={{ width: 350 }} key={itemId} actions={[
                <LinkOutlined onClick={() => window.open(item.link, "_blank")} />,
            ]}>
          <Meta title={item.name} description={item.desc} style={{ height: 240 }} />
        </Card>
      </div>
    );
  }


  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify={"center"}>
          <h6>Speakers</h6>
        </Row>
        <div style={{ overflow: "hidden" }}>
          <ScrollMenu
            LeftArrow={window.innerWidth >= 605 ? LeftArrow : undefined}
            RightArrow={window.innerWidth >= 605 ? RightArrow : undefined}
          >
            {items.items.map((item: any, id: number) => (
              <Cardm item={item} itemId={id} />
            ))}
          </ScrollMenu>
        </div>
      </Fade>
    </LeftContentSection>
  );
};


export default SpeakerBlock;