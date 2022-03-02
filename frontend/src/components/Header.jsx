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
                              onClick={logoutHandler}
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
