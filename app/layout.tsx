import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import STAR_CANVAS from "@/clientComponents/starCanvas";

// import { ClerkProvider } from "@clerk/nextjs";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SKIT | PRAGYAN",
  description: "SKIT Jaipur welcomes you to PRAGYAN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} overflow-x-hidden overflow-y-scroll bg-[#000]`}
      >
        {/* <div className="pointer-events-none">
          <STAR_CANVAS />
        </div> */}
        {children}
      </body>
    </html>
  );
}
