import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import baseTheme from 'themes/base.theme';
import { getThemeStyles } from 'themes/theme.utils';

const data = [] as { key: string; value: string }[];
Object.keys(baseTheme);
const variables = getThemeStyles(baseTheme);

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon-192x192.png" />

          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#fff" />
          <style>
            <>
              {`:root \{`}
              {variables.map((data, index) => (
                <React.Fragment key={index}>
                  {data.key}: {data.value};
                </React.Fragment>
              ))}
              {`}`}
            </>
          </style>
        </Head>
        <body className="root font-sans font-body bg-cool-gray-100 dark:bg-dark-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
