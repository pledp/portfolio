import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'L-E. J. "pled" T',
  description: "just a simple portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
