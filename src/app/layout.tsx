import "@/styles/globals.css";
import "@/styles/layout.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Next Rendering Demo",
  description: "Пример разных видов рендеринга и модалки в Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Navbar />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
