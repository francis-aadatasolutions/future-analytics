import { useForm } from '@refinedev/react-hook-form';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import ContactForm from './contactForm';
import { InlineWidget } from 'react-calendly';
const Contact = () => {
  return (
    <section>
      <div className='center py-28'>
        <div className='flex flex-col  md:grid md:grid-cols-2 gap-8'>
          <div>
            <div className='flex justify-between items-center gap-10 flex-col md:flex-row'>
              <div>
                <h4 className='capitalize font-bold text-primary mb-3 text-3xl md:text-4xl'>
                  Connect With Us
                </h4>
                <p className='max-w-4xl text-lg mt-8'>
                  Discover the difference Future Analytics can make for your
                  business. Get in touch with us today and take the first step
                  towards a brighter, data-driven future!
                </p>
              </div>
            </div>
            <div className='mt-12'>
              <ContactForm />
            </div>
          </div>
          <div>
            <h4 className='capitalize font-bold text-primary my-8 text-3xl text-center md:text-4xl'>
              Book a calendly
            </h4>
            <InlineWidget
              url='https://calendly.com/alexander-186/experiment1et'
              styles={{ height: '450px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
