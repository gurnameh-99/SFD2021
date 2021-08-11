import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Zoom } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: any;
  setModalShow: any;
  id: string;
}

const MiddleBlock = ({ title, content, button, t , setModalShow, id}: MiddleBlockProps) => {

  // const scrollTo = (id: string) => {
  //   const element = document.getElementById(id) as HTMLDivElement;
  //   element.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };
  return (
    <MiddleBlockSection>
      <Zoom>
        <Row justify="center" align="middle" id={id}>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {button && (
                <Button name="submit" onClick={() => setModalShow(true)} color={"#40af92"}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Zoom>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
