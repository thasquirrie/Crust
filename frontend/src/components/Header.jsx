// /* This example requires Tailwind CSS v2.0+ */
// import { Fragment } from 'react';
// import { Disclosure, Menu, Transition } from '@headlessui/react';
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Example() {
//   return (
//     <Disclosure as='nav' className='bg-gray-800'>
//       {({ open }) => (
//         <>
//           <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
//             <div className='relative flex items-center justify-between h-16'>
//               <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
//                   <span className='sr-only'>Open main menu</span>
//                   {open ? (
//                     <XIcon className='block h-6 w-6' aria-hidden='true' />
//                   ) : (
//                     <MenuIcon className='block h-6 w-6' aria-hidden='true' />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
//                 <div className='flex-shrink-0 flex items-center'>
//                   <img
//                     className='block lg:hidden h-8 w-auto'
//                     src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
//                     alt='Workflow'
//                   />
//                   <img
//                     className='hidden lg:block h-8 w-auto'
//                     src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
//                     alt='Workflow'
//                   />
//                 </div>
//                 <div className='hidden sm:block sm:ml-6'>
//                   <div className='flex space-x-4'>
//                     {navigation.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className={classNames(
//                           item.current
//                             ? 'bg-gray-900 text-white'
//                             : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                           'px-3 py-2 rounded-md text-sm font-medium'
//                         )}
//                         aria-current={item.current ? 'page' : undefined}
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
//                 <button
//                   type='button'
//                   className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
//                 >
//                   <span className='sr-only'>View notifications</span>
//                   <BellIcon className='h-6 w-6' aria-hidden='true' />
//                 </button>

//                 {/* Profile dropdown */}
//                 <Menu as='div' className='ml-3 relative'>
//                   <div>
//                     <Menu.Button className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
//                       <span className='sr-only'>Open user menu</span>
//                       <img
//                         className='h-8 w-8 rounded-full'
//                         src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
//                         alt=''
//                       />
//                     </Menu.Button>
//                   </div>
//                   <Transition
//                     as={Fragment}
//                     enter='transition ease-out duration-100'
//                     enterFrom='transform opacity-0 scale-95'
//                     enterTo='transform opacity-100 scale-100'
//                     leave='transition ease-in duration-75'
//                     leaveFrom='transform opacity-100 scale-100'
//                     leaveTo='transform opacity-0 scale-95'
//                   >
//                     <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href='#'
//                             className={classNames(
//                               active ? 'bg-gray-100' : '',
//                               'block px-4 py-2 text-sm text-gray-700'
//                             )}
//                           >
//                             Your Profile
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href='#'
//                             className={classNames(
//                               active ? 'bg-gray-100' : '',
//                               'block px-4 py-2 text-sm text-gray-700'
//                             )}
//                           >
//                             Settings
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href='#'
//                             className={classNames(
//                               active ? 'bg-gray-100' : '',
//                               'block px-4 py-2 text-sm text-gray-700'
//                             )}
//                           >
//                             Sign out
//                           </a>
//                         )}
//                       </Menu.Item>
//                     </Menu.Items>
//                   </Transition>
//                 </Menu>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className='sm:hidden'>
//             <div className='px-2 pt-2 pb-3 space-y-1'>
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as='a'
//                   href={item.href}
//                   className={classNames(
//                     item.current
//                       ? 'bg-gray-900 text-white'
//                       : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                     'block px-3 py-2 rounded-md text-base font-medium'
//                   )}
//                   aria-current={item.current ? 'page' : undefined}
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }

/* This example requires Tailwind CSS v2.0+ */
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

// export default function Example() {
//   return (
//     <div className='bg-slate-300 flex items-center justify-between max-w-screen-2xl mx-auto px-6 py-2'>
//       <div className='flex flex-col  space-y-2 '>
//         <div className='mt-2 md:flex md:items-center md:justify-between'>
//           <div className='flex-1 min-w-0'>
//             <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate'>
//               Crust<span className='text-base relative -top-2'>&reg;</span>
//             </h2>
//           </div>
//         </div>
//         <div>
//           <nav className='sm:hidden mt-3' aria-label='Back'>
//             <a
//               href='/'
//               className='flex items-center text-sm font-medium text-gray-500 hover:text-gray-700'
//               aria-disabled='true'
//               disabled
//             >
//               <ChevronLeftIcon
//                 className='flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400'
//                 aria-hidden='true'
//               />
//               Back
//             </a>
//           </nav>
//           <nav className='hidden sm:flex' aria-label='Breadcrumb'>
//             <ol role='list' className='flex items-center space-x-4'>
//               <li>
//                 <div className='flex'>
//                   <a
//                     href='#'
//                     className='text-sm font-medium text-gray-500 hover:text-gray-700'
//                   >
//                     Jobs
//                   </a>
//                 </div>
//               </li>
//               <li>
//                 <div className='flex items-center'>
//                   <ChevronRightIcon
//                     className='flex-shrink-0 h-5 w-5 text-gray-400'
//                     aria-hidden='true'
//                   />
//                   <a
//                     href='#'
//                     className='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 cursor-not-allowed'
//                   >
//                     Engineering
//                   </a>
//                 </div>
//               </li>
//               <li>
//                 <div className='flex items-center'>
//                   <ChevronRightIcon
//                     className='flex-shrink-0 h-5 w-5 text-gray-400'
//                     aria-hidden='true'
//                   />
//                   <a
//                     href='#'
//                     aria-current='page'
//                     className='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'
//                   >
//                     Back End Developer
//                   </a>
//                 </div>
//               </li>
//             </ol>
//           </nav>
//         </div>
//       </div>
//       {
//         <div className='mt-4 flex-shrink-0 flex md:mt-0 md:ml-4'>
//           <button
//             type='button'
//             className='ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500'
//           >
//             Login
//           </button>
//         </div>
//       }
//     </div>
//   );
// }

