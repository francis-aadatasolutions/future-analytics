import Contact from '@components/contact';
import Footer from '@components/footer';
import HomePage from '@components/homepage';
import Navbar from 'src/HOC/Navigation';
import OurProcess from '@components/our-process';
import Services from '@components/services';
import Showcase from '@components/showcase';
import SuccessStories from '@components/successStories';
import Technologies from '@components/technologies';
import WhyChooseFutureAnalytics from '@components/why-choose-future-analytics';
import Head from 'next/head';
import { PowerBIVector } from 'src/assets/SVG/Services/PowerBI';
import BackToTopButton from 'src/HOC/BackToTopButton';

export default function Home() {
  return (
    <>
      <Head>
        <title>Future Analytics</title>
        <meta name='description' content='Future Analytics' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className=' '>
        <HomePage />
        <Services />
        <SuccessStories />
        <Technologies />
        <WhyChooseFutureAnalytics />
        <OurProcess />
        <Showcase />
        <Contact />
        <Footer />
        <BackToTopButton />
      </main>
    </>
  );
}

Home.noLayout = true;
