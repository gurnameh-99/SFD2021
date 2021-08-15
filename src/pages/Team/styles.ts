import styled from "styled-components";
import { Row } from "antd";

export const TeamRow = styled(Row)`
    padding-inline: 6em;
    justify-content: space-around;
    padding-block-end: 2em;
  @media only screen and (max-width: 1024px) {
    padding-inline: 4em;

  }

  @media only screen and (max-width: 768px) {
    padding-inline: 5em;
  }

  @media only screen and (max-width: 414px) {
    padding-inline: 0em;
  }
`;
