export default function Contact() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-gray-100'>
      <div className='container mx-auto px-4 py-8'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
            Get in <span className='text-indigo-600'>Touch</span>
          </h1>
          <p className='mt-4 text-xl text-gray-500'>
            We&apos;d love to hear from you
          </p>
        </div>

        <div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='p-8 md:p-12 bg-indigo-600'>
              <div className='text-white'>
                <h3 className='text-2xl font-bold mb-4'>Contact Information</h3>
                <p className='mb-8 text-indigo-100'>
                  Fill out the form and we will get back to you within 24 hours.
                </p>

                <div className='space-y-6'>
                  <div className='flex items-center'>
                    <svg
                      className='h-6 w-6 text-indigo-200'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                    <span className='ml-4 text-indigo-100'>
                      123 Business Street, New York, NY 10001
                    </span>
                  </div>
                  <div className='flex items-center'>
                    <svg
                      className='h-6 w-6 text-indigo-200'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                    <span className='ml-4 text-indigo-100'>
                      contact@example.com
                    </span>
                  </div>
                  <div className='flex items-center'>
                    <svg
                      className='h-6 w-6 text-indigo-200'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>
                    <span className='ml-4 text-indigo-100'>(555) 123-4567</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='p-8 md:p-12'>
              <form className='space-y-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                  />
                </div>
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    rows={4}
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                  ></textarea>
                </div>
                <div>
                  <button
                    type='submit'
                    className='w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
