import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    background-color:black;
  }
  button {
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
}
`;

export default GlobalStyle;