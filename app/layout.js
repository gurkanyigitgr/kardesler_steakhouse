'use client';
import { SearchContextProvider } from './context/search';
import './globals.css';
import { Jost } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
const inter = Jost({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel='icon' href='./favicon.ico' />
      </head>
      <body className={inter.className}>
        <SearchContextProvider>
          <ThemeProvider attribute='class'>{children}</ThemeProvider>
        </SearchContextProvider>
      </body>
    </html>
  );
}
