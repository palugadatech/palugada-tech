import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { DEFAULT_OG_IMAGE, absoluteUrl } from '../lib/seo';

const NotFound = () => {
  const canonicalUrl = absoluteUrl('/404');
  const title = 'Jasa Pembuatan Website | Halaman 404 Palugada';
  const description =
    'Halaman yang Anda cari tidak ditemukan. Kembali ke jasa pembuatan website palugada.tech dan lanjutkan konsultasi website UMKM Anda sekarang.';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Beranda',
        item: absoluteUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '404',
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:site_name" content="palugada.tech" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-24">
        <section className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Error 404
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Halaman tidak ditemukan
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            URL yang Anda buka tidak tersedia. Kembali ke halaman utama untuk melihat layanan jasa pembuatan website dan konsultasi proyek Anda.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 font-bold text-white transition-colors hover:bg-primary/90"
          >
            Kembali ke Homepage
          </Link>
        </section>
      </main>
    </>
  );
};

export default NotFound;
