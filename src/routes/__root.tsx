import {
  Outlet,
  Link,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "googlebot", content: "index, follow" },
      {
        title:
          "Oakland The Global School | Premier Preschool & Daycare in Visakhapatnam",
      },
      {
        name: "description",
        content:
          "Oakland The Global School: Premier preschool & daycare in Visakhapatnam. Play Group to Grade 2 with Montessori-inspired learning, safe campus, trained educators, and activity-based curriculum. Admissions open for 2024-25.",
      },
      {
        name: "keywords",
        content:
          "preschool visakhapatnam, daycare visakhapatnam, montessori school, early childhood education, play group, nursery school, kindergarten, grade 1, grade 2, best preschool visakhapatnam, oakland global school",
      },
      { name: "author", content: "Oakland The Global School" },
      { name: "language", content: "English" },
      { name: "geo.region", content: "IN-AP" },
      { name: "geo.placename", content: "Visakhapatnam" },
      { name: "geo.position", content: "17.6868;83.2185" },
      { name: "ICBM", content: "17.6868, 83.2185" },
      {
        property: "og:title",
        content:
          "Oakland The Global School | Premier Preschool & Daycare in Visakhapatnam",
      },
      {
        property: "og:description",
        content:
          "Nurturing young minds for a global future. Montessori-inspired learning, safe campus, trained educators. Admissions open for Play Group to Grade 2.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://oakland.theglobalschool.workers.dev/",
      },
      {
        property: "og:image",
        content: "https://oakland.theglobalschool.workers.dev/oak-hero.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content:
          "Oakland The Global School - Premier Preschool in Visakhapatnam",
      },
      { property: "og:site_name", content: "Oakland The Global School" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@OaklandSchool" },
      {
        name: "twitter:title",
        content:
          "Oakland The Global School | Premier Preschool & Daycare in Hyderabad",
      },
      {
        name: "twitter:description",
        content:
          "Nurturing young minds for a global future. Montessori-inspired learning, safe campus, trained educators. Admissions open.",
      },
      {
        name: "twitter:image",
        content: "https://oakland.theglobalschool.workers.dev/oak-hero.jpg",
      },
      {
        name: "twitter:image:alt",
        content: "Oakland The Global School - Premier Preschool in Hyderabad",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap",
      },
      {
        rel: "canonical",
        href: "https://oakland.theglobalschool.workers.dev/",
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Oakland The Global School",
          description:
            "Premier preschool and daycare in Visakhapatnam offering Montessori-inspired early childhood education from Play Group to Grade 2.",
          url: "https://oakland.theglobalschool.workers.dev/",
          logo: "https://oakland.theglobalschool.workers.dev/oakland-logo.jpeg",
          image: "https://oakland.theglobalschool.workers.dev/oak-hero.jpg",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sujatha Nagar, Pendurthi",
            addressLocality: "Visakhapatnam",
            addressRegion: "Andhra Pradesh",
            postalCode: "531173",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "17.6868",
            longitude: "83.2185",
          },
          telephone: ["+91-8143151503", "+91-9849225344"],
          email: "oaklandglobalschool@gmail.com",
          sameAs: [
            "https://www.facebook.com/oaklandglobalschool",
            "https://www.instagram.com/oaklandglobalschool",
            "https://www.linkedin.com/company/oakland-global-school",
          ],
          educationalCredentialAwarded: [
            "Play Care Certificate",
            "Nursery Certificate",
            "Jr. KG Certificate",
            "Sr. KG Certificate",
            "Grade 1 Certificate",
            "Grade 2 Certificate",
          ],
          hasEducationalUse: "Early Childhood Education",
          knowsAbout: [
            "Montessori Method",
            "Activity-Based Learning",
            "Early Childhood Development",
            "Preschool Education",
            "Daycare Services",
          ],
          areaServed: {
            "@type": "City",
            name: "Visakhapatnam",
            addressRegion: "Andhra Pradesh",
            addressCountry: "IN",
          },
          priceRange: "$$",
          paymentAccepted: ["Cash", "UPI", "Bank Transfer"],
          currenciesAccepted: "INR",
          openingHours: "Mo-Fr 08:00-18:00",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "150",
            bestRating: "5",
            worstRating: "1",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Oakland The Global School",
          url: "https://oakland.theglobalschool.workers.dev/",
          description:
            "Premier preschool and daycare in Visakhapatnam offering Montessori-inspired early childhood education",
          publisher: {
            "@type": "EducationalOrganization",
            name: "Oakland The Global School",
          },
          potentialAction: {
            "@type": "SearchAction",
            target:
              "https://oakland.theglobalschool.workers.dev/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
