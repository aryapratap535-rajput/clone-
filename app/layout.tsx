import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Counseling in Newbury Park, CA | Conejo Valley Family Counseling',
  description:
    'Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow. Online & in-person counseling in Newbury Park and across CA.',
  openGraph: {
    title: 'Counseling in Newbury Park, CA | Conejo Valley Family Counseling',
    description:
      'Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
