import '@/styles/tailwind.css';
import '@/styles/prosemirror.css';

import cx from 'classnames';
import { cal, inter } from '@/styles/fonts';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import Toaster from './toaster';
import { ReactNode } from 'react';

const title = 'Notion-like Scrapbox - Notion-like Scrapbox.';
const description = 'Notion-like Scrapbox is a Notion-like Scrapbox.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@banri_yanahama',
  },
  metadataBase: new URL('https://novel.sh'),
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <Toaster />
        <body className={cx(cal.variable, inter.variable)}>
          {children}
        </body>
      <Analytics />
    </html>
  );
}
