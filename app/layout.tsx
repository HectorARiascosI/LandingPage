import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crust Pizza Co. - For Delicious, Made-From-Scratch Pizzas",
  description: "Home of the Chicago-Style Thin Crust Pizza",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
