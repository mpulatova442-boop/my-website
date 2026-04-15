import { Helmet } from 'react-helmet-async';

const siteName = 'Munisa Polatova';
const fallbackSiteUrl = 'https://munisapolatova.dev';

export function SEO({ description, pathname = '', title }) {
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Frontend Developer Portfolio`;
  const canonicalBase = typeof window !== 'undefined' ? window.location.origin : fallbackSiteUrl;
  const canonicalUrl = `${canonicalBase}${pathname}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta content={description} name="description" />
      <meta content={fullTitle} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={canonicalUrl} property="og:url" />
      <meta content="website" property="og:type" />
      <meta content={fullTitle} name="twitter:title" />
      <meta content={description} name="twitter:description" />
      <link href={canonicalUrl} rel="canonical" />
    </Helmet>
  );
}
