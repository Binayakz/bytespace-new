import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace — Learn Without Limits",
  description:
      "Discover practical courses designed to help you build skills and grow professionally.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
      <html lang="en" className={poppins.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />

        <link
            rel="stylesheet"
            href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500&display=swap"
        />
        <link
            rel="stylesheet"
            href="https://api.fontshare.com/v2/css?f[]=clash-display@700&display=swap"
        />
      </head>

      <body>{children}</body>
      </html>
  );
}
