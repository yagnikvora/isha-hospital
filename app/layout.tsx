import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import TopBar from "./components/layout/TopBar";
import Footer from "./components/layout/Footer";
import ScrollToTopOnRouteChange from "./components/shared/ScrollToTopOnRouteChange";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Isha Hospital",
    default: "Isha Hospital | Compassionate Care with Modern Technology",
  },
  description:
    "Isha Hospital provides compassionate, full-service healthcare with modern technology. Expert doctors, comprehensive care, and trusted medical excellence.",
  icons: {
    icon: "/Logo (1).svg",
    shortcut: "/Logo (1).svg",
    apple: "/Logo (1).svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <ScrollToTopOnRouteChange />
        <TopBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
