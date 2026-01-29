import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Providers } from './providers'; // [추가]

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MK Entertainment',
  description: 'Leading the future of entertainment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* bg-white: 라이트모드 배경 / dark:bg-[#1E1F22]: 다크모드 배경 */}
      {/* text-black: 라이트모드 글자 / dark:text-white: 다크모드 글자 */}
      <body className={`${inter.className} bg-white text-black dark:bg-[#121212] dark:text-white transition-colors duration-300`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-6 py-12">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}