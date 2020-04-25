import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { NextPageContext } from "next";

interface MyDocumentProps extends DocumentProps {
  styleTags: string;
}

export default class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const sheet = new ServerStyleSheet();

    // Retrieve styles from components in the page
    const page = await renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    // Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
