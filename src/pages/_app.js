import "../globals.scss";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#86FF00" />
        <meta
          name="description"
          content="WOW Sport - Your Ultimate Sports Companion"
        />
        <title>WOW Sport</title>

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* PWA primary color */}
        <meta name="theme-color" content="#86FF00" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="WOW Sport" />
        <meta
          property="og:description"
          content="WOW Sport - Your Ultimate Sports Companion"
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="apple-itunes-app" content="app-id=<ITUNES_ID>" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WOW Sport" />
        <meta
          name="twitter:description"
          content="WOW Sport - Your Ultimate Sports Companion"
        />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
