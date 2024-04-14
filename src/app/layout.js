import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arabic Alphabet - Learn All 28 Letters",
  description: "Learn the letters, their pronunciations, and how to write them at the start, middle, and end of the word.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
