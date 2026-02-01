import { Inter, Montserrat } from "next/font/google"; // Changed imports
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Ochi Design Clone (Practice)",
  description:
    "A non-commercial student practice project inspired by the ochi.design website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.variable} ${inter.variable} antialiased`} // Using new variables
      >
        {children}
      </body>
    </html>
  );
}
