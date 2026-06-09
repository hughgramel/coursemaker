import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "coursemaker — course-page template & design library",
  description:
    "A creatable template and comprehensive design library inspired by the Just the Docs theme used for UW CSE 457.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
