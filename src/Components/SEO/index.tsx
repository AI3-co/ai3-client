import { useTranslation } from 'next-i18next';
import Head from 'next/head';

import { DEVELOPER_DAO_WEBSITE } from '../../utils';

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
};

const SEO = ({
  title = 'Ai3.co',
  description = 'Ai and Web3',
  image = `https://github.com/AI3-co/ai3-client/blob/main/public/logo_light.png`,
}: SEOProps) => {
  const { t } = useTranslation();

  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="logo_light.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />

      {/* Primary Meta Tags */}
      <title>{t(title)}</title>
      <meta name="title" content={t(title)} />
      <meta name="description" content={t(description)} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={DEVELOPER_DAO_WEBSITE} />
      <meta property="og:title" content={t(title)} />
      <meta property="og:description" content={t(description)} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={DEVELOPER_DAO_WEBSITE} />
      <meta property="twitter:title" content={t(title!)} />
      <meta property="twitter:description" content={t(description)} />
      <meta property="twitter:image" content={image} />

      {/* Favicon Images */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="logo_dark.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="logo_dark.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="logo_dark.png"
      />
      <link rel="manifest" href="site.webmanifest" />
      <link rel="mask-icon" href="safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#ffffff" />

      {/*
       site.webmanifest provides metadata used when your web app is installed on a
       user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
       */}
      <link rel="manifest" href="site.webmanifest" />
    </Head>
  );
};

export default SEO;
