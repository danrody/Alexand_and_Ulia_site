import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Александр и Юлия | Свадебное приглашение",
  description: "Приглашение на день рождения семьи Александра и Юлии 29.06.2026"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
