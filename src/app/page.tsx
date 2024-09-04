"use client";
import Nav from './components/nav';
import Body from './components/body';
import About from './components/about';
import Review from './components/review/review';
import Contact from './components/contact';
import Footer from './components/footer';
import BackToTopButton from './components/backToTop';
import Faq from './components/FAQ';
import Hours from './components/hours';

export default function Page() {
  return (
    <div className='bg-white'>
      <title>Birch Electric</title>
      <link rel="icon" href="/images/Capture.png" />
      <Nav />
      <section id="home">
        <Body />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="faq">
        <Faq />
      </section>
      <section id="review">
        <Review />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="hours">
        <Hours />
      </section>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
