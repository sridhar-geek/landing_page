import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DAMAC",
  description: "Landing Page for Damac",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="./logo.png" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
