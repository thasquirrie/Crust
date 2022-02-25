/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
  ChevronLeftIcon,
  ClockIcon,
  HomeIcon,
  MenuAlt1Icon,
  ViewListIcon,
  XIcon,
} from '@heroicons/react/outline';
import {
  ChevronRightIcon,
  DotsVerticalIcon,
  LockClosedIcon,
  SearchIcon,
  SelectorIcon,
} from '@heroicons/react/solid';

const navigation = [
  {
    name: 'Bussiness Details',
    href: '#',
    icon: ChevronRightIcon,
    current: true,
  },
  { name: 'Ownership', href: '#', icon: ChevronRightIcon, current: false },
  {
    name: 'Formation Documents',
    href: '#',
    icon: ChevronRightIcon,
    current: false,
  },
  {
    name: 'Link Bank Account',
    href: '#',
    icon: ChevronRightIcon,
    current: false,
  },
  {
    name: 'Review and Submit',
    href: '#',
    icon: ChevronRightIcon,
    current: false,
  },
];

const projects = [
  {
    id: 1,
    title: 'GraphQL API',
    initials: 'GA',
    team: 'Engineering',
    members: [
      {
        name: 'Dries Vincent',
        handle: 'driesvincent',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Lindsay Walton',
        handle: 'lindsaywalton',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Courtney Henry',
        handle: 'courtneyhenry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Tom Cook',
        handle: 'tomcook',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
    totalMembers: 12,
    lastUpdated: 'March 17, 2020',
    pinned: true,
    bgColorClass: 'bg-pink-600',
  },
  // More projects...
];
const pinnedProjects = projects.filter((project) => project.pinned);

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function HomeScreen() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className='min-h-full'>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 flex z-40 lg:hidden'
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute top-0 right-0 -mr-12 pt-2'>
                    <button
                      type='button'
                      className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className='sr-only'>Close sidebar</span>
                      <XIcon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className='flex-shrink-0 flex items-center px-4'>
                  <h1>Crust &reg;</h1>
                </div>
                <div className='mt-5 flex-1 h-0 overflow-y-auto'>
                  <nav className='px-2'>
                    <div className='space-y-1'>
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-300 hover:text-gray-900 hover:bg-gray-50',
                            'group flex justify-between items-center px-2 py-2 text-base leading-5 font-medium rounded-md'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                          {!item.current ? (
                            <LockClosedIcon className='text-gray-200 h-6 w-6' />
                          ) : (
                            <ChevronRightIcon
                              className={classNames(
                                item.current
                                  ? 'text-gray-500'
                                  : 'text-gray-300 group-hover:text-gray-500',
                                'mr-3 flex-shrink-0 h-6 w-6'
                              )}
                              aria-hidden='true'
                            />
                          )}
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className='flex-shrink-0 w-14' aria-hidden='true'>
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className='hidden lg:flex lg:flex-col lg:w-96 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100'>
          <div className='flex items-center flex-shrink-0 px-6'>
            <h1 className='text-3xl font-semibold'>Crust&reg;</h1>
          </div>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='mt-6 h-0 flex-1 flex flex-col overflow-y-hidden'>
            {/* User account dropdown */}
            <Menu as='div' className='px-3 relative inline-block text-left'>
              <div>
                <Menu.Button className=' group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500'>
                  <span className='flex w-full justify-between items-center'>
                    <span className='flex min-w-0 items-center justify-between space-x-3'>
                      <img
                        className='w-10 h-10 bg-gray-300 rounded-full flex-shrink-0'
                        src='/default.jpg'
                        alt=''
                      />
                      <span className='flex-1 flex flex-col min-w-0'>
                        <span className='text-gray-900 text-sm font-medium truncate'>
                          Sodiq Farayola
                        </span>
                        <span className='text-gray-500 text-sm truncate'>
                          @thasquirrie
                        </span>
                      </span>
                    </span>
                    <SelectorIcon
                      className='flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                      aria-hidden='true'
                    />
                  </span>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none'>
                  <div className='py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          View profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Notifications
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className='py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Get desktop app
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Support
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className='py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Logout
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <div className='px-6 mt-2'>
              <div>
                <h3 className='text-black text-xs font-bold tracking-wider'>
                  APPLICATION
                </h3>
                <h1 className='text-2xl font-bold mt-1'>Welcome to Crust!</h1>
                <p className='text-[14px] font-semibold mt-2 leading-5'>
                  We need some information from you to get you started as soon
                  as possible
                </p>
              </div>

              <div className='mt-5'>
                <div className='px-4 py-3 bg-gray-300 rounded'>
                  <h5 className='text-xs tracking-wide font-semibold'>
                    Average completion time
                  </h5>
                  <h2 className='text-2xl mt-3 font-semibold'>5-12 min</h2>
                </div>
                <div className='hidden mt-1.5 px-4 py-3 bg-gray-300 rounded'>
                  <h5 className='text-xs tracking-wide font-semibold'>
                    Total amount you can qualify for
                  </h5>
                  <h2 className='text-2xl mt-3 font-semibold'>
                    &#8358;1,000,000.00
                  </h2>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className='px-3 mt-6'>
              <div className='space-y-1'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-200 text-gray-900'
                        : 'text-gray-300 hover:text-gray-900 hover:bg-gray-50',
                      'group flex items-center justify-between px-2 py-2 text-sm font-medium rounded-md'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                    {!item.current ? (
                      <LockClosedIcon className='h-6 w-6 text-gray-200' />
                    ) : (
                      <ChevronRightIcon
                        className={classNames(
                          item.current
                            ? 'text-gray-500'
                            : 'text-gray-400 group-hover:text-gray-500',
                          'mr-3 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden='true'
                      />
                    )}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
        {/* Main column */}
        <div className='lg:pl-96 flex flex-col'>
          {/* Search header */}
          <div className='sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden'>
            <button
              type='button'
              className='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <MenuAlt1Icon className='h-6 w-6' aria-hidden='true' />
            </button>
            <div className='flex items-center justify-between px-4 sm:px-6 lg:px-8 w-full'>
              <div>
                <p className=''>Formation Documents</p>
              </div>

              <div className='flex items-center'>
                {/* Profile dropdown */}
                <Menu as='div' className='ml-3 relative'>
                  <div>
                    <Menu.Button className='max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'>
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='h-8 w-8 rounded-full'
                        src='https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none'>
                      <div className='py-1'>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              View profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Notifications
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className='py-1'>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Get desktop app
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Support
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className='py-1'>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Logout
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <main className='flex flex-col'>
            {/* Page title & actions */}
            <div className='hidden sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8'>
              <div className='flex-1 min-w-0'>
                <h1 className='text-lg font-medium leading-6 text-gray-900 sm:truncate'>
                  Business Details
                </h1>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
