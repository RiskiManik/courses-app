import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Course",
  description: "Free Courses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
     
        {children}
      
      </body>
    </html>
  );
}