import { Fragment } from 'react';
import { Menu, Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import { useNavigate } from 'react-router';

const userNavigation = [
  // { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      <Popover
        as='header'
        className='pb-24 bg-gradient-to-r from-slate-300 to-gray-600'
      >
        {({ open }) => (
          <>
            <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-0'>
              <div className='relative flex flex-wrap items-center justify-center lg:justify-between'>
                {/* Logo */}
                <div className='absolute left-0 py-5 flex-shrink-0 lg:static'>
                  <a href='/'>
                    <span className='sr-only'>Workflow</span>
                    {/* https://tailwindui.com/img/logos/workflow-mark-cyan-200.svg */}
                    <p className='relative text-4xl font-semibold tracking-wide text-white'>
                      Crust
                      <span className='absolute text-lg -top-0'>&reg;</span>
                    </p>
                  </a>
                </div>

                {/* Right section on desktop */}
                <div className='hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5'>
                  {/* Profile dropdown */}
                  {userInfo ? (
                    <Menu as='div' className='ml-4 relative flex-shrink-0'>
                      <div>
                        <Menu.Button className='bg-white rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100'>
                          <span className='sr-only'>Open user menu</span>
                          <img
                            className='h-8 w-8 rounded-full'
                            src={'/default.jpg'}
                            alt=''
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items className='origin-top-right z-40 absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  onClick={logoutHandler}
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <a href='/login'>
                      <button
                        type='submit'
                        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 hover:drop-shadow-lg'
                      >
                        Sign in
                      </button>
                    </a>
                  )}
                </div>

                <div className='w-full py-8 lg:py-0 lg:border-white lg:border-opacity-20'></div>

                {/* Menu button */}
                {userInfo ? (
                  <div className='absolute right-0 flex-shrink-0 lg:hidden'>
                    {/* Mobile menu button */}
                    <Popover.Button className='bg-transparent p-2 rounded-md inline-flex items-center justify-center text-white hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white'>
                      <span className='sr-only'>Open main menu</span>

                      {open ? (
                        <XIcon className='block h-6 w-6' aria-hidden='true' />
                      ) : (
                        <MenuIcon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                      )}
                    </Popover.Button>
                  </div>
                ) : (
                  <a href='/login' className='absolute right-0 flex-shrink-0'>
                    <button
                      type='submit'
                      className=' flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 hover:drop-shadow-lg hover:-translate-y-1 active:-translate-y-1'
                    >
                      Sign in
                    </button>
                  </a>
                )}
              </div>
            </div>

            <Transition.Root as={Fragment}>
              <div className='lg:hidden'>
                <Transition.Child
                  as={Fragment}
                  enter='duration-150 ease-out'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='duration-150 ease-in'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Popover.Overlay className='z-20 fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <Transition.Child
                  as={Fragment}
                  enter='duration-150 ease-out'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='duration-150 ease-in'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Popover.Panel
                    focus
                    className='z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top'
                  >
                    <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200'>
                      <div className='pt-3 pb-2'>
                        <div className='flex items-center justify-between px-4'>
                          <div>
                            {/* <img
                              className='h-8 w-auto'
                              src='https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg'
                              alt='Workflow'
                            /> */}
                          </div>
                          <div className='-mr-2'>
                            <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500'>
                              <span className='sr-only'>Close menu</span>
                              <XIcon className='h-6 w-6' aria-hidden='true' />
                            </Popover.Button>
                          </div>
                        </div>
                        <div className='mt-3 px-2 space-y-1'></div>
                      </div>
                      <div className='pt-4 pb-2'>
                        <div className='flex items-center px-5'>
                          <div className='flex-shrink-0'>
                            <img
                              className='h-10 w-10 rounded-full'
                              src={'/default.jpg'}
                              alt=''
                            />
                          </div>
                          <div className='ml-3 min-w-0 flex-1'>
                            <div className='text-base font-medium text-gray-800 truncate'>
                              {userInfo && userInfo.user.firstName}{' '}
                              {userInfo && userInfo.user.lastName}
                            </div>
                            <div className='text-sm font-medium text-gray-500 truncate'>
                              {userInfo && userInfo.user.email}
                            </div>
                          </div>
                          <button
                            type='button'
                            className='ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500'
                          >
                            <span className='sr-only'>View notifications</span>
                            {/* <BellIcon className='h-6 w-6' aria-hidden='true' /> */}
                          </button>
                        </div>
                        <div className='mt-3 px-2 space-y-1'>
                          {userNavigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className='block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800'
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition.Child>
              </div>
            </Transition.Root>
          </>
        )}
      </Popover>
    </div>
  );
};

export default Header;
