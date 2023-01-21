import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
*{
    * {
    box-sizing: border-box;
      }
    body{
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        line-height: 1.5;
        margin:0;
        padding:0;
        color: ${(props) => props.theme.colors.font};
        background-color: ${(props) => props.theme.colors.background};
      }

      @media only screen and (max-width: 768px) {
        body {
          font-size: 12px;
        }
      }

      @media only screen and (max-width: 576px) {
        body {
          font-size: 10px;
        }
      }
    transition-duration: 500ms;

    h1 {
      font-size: x-large;
    }
}
`;
export default GlobalStyle;
