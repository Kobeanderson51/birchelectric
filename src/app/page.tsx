'use client';

import { useEffect, useState } from 'react';
import Nav from './components/nav';
import Body from './components/body';
import About from './components/about';
import Review from './components/review/review';
import Contact from './components/contact';
import Footer from './components/footer';
import BackToTopButton from './components/backToTop';
import Faq from './components/FAQ';
import Hours from './components/hours';
import Head from 'next/head';

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='bg-white scroll-smooth'>
      <Head>
        <title>Birch Electric</title>
        <link rel="icon" href="/images/Capture.png" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow pt-16">
          <section id="home">
            <Body />
          </section>
          <section id="about" className="scroll-mt-16">
            <About />
          </section>
          <section id="faq" className="scroll-mt-16">
            <Faq />
          </section>
          <section id="reviews" className="scroll-mt-16">
            <Review />
          </section>
          <section id="contact" className="scroll-mt-16">
            <Contact />
          </section>
          <section id="hours" className="scroll-mt-16">
            <Hours />
          </section>
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </div>
  );
}
