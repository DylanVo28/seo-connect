import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/shared/BottomNav";
import { UserProvider } from "@/contexts/UserContext"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEO.Connect",
  description: "Connect with SEO professionals and suppliers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          {children}
        </UserProvider>
        <BottomNav />
      </body>
    </html>
  );
}
