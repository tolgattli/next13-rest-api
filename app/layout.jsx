import { Poppins } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "TolgaBox",
  description: "Personal next13 beginner project",
  keywords: "web development, web design, next13, html, css, angular, react",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
