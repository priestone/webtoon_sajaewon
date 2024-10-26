import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GolobalStyled = createGlobalStyle`
${reset}

a{
    color:black;
    text-decoration:none;
}
`;
