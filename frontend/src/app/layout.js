import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "E-Commerec",
  description: "Handcrafting Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
