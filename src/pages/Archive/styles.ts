import styled from "styled-components";
import {Row} from "antd";

export const CustomRow = styled(Row)`
  padding: 0em 5em 2em 5em;

  @media only screen and (max-width: 1024px) {
    padding: 4em ;
  }

  @media only screen and (max-width: 768px) {
    padding: 3em ;
  }

  @media only screen and (max-width: 414px) {
    padding: 0.5em;
  }
`;