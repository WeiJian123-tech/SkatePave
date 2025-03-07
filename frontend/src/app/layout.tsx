import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkatePave",
  description: "Skateboard E-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
