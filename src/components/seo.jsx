import Head from 'next/head';

function SEO() {
  return (
    <Head>
      <title>Anna Dahlia Photography</title>
      <meta name="description" content="Photography portfolio website" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="apple-mobile-web-app-title" content="AD Photos" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    </Head>
  );
}

export default SEO;
