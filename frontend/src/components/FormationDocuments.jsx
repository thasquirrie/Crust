import React from 'react';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const FormationDocuments = ({ formationDoc }) => {
  return (
    <div className='space-y-6 sm:px-6 lg:px-0 lg:col-span-8'>
      <form>
        <div
          // id='formation-documents'
          className={classNames(
            formationDoc || JSON.parse(localStorage.getItem('formationDoc'))
              ? 'block'
              : 'hidden',
            'shadow sm:rounded-md sm:overflow-hidden'
          )}
        >
          <div className='bg-white py-6 px-4 space-y-6 sm:p-6'>
            <div>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>
                Formation Documents
              </h3>
              <p className='mt-1 text-sm text-gray-500'>
                For compliance reasons, we need to collect the documents you
                were issued when your company was formed
              </p>
            </div>

            <div className='grid grid-cols-5 gap-12'>
              <div className='col-span-6 sm:col-span-3'>
                <label
                  className='block text-sm font-medium text-gray-700'
                  htmlFor='incoporation-certificate'
                >
                  Certification of Incorportation
                </label>
                <div className='relative mt-1 rounded-lg border-dashed border-2 border-gray-300'>
                  {/* <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                  <ClipboardIcon className='h-8 w-8 text-gray-500 font-thin' />
                </div> */}
                  <label className='block'>
                    <span className='sr-only'>Choose profile photo</span>
                    <input
                      type='file'
                      className='pl-3 py-12 w-full text-base font-medium text-center mx-auto flex items-center justify-center text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-base file:hover:cursor-pointer file:font-semibold file:text-slate-500 file:rounded-lg focus-within:outline-none hover:cursor-pointer '
                      onChange={(e) => {
                        console.log(e.target.files[0]);
                      }}
                    />
                  </label>
                </div>
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  className='block text-sm font-medium text-gray-700'
                  htmlFor='incoporation-certificate'
                >
                  CAC 1.1 Form (Certified True Copy)
                </label>
                <div className='relative mt-1 rounded-lg border-dashed border-2 border-gray-300'>
                  {/* <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                  <ClipboardIcon className='h-8 w-8 text-gray-500 font-thin' />
                </div> */}
                  <label className='block'>
                    <span className='sr-only'>Choose profile photo</span>
                    <input
                      type='file'
                      className='pl-3 py-12 w-full text-base font-medium text-center mx-auto flex items-center justify-center text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-base file:hover:cursor-pointer file:font-semibold file:text-slate-500 file:rounded-lg focus-within:outline-none hover:cursor-pointer '
                      onChange={(e) => {
                        console.log(e.target.files[0]);
                      }}
                    />
                  </label>
                </div>
              </div>

              <div className='col-span-6 sm:col-span-3'>
                <label
                  className='block text-sm font-medium text-gray-700'
                  htmlFor='incoporation-certificate'
                >
                  Memorandum of Articles (MEMART)
                </label>
                <div className='relative mt-1 rounded-lg border-dashed border-2 border-gray-300'>
                  {/* <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                  <ClipboardIcon className='h-8 w-8 text-gray-500 font-thin' />
                </div> */}
                  <label className='block'>
                    <span className='sr-only'>Choose profile photo</span>
                    <input
                      type='file'
                      className='pl-3 py-12 w-full text-base font-medium text-center mx-auto flex items-center justify-center text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-base file:hover:cursor-pointer file:font-semibold file:text-slate-500 file:rounded-lg focus-within:outline-none hover:cursor-pointer '
                      onChange={(e) => {
                        console.log(e.target.files[0]);
                      }}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
              <button
                type='submit'
                className='bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormationDocuments;
