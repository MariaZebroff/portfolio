import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://mariasdesignstudio.ca";

const GA_MEASUREMENT_ID = "G-4CLS5EWR1Y";

const siteTitle =
  "Maria's Design Studio — Freelance Web Designer & Developer | Okanagan, BC";

const metaDescription =
  "Freelance web design & web development for Okanagan, BC businesses and startups in Kelowna, Penticton, Vernon, Oliver & Osoyoos—Maria's Design Studio.";

const ogImageAlt =
  "Maria's Design Studio — freelance web design & development, Okanagan BC";

const ogImageUrl = `${siteUrl}/images/hero-old.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: metaDescription,
  keywords: [
    "freelance web designer",
    "freelance web developer",
    "web design",
    "web development",
    "Okanagan BC",
    "Kelowna",
    "Penticton",
    "Vernon",
    "Oliver",
    "Osoyoos",
    "Maria's Design Studio",
    "local business websites",
    "startup websites",
    "frontend development",
    "British Columbia",
  ],
  authors: [{ name: "Maria's Design Studio" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "geo.region": "CA-BC",
    "geo.placename": "Okanagan, British Columbia",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Maria Zebroff",
      jobTitle: "Freelance Web Designer & Developer",
      url: siteUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Okanagan",
        addressRegion: "BC",
        addressCountry: "CA",
      },
    },
    {
      "@type": "ProfessionalService",
      name: "Maria's Design Studio",
      url: siteUrl,
      areaServed: [
        "Kelowna",
        "Penticton",
        "Vernon",
        "Oliver",
        "Osoyoos",
        "Okanagan BC",
      ],
      serviceType: [
        "Web Design",
        "Web Development",
        "Frontend Development",
      ],
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      name: "Maria's Design Studio",
      url: siteUrl,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <link
          rel="preload"
          href="/fonts/Poppins-Light.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Poppins-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Newsreader-VariableFont_opsz,wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');
`.trim(),
          }}
        />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:alt" content={ogImageAlt} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Maria's Design Studio" />
        <meta property="og:locale" content="en_CA" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full font-sans text-ink">{children}</body>
    </html>
  );
}
