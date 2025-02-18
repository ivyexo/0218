import Image from "next/image";

export default function About() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-gray-100'>
      <div className='container mx-auto px-4 py-8'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
            About <span className='text-indigo-600'>Us</span>
          </h1>
          <p className='mt-4 text-xl text-gray-500'>
            Discover our story and mission
          </p>
        </div>

        <div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
          <div className='p-8 md:p-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
              <div className='relative h-64 md:h-96'>
                <Image
                  src='/placeholder-about.jpg'
                  alt='About Us'
                  fill
                  className='object-cover rounded-lg'
                />
              </div>
              <div>
                <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                  Our Vision
                </h2>
                <p className='text-gray-600 leading-relaxed mb-6'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
                <div className='space-y-4'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                      <div className='h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center'>
                        <svg
                          className='h-6 w-6 text-indigo-600'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M13 10V3L4 14h7v7l9-11h-7z'
                          />
                        </svg>
                      </div>
                    </div>
                    <div className='ml-4'>
                      <h3 className='text-lg font-medium text-gray-900'>
                        Fast & Efficient
                      </h3>
                      <p className='mt-1 text-gray-500'>
                        We deliver results quickly and efficiently
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                      <div className='h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center'>
                        <svg
                          className='h-6 w-6 text-indigo-600'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                          />
                        </svg>
                      </div>
                    </div>
                    <div className='ml-4'>
                      <h3 className='text-lg font-medium text-gray-900'>
                        Secure & Reliable
                      </h3>
                      <p className='mt-1 text-gray-500'>
                        Your trust is our top priority
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
