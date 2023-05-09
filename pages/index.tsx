import Contact from '@components/contact';
import Footer from '@components/footer';
import HomePage from '@components/homepage';
import Navbar from '@components/navbar/navbar';
import OurProcess from '@components/our-process';
import Services from '@components/services';
import Showcase from '@components/showcase';
import SuccessStories from '@components/successStories';
import Technologies from '@components/technologies';
import WhyChooseFutureAnalytics from '@components/why-choose-future-analytics';
import { NavigateToResource } from '@refinedev/nextjs-router';

export default function Home() {
  return (
    <main>
      <HomePage />
      <Services />
      <SuccessStories />
      <Technologies />
      <WhyChooseFutureAnalytics />
      <OurProcess />
      <Showcase />
      <Contact />
      <Footer />
    </main>
  );
}

Home.noLayout = true;
