import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
} from "./styles";
import SlideShow from "../../SlideShow";

const LeftContentBlock = ({
  icon,
  title,
  content,
  section,
  isCarousel=false,
  images,
  t,
  id,
}: ContentBlockProps) => {
  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            {isCarousel ? <SlideShow images={images}/>: <SvgIcon src={icon} width="100%" height="100%" />}
            
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <Row justify="start">
                {typeof section === "object" &&
                  section.map((item: any, id: number) => {
                    return (
                      <Col key={id} span={3} >
                        <a href={item.link} target="_blank" rel="noreferrer">
                          <SvgIcon src={item.icon} width="30px" height="30px" />
                        </a>
                      </Col>
                    );
                  })}
              </Row>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
