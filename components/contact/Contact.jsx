import React, { useState } from 'react';
import { InlineWidget, PopupButton } from 'react-calendly';
import { MdEmail } from 'react-icons/md';
import { BsFillCalendarWeekFill } from 'react-icons/bs';

const Contact = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');

  const [message, setMessage] = useState('');
  const [switchContact, setSwitchContact] = useState(true);

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
          <form className='flex flex-col gap-3 w-full md:w-[30rem]'>
            <label htmlFor='name' className='capitalize'>
              Enter your name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
              className='bginside outline-none border border-blue-300 rounded-2xl pl-2 h-12'
            />
            <label htmlFor='mail' className='capitalize'>
              Enter your email
            </label>
            <input
              type='email'
              name='mail'
              id='mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='bginside outline-none border border-blue-300 rounded-2xl pl-2 h-12'
            />
            <label htmlFor='message' className='capitalize'>
              enter your message
            </label>
            <textarea
              name='message'
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='bginside outline-none border border-blue-300 rounded-2xl pl-2 h-24'
            />
            <div className='mx-auto'>
              <button
                // onClick={handleSubmit}
                className='p-4 my-4 w-32  rounded-xl bg-blue-400 text-white drop-shadow-4xl cursor-pointer'>
                Send Message
              </button>
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
