"use client"
import Nav from './components/nav';
import Body from './components/body';
import About from './components/about';
import Review from './components/review/review';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Page() {
  return (
    <div>
      <title>Birch Electric</title>
      <link rel="icon" href="/images/Capture.png" />
      <Nav />
      <Body />
      <About />
      <Review />
      <Contact />
      <Footer /> 
    </div>
  );
}