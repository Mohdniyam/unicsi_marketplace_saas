import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { QueryProvider } from '@/providers/QueryProvider'
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
})


export const metadata: Metadata = {
  title: "Unicsi",
  description: "Unicsi", //dropshipping india dropshipping supplier unique products tredending products best dropshipping platform in india amazon dropshipping b2b dropshipping platform in india b2b dropshipping d2d private supplier in india 
  //dropshpping private supplier in india
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
