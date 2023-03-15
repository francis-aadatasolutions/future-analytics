import React, { useState } from 'react';
import { InlineWidget, PopupButton } from 'react-calendly';
import { MdEmail } from 'react-icons/md';
import { BsFillCalendarWeekFill } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

const Contact = () => {
  const [switchContact, setSwitchContact] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onChange(value) {
    setIsVerified(true);
  }

  return (
    <div id='contact' className='section-center'>
      <h2 className='mb-8 font-semibold text-center text-4xl md:text-5xl md:mb-16'>
        Interested? Let&apos;s talk!
      </h2>
      <div className='flex justify-center gap-4 mb-4'>
        <button
          onClick={() => setSwitchContact(true)}
          className='p-4 my-4  rounded-xl bg-blue-400 text-white drop-shadow-4xl cursor-pointer'>
          <MdEmail className='mx-auto text-2xl' />
          Send a message
        </button>
        <button
          onClick={() => setSwitchContact(false)}
          className='p-4 my-4  rounded-xl bg-blue-400 text-white drop-shadow-4xl cursor-pointer'>
          <BsFillCalendarWeekFill className='mx-auto text-xl' />
          Book a Calendly
        </button>
      </div>

      {switchContact ? (
        <div className='bg-white p-8 rounded-xl contact-shadow md:w-fit md:mx-auto'>
          <form
            onSubmit={handleSubmit(async (data) => {
              try {
                const result = await axios.post('/api/sendgrid', data);
              } catch (error) {
                console.log(error);
              }
            })}
            className='flex flex-col gap-3 w-full md:w-[30rem]'>
            <label htmlFor='name' className='capitalize'>
              Enter your name
            </label>
            <input
              {...register('name', { required: true })}
              className={
                errors.name
                  ? 'bginside outline-none border border-red-300 rounded-2xl pl-2 h-12'
                  : 'bginside outline-none border border-blue-300 rounded-2xl pl-2 h-12'
              }
            />
            {errors.name && <p className='text-red-400'>Name is required.</p>}
            <label htmlFor='mail' className='capitalize'>
              Enter your email
            </label>
            <input
              {...register('email', {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Invalid email address',
                },
              })}
              className='bginside outline-none border border-blue-300 rounded-2xl pl-2 h-12'
            />
            <p className='text-red-400'>{errors.email?.message}</p>
            <label htmlFor='message' className='capitalize'>
              enter your message
            </label>
            <textarea
              {...register('message', { required: true })}
              className={
                errors.message
                  ? 'bginside outline-none border border-red-300 rounded-2xl pl-2 h-24'
                  : 'bginside outline-none border border-blue-300 rounded-2xl pl-2 h-24'
              }
            />
            {errors.message && (
              <p className='text-red-400'>Message is required.</p>
            )}
            <ReCAPTCHA
              className='mx-auto mt-4'
              sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
              onChange={onChange}
            />
            <div className='mx-auto'>
              <input
                disabled={!isVerified}
                type='submit'
                value='Send a message'
                // onClick={handleSubmit}
                className='p-4 my-4  rounded-xl bg-blue-400 text-white drop-shadow-4xl cursor-pointer disabled:opacity-50'
              />
            </div>
          </form>
        </div>
      ) : (
        <InlineWidget
          url='https://calendly.com/alexander-186/experiment1et'
          styles={{ height: '750px' }}
        />
      )}
    </div>
  );
};

export default Contact;
