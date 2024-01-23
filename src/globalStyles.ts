import { createGlobalStyle } from 'styled-components';

export const theme = {
    bpExtraSmall: '36rem', // 576px
    bpSmall: '48em', // 768px
    bpSM: '62rem', // 992px
    bpMedium: '64em', // 1024px
    bpLarge: '85.375em', // 1366px
    bpXlarge: '120em', // 1920px
    bpXxlarge: '160em', // 2560px

    primaryColor: '#f44653',
    primaryColorDark: '#c1272d',
    secondaryColor: '#23263A',
    tertiaryColor: '#212437',
    whiteColor: '#fff',
};

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body { 
    background: ${theme.secondaryColor};
    font-family: 'Open Sans', sans-serif;
}

p{
    color: ${theme.whiteColor};
    font-size: 1rem;
    padding: .5rem 0;
    font-weight: 300;
}

h1, h2, h3, h4, h5, h6 {
    color: ${theme.whiteColor};
}

button, input, textarea {
    font-family: 'Open Sans', sans-serif;
    border: none;
    outline: none;
    border-radius: 3px;
    font-weight: 300;
}


button{
  color: ${theme.whiteColor};
  background: #ff4a57;
  cursor: pointer;
  height: 3rem;
  margin: 1rem 0px;
  width: 8rem;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background: #872c33;
    transition: 0.3s;
  }
}

.title_section {
  color: ${theme.primaryColor};
  font-size: 2rem;
  font-weight: bold;
  width: fit-content;
  padding: 2rem 0;

  &::after {
    content: "";
    display: block;
    background-color: ${theme.primaryColor};
    height: 3px;
    width: 60%;
  }
}

.icon_size{
  width: 2rem;
  height: 2rem;
}
`;
