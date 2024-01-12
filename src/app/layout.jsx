import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Test Prisma App",
  description: "Testing Prisma ORM with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
