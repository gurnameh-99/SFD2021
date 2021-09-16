import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
        background-image: url("/img/background/homepage-b6f21314d61304ebbfb121c26cf74975.png");
        background-size: cover;
        background-repeat: no-repeat;
        height: 100%;
        @media only screen and (max-width: 1600px) {
            background-size: auto;
        }
    }

    a:hover {
        color: #18216d;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h5,
    h6 {
        font-family: 'Motiva Sans Bold', serif;
        color: #181b31;
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #18216d;
        font-size: 21px;        
        line-height: 1.41;
        white-space: pre-line;
    }
    
    li {
        font-size: 21px;
    }

    h1 {
        font-weight: 600;
    }

    h3 {
        font-family: 'Motiva Sans Bold', serif;
        color: #181b31;
        font-size: 36px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 24px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 24px;
        }
    }

    a {
        text-decoration: none;
        outline: none;
        color: #53b79d;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }

    .my-modal {
        width: 90vw;    /* Occupy the 90% of the screen width */
        max-width: 90vw;
        height: 90vh;
        max-height: 90vh;
    }

    .view-container {
        width: 100%;
        height: 100%;
    }

    .ant-carousel .slick-prev,
    .ant-carousel .slick-next,
    .ant-carousel .slick-prev:hover,
    .ant-carousel .slick-next:hover,
    .ant-carousel .slick-prev:focus,
    .ant-carousel .slick-next:focus {
        font-size: 20px;
        color: currentColor;
    }

    img {
        object-fit: fill;
    }

    .google-map-code {
        width: 400px;
        height: 300px;
        @media only screen and (max-width: 890px) {
            font-size: 24px;
          }
        @media only screen and (max-width: 414px) {
            width: 300px;
            height: 200px;
          }
    }

    button:disabled {
        opacity: 0.5;
    }

    .vertical-timeline.vertical-timeline-custom-line::before {
        background: #0c7578a3;
        border-radius: 50%;
      }

      .vertical-timeline-element-content {
        color: black;
    }
    
    .vertical-timeline-element--work .vertical-timeline-element-content {
        border-top: 3px solid #fabc3d;
    }
    
    .vertical-timeline-element--education .vertical-timeline-element-content {
        border-top: 3px solid #e91e63;
    }
    
    .vertical-timeline-element-date {
      color: #333;
    }
    
    /* Icon container's border */
    .vertical-timeline.vertical-timeline-custom-line .vertical-timeline-element--work .vertical-timeline-element-icon {
      box-shadow: 0 0 0 4px #b67a00, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
    }
    
    .vertical-timeline.vertical-timeline-custom-line .vertical-timeline-element--education .vertical-timeline-element-icon {
      box-shadow: 0 0 0 4px #c2185b, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
    }
    
      
`;
