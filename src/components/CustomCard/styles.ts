import styled from "styled-components";
import {Col} from "antd";

export const CustomCol = styled(Col)`
  padding: 0em ;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    padding: 0.5em ;
  }

  @media only screen and (max-width: 768px) {
    padding: 1em ;
  }

  @media only screen and (max-width: 414px) {
    padding: 0.5em;
  }
`;