import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "CLEANSTART Demolition & Property Maintenance | Burlington & the 905",
  description:
    "Basement and interior demolition, renovation prep, estate and property clean-outs, yard clean-ups and tree and root removal across Burlington and the 905. Fully insured. 5.0 stars from 9 Google reviews. Call Ryan at (905) 802-6998.",
  openGraph: {
    title: "CLEANSTART Demolition & Property Maintenance | Burlington & the 905",
    description: "Demolition and clean-ups done right, with the site left spotless. Fully insured. Call (905) 802-6998.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${oswald.variable} ${sourceSans.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
