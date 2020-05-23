import React, { Fragment } from "react";
import App from "next/app";
import Head from "next/head";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { brand, Brand } from "../theme";
import "../fonts.css";
import * as resetCSS from "reset-css";
import Header from "../components/Header/Header";

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
  
  #__next {
    display: flex;
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
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
          <StyledPageContainer>
            <Header />
          </StyledPageContainer>
          <Component {...pageProps} />
        </ThemeProvider>
      </Fragment>
    );
  }
}

export const StyledPageContainer = styled.div`
  margin: 0 auto;
  width: 1200px;
`;
