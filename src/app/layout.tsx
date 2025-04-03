import { ThemeProvider } from '@/components/ui/ThemeProvider';
import ThemeCustomizer from '@/components/ui/ThemeCustomizer';
import type { Metadata } from 'next';
import { Inter, Roboto, Poppins, Montserrat } from 'next/font/google';
import './globals.css';

// Load fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const roboto = Roboto({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KEYSPY - AI-Powered SEO & SEM Platform',
  description: 'Analyze your website, discover keywords, and generate SEO-optimized content with KEYSPY',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable} ${poppins.variable} ${montserrat.variable}`}>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <ThemeCustomizer />
        </ThemeProvider>
      </body>
    </html>
  );
}
