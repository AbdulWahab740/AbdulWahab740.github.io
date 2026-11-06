import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Abdul Wahab — Applied AI Engineer",
  description:
    "Applied AI Engineer at Nexonic (Evyol Group). Production RAG systems, LLM agents, multimodal document intelligence, and computer vision pipelines.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-surface text-on-surface antialiased selection:bg-primary selection:text-on-primary">
        {children}
      </body>
    </html>
  );
}
