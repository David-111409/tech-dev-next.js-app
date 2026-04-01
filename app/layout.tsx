import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav/navbar";

const RethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TEC Dev Project",
  description: "A project for TEC Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${RethinkSans.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
      </body>
    </html>
  );
}
