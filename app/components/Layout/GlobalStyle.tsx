import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --cyan: hsl(176, 50%, 47%);
  --darkcyan: hsl(176, 72%, 28%);

  --black: hsl(0, 0%, 0%);
  --darkgray: hsl(0, 0%, 48%);
  --gray:hsl(0, 10%, 98%);

  --regular: 400;
  --medium: 500;
  --bold: 700;
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  font-size:14px;
  scroll-behavior:smooth;
}

html,
body {
  margin: 0 auto;
  max-width: 1440px;
  height: 100vh;
  font-family: commissioner, sans-serif;
  background:var(--gray);
}
img {
  max-width: 100%;
  height: auto;
}
a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyle;
