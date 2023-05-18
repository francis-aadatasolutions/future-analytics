import { useForm } from '@refinedev/react-hook-form';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { InlineWidget, PopupButton } from 'react-calendly';
import { MdEmail } from 'react-icons/md';
import { BsEnvelopeCheckFill, BsFillCalendarWeekFill } from 'react-icons/bs';

const ContactForm = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [switchContact, setSwitchContact] = useState(true);

  interface IContact {
    name: string;
    email: string;
    message: string;
  }

  const {
    getValues,
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<IContact>({
    refineCoreProps: {
      resource: 'sendgrid',
    },
  });

  function onChange() {
    setIsVerified(true);
  }

  return (
    <div id='contact' className='section-center'>
      <h2 className='mb-8 font-semibold text-center text-4xl md:text-5xl md:mb-16 text-secondary'>
        Interested? Let&apos;s talk!
      </h2>
      <div className='flex justify-center gap-4 mb-8'>
        <button
          onClick={() => setSwitchContact(true)}
          className=' p-4 outline-none border border-primary rounded-xl h-20 text-secondary'>
          <MdEmail className='mx-auto text-2xl' />
          Send a message
        </button>
        <button
          onClick={() => setSwitchContact(false)}
          className=' p-4 outline-none border border-primary rounded-xl h-20 text-secondary'>
          <BsFillCalendarWeekFill className='mx-auto text-xl' />
          Book a Calendly
        </button>
      </div>

      {switchContact ? (
        <div className='bg-white p-8 rounded-3xl contact-shadow md:w-fit md:mx-auto'>
          {isSubmitted && (
            <div className='mb-4 max-w-sm mx-auto p-3 bg-gray-400 rounded-lg'>
              <div className='flex flex-col items-center'>
                <BsEnvelopeCheckFill className='text-green-400 text-2xl' />
                <p className='text-lg text-center'>
                  Thank you for contacting us! we will be in touch with you as
                  soon as possible.
                </p>
              </div>
            </div>
          )}
          <form
            onSubmit={handleSubmit(onFinish)}
            className='flex flex-col gap-3 w-full md:w-[30rem]'>
            <label htmlFor='name' className='capitalize'>
              Enter your name
            </label>
            <input
              {...register('name', { required: true })}
              className={
                errors.name
                  ? 'outline-none border border-red-300 rounded-2xl pl-2 h-12'
                  : ' outline-none border border-primary rounded-2xl pl-2 h-12'
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
              className='outline-none border border-primary rounded-2xl pl-2 h-12'
            />
            {errors.email?.message === 'Invalid email address' ? (
              <p className='text-red'>Invalid Email</p>
            ) : errors.email ? (
              <p className='text-red'>Email is required</p>
            ) : null}
            <label htmlFor='message' className='capitalize'>
              enter your message
            </label>
            <textarea
              {...register('message', { required: true })}
              className={
                errors.message
                  ? 'bginside outline-none border border-red-300 rounded-2xl pl-2 h-24'
                  : 'outline-none border border-primary rounded-2xl pl-2 h-24'
              }
            />
            {errors.message && <p className='text-red'>Message is required.</p>}
            <ReCAPTCHA
              className='mx-auto mt-4'
              sitekey={process.env.NEXT_PUBLIC_SITE_KEY as string}
              onChange={onChange}
            />
            <div className='mx-auto'>
              <input
                disabled={!isVerified}
                type='submit'
                value='Send a message'
                className='p-4 my-4  rounded-xl bg-primary text-white drop-shadow-4xl cursor-pointer disabled:cursor-not-allowed disabled:opacity-50'
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

export default ContactForm;
