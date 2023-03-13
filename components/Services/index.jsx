import Image from 'next/image';
import React from 'react';
import embeded from '../../assets/images/services/embeded.png';
import rampidinternalapp from '../../assets/images/services/rampidinternalapp.png';
import powerBi from '../../assets/images/services/powerBi.png';
import powerBiconsultant from '../../assets/images/services/powerBiconsultant.png';
import buisinessinteligence from '../../assets/images/services/buisinessinteligence.png';
import { motion } from 'framer-motion';

const Services = () => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.7,
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.7,
        duration: 0.7,
      },
    },
  };

  return (
    <div id='services' className='my-16'>
      <div>
        <h2 className='mb-8 font-semibold text-center text-4xl md:text-5xl md:mb-16'>
          All the service that we provide
        </h2>

        <div className='hidden bg-hero-pattern2  bg-cover bg-no-repeat w-full md:block'>
          <div className='w-full max-w-[1304px] mx-auto '>
            <div className='content-wrap items-center'>
              <motion.div
                variants={variants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}>
                <Image
                  priority
                  src={embeded}
                  alt='Data Apps'
                  className='rounded-lg '
                />
              </motion.div>
              <motion.div
                variants={contentVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}>
                <div className='text-slate-500 text-center mt-4 md:text-left'>
                  <p className='font-semibold mb-4 text-xl md:text-5xl max-w-md'>
                    Embedded Data Apps
                  </p>
                  <p className='text-justify max-w-lg md:mt-10 md:text-xl md:text-left '>
                    Move to the future of BI with our Modern Data Applications.
                    Our data applications are powered by a API based semantic
                    layer and our front end has capabilities that are on par
                    with traditional BI tools with the added benefit of a wider
                    selection of charts, animations and a white labelled portal.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className='w-full max-w-[1304px] mx-auto '>
            <div className='content-wrap'>
              <motion.div
                variants={contentVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                className='flex flex-col justify-between'>
                <div className='text-slate-500 text-center mt-4 md:text-left'>
                  <p className='font-semibold mb-4 text-xl md:text-5xl max-w-md'>
                    Rapid Internal App Development
                  </p>
                  <p className='text-justify max-w-lg md:mt-10 md:text-xl md:text-left '>
                    We can build out a bespoke internal tool such as CRM&apos;s
                    and bespoke workflows in little to no time with our internal
                    framework. <br />
                    As we are an analytics consultancy we always provide you
                    with our best in class data apps to analyse your business
                    processes within your own branded internal app.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={variants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}>
                <Image
                  priority
                  src={rampidinternalapp}
                  alt='Rapid Internal App Development'
                  className='rounded-lg '
                />
              </motion.div>
            </div>
          </div>

          <div className='w-full max-w-[1304px] mx-auto '>
            <div className='content-wrap'>
              <motion.div
                variants={variants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}>
                <Image
                  priority
                  src={powerBi}
                  alt='PowerBi Team'
                  className='rounded-lg '
                />
              </motion.div>
              <motion.div
                variants={contentVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}>
                <div className='text-slate-500 text-center mt-4 md:text-left'>
                  <p className='font-semibold mb-4 text-xl md:text-5xl max-w-md'>
                    Remote Power BI Team
                  </p>
                  <p className='text-justify max-w-lg md:mt-10 md:text-xl md:text-left '>
                    Whether your a consultancy serving a large enterprise client
                    or looking to supercharge your BI team . We are able to
                    provide expert Power BI development that sit directly in
                    your existing BI team. Our remote team all work from our
                    compliant UK servers via VPN and a UK based principle
                    consultant will always be on hand to interact with your key
                    stakeholders and team.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className='w-full max-w-[1304px] mx-auto '>
            <div className='content-wrap'>
              <motion.div
                variants={contentVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                className='flex flex-col justify-between'>
                <div className='text-slate-500 text-center mt-4 md:text-left'>
                  <p className='font-semibold mb-4 text-xl md:text-5xl max-w-md'>
                    Business Intelligence Development
                  </p>
                  <p className='text-justify max-w-lg md:mt-10 md:text-xl md:text-left '>
                    Do you have a one off Business intelligence project that
                    you&apos;d like us to build out. That&apos;s not a problem
                    at all, please use our online instant quote calculator and
                    we can get back to you with a proposal. We are currently
                    offering data warehousing services using Azure and data
                    visualisation via Power BI, Plotly Dash and web interfaces.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={variants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}>
                <Image
                  priority
                  src={buisinessinteligence}
                  alt='Data Apps'
                  className='rounded-lg '
                />
              </motion.div>
            </div>
          </div>
          <div className='w-full max-w-[1304px] mx-auto '>
            <div className='content-wrap'>
              <motion.div
                variants={variants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}>
                <Image
                  priority
                  src={powerBiconsultant}
                  alt='Power BI & Azure Analysis Services Consultation'
                  className='rounded-lg '
                />
              </motion.div>
              <motion.div
                variants={contentVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}>
                <div className='text-slate-500 text-center mt-4 md:text-left'>
                  <p className='font-semibold mb-4 text-xl md:text-5xl max-w-md'>
                    Power BI & Azure Analysis Services Consultation
                  </p>
                  <p className='text-justify max-w-lg md:mt-10 md:text-xl md:text-left '>
                    We have deep experience in Power BI and SQL Server Analysis
                    services and can provide development and consulting by the
                    hour. We also provide an API wrapper for azure analysis
                    services projects that you&apos;d like to feed into other
                    applications.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className='services-bg md:hidden'>
          <div className='w-full max-w-[1304px] mx-auto '>
            <div className='content-wrap items-center'>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.7, duration: 0.5 },
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, amount: 1 }}>
                <Image
                  priority
                  src={embeded}
                  alt='Data Apps'
                  className='rounded-lg '
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.7, duration: 1 },
                }}
                viewport={{ once: true, amount: 1 }}>
                <div className='text-slate-500 text-center mt-4 md:text-left'>
                  <p className='font-semibold mb-4 text-2xl max-w-md'>
                    Embedded Data Apps
                  </p>
                  <p className='text-justify max-w-lg text-xl md:text-left '>
                    Move to the future of BI with our Modern Data Applications.
                    Our data applications are powered by a API based semantic
                    layer and our front end has capabilities that are on par
                    with traditional BI tools with the added benefit of a wider
                    selection of charts, animations and a white labelled portal.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className='w-full max-w-[1304px] mx-auto '>
            <div className='content-wrap'>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.7, duration: 0.5 },
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, amount: 1 }}>
                <Image
                  priority
                  src={rampidinternalapp}
                  alt='Rapid Internal App Development'
                  className='rounded-lg '
                />
              </motion.div>
              <div className='flex flex-col justify-between'>
                <div className='text-slate-500 text-center mt-4 md:text-left'>
                  <p className='font-semibold mb-4 text-2xl max-w-md'>
                    Rapid Internal App Development
                  </p>
                  <p className='text-justify max-w-lg text-xl md:text-left '>
                    We can build out a bespoke internal tool such as CRM&apos;s
                    and bespoke workflows in little to no time with our internal
                    framework. <br />
                    As we are an analytics consultancy we always provide you
                    with our best in class data apps to analyse your business
                    processes within your own branded internal app.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full max-w-[1304px] mx-auto '>
            <div className='content-wrap'>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.7, duration: 0.5 },
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, amount: 1 }}>
                <Image
                  priority
                  src={powerBi}
                  alt='PowerBi Team'
                  className='rounded-lg '
                />
              </motion.div>
              <div>
                <div className='text-slate-500 text-center mt-4 md:text-left'>
                  <p className='font-semibold mb-4 text-2xl max-w-md'>
                    Remote Power BI Team
                  </p>
                  <p className='text-justify max-w-lg text-xl md:text-left '>
                    Whether your a consultancy serving a large enterprise client
                    or looking to supercharge your BI team . We are able to
                    provide expert Power BI development that sit directly in
                    your existing BI team. Our remote team all work from our
                    compliant UK servers via VPN and a UK based principle
                    consultant will always be on hand to interact with your key
                    stakeholders and team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full max-w-[1304px] mx-auto '>
            <div className='content-wrap'>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.7, duration: 0.5 },
                }}
                viewport={{ once: true, amount: 1 }}>
                <Image
                  priority
                  src={buisinessinteligence}
                  alt='Data Apps'
                  className='rounded-lg '
                />
              </motion.div>
              <div className='flex flex-col justify-between'>
                <div className='text-slate-500 text-center mt-4 md:text-left'>
                  <p className='font-semibold mb-4 text-2xl max-w-md'>
                    Business Intelligence Development
                  </p>
                  <p className='text-justify max-w-lg text-xl md:text-left '>
                    Do you have a one off Business intelligence project that
                    you&apos;d like us to build out. That&apos;s not a problem
                    at all, please use our online instant quote calculator and
                    we can get back to you with a proposal. We are currently
                    offering data warehousing services using Azure and data
                    visualisation via Power BI, Plotly Dash and web interfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full max-w-[1304px] mx-auto '>
            <div className='content-wrap'>
              <div
                initial={{ opacity: 0, y: 200 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.7, duration: 0.5 },
                }}
                viewport={{ once: true, amount: 1 }}>
                {' '}
                <Image
                  priority
                  src={powerBiconsultant}
                  alt='Power BI & Azure Analysis Services Consultation'
                  className='rounded-lg '
                />
              </div>
              <div>
                <div className='text-slate-500 text-center mt-4 md:text-left'>
                  <p className='font-semibold mb-4 text-2xl max-w-md'>
                    Power BI & Azure Analysis Services Consultation
                  </p>
                  <p className='text-justify max-w-lg text-xl md:text-left '>
                    We have deep experience in Power BI and SQL Server Analysis
                    services and can provide development and consulting by the
                    hour. We also provide an API wrapper for azure analysis
                    services projects that you&apos;d like to feed into other
                    applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Services;
