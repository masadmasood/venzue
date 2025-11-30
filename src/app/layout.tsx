import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import HeaderWrapper from "@/shared/components/sections/header-wrapper";

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Venzue Music",
  description: "A music-related website",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable}`} suppressHydrationWarning>
        <HeaderWrapper />
        {children}
      </body>
    </html>
  );
}
