import '@/app/ui/global.css';
import { inter, gothic } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'JB Dashboard',
  description: 'The official JB Business Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${gothic.className} antialiased`}>{children}</body>
    </html>
  );
}
