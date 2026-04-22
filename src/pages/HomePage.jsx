import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingWhatsApp from '../components/layout/FloatingWhatsApp';
import Hero from '../components/sections/Hero';

// Lazy load non-critical components
const PainPoints = lazy(() => import('../components/sections/PainPoints'));
const Services = lazy(() => import('../components/sections/Services'));
const Portfolio = lazy(() => import('../components/sections/Portfolio'));
const Workflow = lazy(() => import('../components/sections/Workflow'));
const FAQ = lazy(() => import('../components/sections/FAQ'));

import { SITE_NAME, DEFAULT_OG_IMAGE, absoluteUrl } from '../lib/seo';

const HomePage = () => {
  const canonicalUrl = absoluteUrl('/');
  const title = 'Jasa Pembuatan Website untuk UMKM & Toko Online';
  const description =
    'Jasa pembuatan website untuk web UMKM dan toko online. Harga terjangkau, proses transparan, siap pakai dalam hitungan hari. Konsultasi sekarang.';

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: canonicalUrl,
    inLanguage: 'id-ID',
    description,
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: canonicalUrl,
    logo: absoluteUrl('/logo_palugada_tech.png'),
    image: DEFAULT_OG_IMAGE,
    description,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: `+${whatsappNumber.startsWith('62') ? whatsappNumber : '62' + (whatsappNumber.startsWith('0') ? whatsappNumber.substring(1) : whatsappNumber)}`,
        availableLanguage: ['id'],
      },
    ],
    sameAs: [`https://wa.me/${whatsappNumber}`],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Beranda',
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang="id" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:site_name" content={SITE_NAME} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />

        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Suspense fallback={<div className="h-20" />}>
            <PainPoints />
            <Services />
            <Portfolio />
            <Workflow />
            <FAQ />
          </Suspense>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default HomePage;
