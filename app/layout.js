import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Nikita Sindhi | Business Development Executive",
  description:
    "Discover the professional portfolio of Nikita Sindhi, a results-driven Business Development Executive with expertise in client acquisition, lead generation, and strategic sales growth. With a track record of leveraging CRM tools and data insights to drive revenue and build strong client relationships, Nikita brings innovative sales techniques and a client-focused approach to every opportunity. Explore my experience, skills, and achievements in IT sales and e-commerce.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <>
          <title>Nikita Sindhi - Business Development Executive</title>
          <meta
            name="title"
            content="Nikita Sindhi - Business Development Executive"
          />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <meta
            name="description"
            content="Discover the professional portfolio of Nikita Sindhi, a results-driven Business Development Executive with expertise in client acquisition, lead generation, and strategic sales growth."
          />

          <meta
            name="keywords"
            content="Nikita Sindhi, Business Development Executive, IT Sales, Client Acquisition, Lead Generation, Sales Strategy, Market Analysis, Ahmedabad, India"
          />

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://nikita-sindhi-portfolio.vercel.app/"
          />
          <meta
            property="og:title"
            content="Nikita Sindhi - Business Development Executive"
          />
          <meta
            property="og:description"
            content="Explore Nikita Sindhi's portfolio - a business development executive with a track record of boosting client engagement and revenue growth."
          />
          <meta
            property="og:image"
            content="https://nikita-sindhi-portfolio.vercel.app/preview-image.jpg"
          />
          <meta
            property="og:image"
            content="https://nikita-sindhi-portfolio.vercel.app/preview-image.webp"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://nikita-sindhi-portfolio.vercel.app/"
          />
          <meta
            property="twitter:title"
            content="Nikita Sindhi - Business Development Executive"
          />
          <meta
            property="twitter:description"
            content="Discover the professional achievements and expertise of Nikita Sindhi in client acquisition, sales strategies, and market analysis."
          />
          <meta
            property="twitter:image"
            content="https://nikita-sindhi-portfolio.vercel.app/preview-image.jpg"
          />

          <link
            rel="canonical"
            href="https://nikita-sindhi-portfolio.vercel.app/"
          />
        </>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
