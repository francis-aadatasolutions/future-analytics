import Image from 'next/image';
import React from 'react';
import hero from '../../assets/images/about/hero.png';
import { variants } from 'src/utils/framer';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <div className='center py-24'>
        <div>
          <h4 className='font-bold text-secondary text-4xl  text-center md:text-left'>
            About Us
          </h4>
          <motion.div
            variants={variants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            className='flex flex-col md:flex-row md:justify-between items-center'>
            {/* <Image
          src={whychoosefutureanalytics}
          alt='Why Choose Future Analytics'
        /> */}
            <div className=''>
              <p className='text-lg my-4'>
                At Future Analytics, we are your strategic partner in navigating
                the data-driven future. With expertise spanning from Power BI
                delivery to semantic layer creation and data visualization, our
                visionary team delivers innovative, custom solutions designed to
                align with your unique needs.
              </p>
              <p className='text-lg'>
                We seamlessly integrate industry-leading best practices into
                your existing processes, boosting efficiency and future-proofing
                your organization. Our competitively priced, cost-effective
                solutions offer substantial value, ensuring a bright,
                data-driven future. Our commitment to exceptional service,
                support, and seamless collaboration places our customers at the
                heart of our operations. With Future Analytics, you're not just
                preparing for the future, you're shaping it.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
