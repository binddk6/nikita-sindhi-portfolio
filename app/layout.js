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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
