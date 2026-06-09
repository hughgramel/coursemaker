import type { Metadata, Viewport } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-reading",
  display: "swap",
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "coursemaker — course-page template & design library",
  description:
    "A creatable template and comprehensive design library inspired by the Just the Docs theme used for UW CSE 457.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sourceSerif.variable}>
      <body>{children}</body>
    </html>
  );
}
