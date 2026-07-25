import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nomad Nests",
  description: "A TypeScript Airbnb-style clone with Next.js App Router"
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
