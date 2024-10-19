import "@/styles/globals.css";
import '@/styles/globals.scss';
import { Playfair } from 'next/font/google'

import type { AppProps } from "next/app";

const playfair = Playfair({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={playfair.className}>
      <Component {...pageProps} />
    </main>
  );
}
