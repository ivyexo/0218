"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className='bg-white shadow-md relative z-10'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
              <div className='flex-shrink-0'>
                {/* Logo space */}
                <div className='w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center'>
                  <span className='text-gray-500 font-bold'>Logo</span>
                </div>
              </div>

              {/* Hamburger menu button */}
              <div className='sm:hidden'>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none'
                >
                  <svg
                    className='h-6 w-6'
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    {isMenuOpen ? (
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'
                      />
                    ) : (
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    )}
                  </svg>
                </button>
              </div>

              {/* Desktop menu */}
              <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                <a
                  href='/'
                  className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-gray-300 transition-colors duration-200'
                >
                  Home
                </a>
                <a
                  href='/about'
                  className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 transition-colors duration-200'
                >
                  About
                </a>
                <a
                  href='/contact'
                  className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 transition-colors duration-200'
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile menu */}
            <div
              className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              } sm:hidden`}
            >
              {/* Close button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className='absolute top-4 right-4 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none'
              >
                <svg
                  className='h-6 w-6'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>

              <div className='pt-20 pb-3 px-4 space-y-1'>
                <a
                  href='/'
                  className='block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md'
                >
                  Home
                </a>
                <a
                  href='/about'
                  className='block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md'
                >
                  About
                </a>
                <a
                  href='/contact'
                  className='block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md'
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className='relative'>{children}</div>
      </body>
    </html>
  );
}
