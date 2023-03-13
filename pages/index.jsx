import Aboutus from '@/components/About/Aboutus';
import PastClients from '@/components/Clients/PastClient';
import Contact from '@/components/contact/Contact';
import { CTASection } from '@/components/CTA/CTASection';
import Footer from '@/components/Footer/Footer';
import Headers from '@/components/header';
import Services from '@/components/Services';
import Slider from '@/components/Slider';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Future Analyticz</title>
        <meta name='description' content='Future Analytics' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className='relative'>
          <div className=' bg h-screen'>
            <Headers />
            <div className='section-center'>
              <CTASection />
            </div>
          </div>
        </div>
        {/* <div className='container'>
          <div className=' p-16 bg-slate-300 shadow-md'>hello</div>
        </div> */}

        <Slider />

        <Services />
        <PastClients />
        <Aboutus />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
