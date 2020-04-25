import React, { Fragment } from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { brand, Brand } from "../theme";
import "../fonts.css";
import * as resetCSS from "reset-css";

export interface ITheme {
  brand: Brand;
}

export interface IThemeWrapper {
  theme: ITheme;
}

export const theme: ITheme = {
  brand,
};

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  ${resetCSS}
  body {
    background: ${(props) => props.theme.brand.colors.lightBlue};
    background: -webkit-linear-gradient(to right, ${(props) =>
      props.theme.brand.colors.lightBlue}, ${(props) =>
  props.theme.brand.colors.darkBlue});
    background: linear-gradient(to right, ${(props) =>
      props.theme.brand.colors.lightBlue}, ${(props) =>
  props.theme.brand.colors.darkBlue});
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
  }
  
  #__next {
    display: flex;
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100vw;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <Head>
          <title>Lake Effect | Alliance US Kel'Thuzad</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Fragment>
    );
  }
}
