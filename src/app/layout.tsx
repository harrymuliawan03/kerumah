import Navbar from "@/components/layouts/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/layouts/Footer";
import { Toaster } from "react-hot-toast";
import WrapperPrivatePage from "@/components/wrapper/WrapperPrivatePage";
import { AuthProvider } from "@/contexts/auth/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kerumah",
  description: "Platform manajemen properti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-white"}>
        <AuthProvider>
          {/* <WrapperPrivatePage>
            </WrapperPrivatePage> */}
          {children}
          <Toaster
            toastOptions={{
              duration: 4000,
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
