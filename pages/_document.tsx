import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

const APP_NAME = 'next-pwa example'
const APP_DESCRIPTION = 'This is an example of using next-pwa plugin'

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head>
          <link rel='shortcut icon' href='/static/favicon.ico' />
          <link
            href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;1,200;1,300;1,400;1,600;1,700;1,800&display=swap'
            rel='stylesheet'
          />
          <link href='//vjs.zencdn.net/7.10.2/video-js.css' rel='stylesheet' />
          <meta name='application-name' content={APP_NAME} />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta name='apple-mobile-web-app-title' content={APP_NAME} />
          <meta name='description' content={APP_DESCRIPTION} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#FFFFFF' />
          {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
          {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}

          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/icons/apple-touch-icon.png'
          />
          <link rel='manifest' href='/manifest.json' />
          <link rel='shortcut icon' href='/icons/favicon.ico' />
          <style>{`
            html, body, #__next {
              height: 100%;
            }
            #__next {
              margin: 0 auto;
            }
            h1 {
              text-align: center;
            }
            `}</style>
          {/*<title>Work Reels</title>*/}
        </Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
            `,
          }}
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
