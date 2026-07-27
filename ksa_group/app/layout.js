import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import RootClientLayout from "@/components/layout/RootClientLayout";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "KSA Group of Institutions | Digital Headquarters",
  description:
    "Official digital headquarters for KSA Group of Institutions governing Kamarajar College of Nursing, Kamarajar College of Pharmacy, and Kamarajar College of Maritime.",
  keywords: [
    "KSA Group of Institutions",
    "Kamarajar College of Nursing",
    "Kamarajar College of Pharmacy",
    "Kamarajar College of Maritime",
    "B.Sc Nursing Admission",
    "B.Pharm Admission",
    "B.Sc Nautical Science Admission",
    "DGS Approved Maritime Academy",
  ],
  authors: [{ name: "KSA Group of Institutions" }],
  openGraph: {
    title: "KSA Group of Institutions | Digital Headquarters",
    description:
      "Empowering global leaders in Healthcare, Pharmaceutical Sciences, and Maritime Nautical Sciences.",
    url: "https://ksagroup.edu.in",
    siteName: "KSA Group of Institutions",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-accent-gold selection:text-[#0A192F]">
        <RootClientLayout>{children}</RootClientLayout>
      </body>
    </html>
  );
}
