import '../assets/scss/style.scss';
import type { AppProps } from 'next/app';
import Navbar from '../pages/navbar/Navbar';
import Footer from './footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
