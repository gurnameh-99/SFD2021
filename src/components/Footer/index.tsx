import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Empty,
  FooterContainer,
  Language,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <Col span={3}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          key={src}
          aria-label={src}
        >
          <SvgIcon src={src} width="25px" height="25px" />
        </a>
      </Col>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
              <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Empty />
                <Language>{t("Contact")}</Language>
                <Para>
                  {t(`Do you have any question? Feel free to reach out to us at sfdpulug@gmail.com or pclubuiet@gmail.com`)}
                </Para>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Empty />
                <Title>{t("Policy")}</Title>
                <Large to="/CodeofConduct" left="true">
                  {t("Code of Conduct")}
                </Large>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Empty />
                <Title>{t("Resources")}</Title>
                <a href="https://wiki.softwarefreedomday.org/" target="_blank" rel="noreferrer">
                  {t("SFD Wiki")}
                </a>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <Empty />
                <Language>{t("Address")}</Language>
                <Para>University Institute of Engineering and Technology</Para>
                <Para>Panjab University</Para>
                <Para>Chandigarh, IN</Para>
              </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "0rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="Sfd Logo.svg"
                  aria-label="homepage"
                  width="300px"
                  height="200px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://www.facebook.com/sfdpu"
                src="facebook.svg"
              />
              <SocialLink
                href="https://twitter.com/sfdpu"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.instagram.com/sfdpu/"
                src="instagram.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/groups/2587736/"
                src="linkedin.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
