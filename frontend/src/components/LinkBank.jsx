/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function LinkBank() {
  const [review, setReview] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(review);
  }, [review]);

  return (
    <div className=' relative bg-gray-50 overflow-hidden lg:col-span-12'>
      <div
        className='hidden m-auto sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full'
        aria-hidden='true'
      >
        <div className='relative h-full max-w-7xl mx-auto'>
          <svg
            className='absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2'
            width={404}
            height={784}
            fill='none'
            viewBox='0 0 404 784'
          >
            <defs>
              <pattern
                id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
            />
          </svg>
          <svg
            className='absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2'
            width={404}
            height={784}
            fill='none'
            viewBox='0 0 404 784'
          >
            <defs>
              <pattern
                id='5d0dd344-b041-4d26-bec4-8d33ea57ec9b'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill='url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)'
            />
          </svg>
        </div>
      </div>

      <div className='flex flex-col items-center my-auto'>
        <div className='relative mt-20 mx-auto max-w-7xl'>
          <img className='mx-auto h-full w-full' src='/lock.svg' alt='' />
        </div>

        <div className='relative pt-6 pb-16 sm:pb-24'>
          <main className='mt-1 mx-auto max-w-7xl px-4 sm:mt-2'>
            <div className='text-center'>
              <h1 className='text-4xl tracking-tight font-bold text-gray-900 sm:text-4xl md:text-4xl'>
                <span className='block xl:inline'>Unlock up to</span>{' '}
                <span className='block text-slate-600 xl:inline'>
                  &#8358;2,500,000.00
                </span>
                <span> in monthly credit now</span>
              </h1>
              <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
                <div className='rounded-md '>
                  <a
                    href='#'
                    className='w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-slate-600 hover:bg-slate-700 md:py-2 md:text-lg md:px-10'
                  >
                    Link Bank
                  </a>
                </div>
                <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                  <a
                    href='#'
                    className='w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-slate-600 bg-white hover:bg-gray-50 md:py-2 md:text-lg md:px-10'
                    onClick={() => {
                      navigate('/done');
                    }}
                  >
                    Skip
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
