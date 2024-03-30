import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Provider from "@/app/(Providers)/NextUiProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const monserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "IrisDesign",
  description: "Generate AI Image ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${monserrat.variable}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
