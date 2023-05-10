import { useForm } from '@refinedev/react-hook-form';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
            ? 'bginside outline-none border border-red-300 rounded-xl pl-2 h-12'
            : 'bginside outline-none border border-blue-300 rounded-xl pl-2 h-12'
        }
      />
      {errors.name && <p className='text-red'>Name is required.</p>}
      <label htmlFor='mail' className='capitalize'>
        Enter your email
      </label>
      <input
        {...register('email', {
          required: true,
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Invalid email',
          },
        })}
        className='bginside outline-none border border-blue-300 rounded-xl pl-2 h-12'
      />
      {errors.email?.message === 'Invalid email' ? (
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
            ? 'bginside outline-none border border-red-300 rounded-xl pl-2 h-24'
            : 'bginside outline-none border border-blue-300 rounded-xl pl-2 h-24'
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
  );
};

export default ContactForm;
