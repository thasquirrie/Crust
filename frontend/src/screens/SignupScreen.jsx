import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { signup } from '../actions/userActions';
import ErrorALert from '../components/ErrorAlert';
import SuccessAlert from '../components/SuccessAlert';

export default function SignupScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successShow, setSuccessShow] = useState(false);
  const [errorShow, setErrorShow] = useState(false);

  const userSignup = useSelector((state) => state.userSignup);
  const {
    loading,
    error: signupError,
    success: signupSuccess,
    userInfo,
  } = userSignup;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, password, confirmPassword });
    dispatch(signup({ firstName, lastName, email, password, confirmPassword }));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      window.setTimeout(() => {
        navigate('/');
      }, 3000);
    }
    if (signupSuccess) {
      setSuccessShow(true);

      window.setTimeout(() => setSuccessShow(false), 2500);
    }

    if (signupError) {
      console.log({ signupError });
      setErrorShow(true);
      window.setTimeout(() => setErrorShow(false), 2500);
    }
  }, [navigate, signupError, signupSuccess, userInfo]);

  return (
    <>
      <div className='-mt-24 min-h-full flex lg:max-w-7xl mx-auto shadow-lg my-5 rounded-xl overflow-hidden'>
        <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 z-10 bg-white'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <div>
              {successShow && <SuccessAlert action={'Signup'} />}
              {errorShow && <ErrorALert error={signupError} />}
              <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
                Sign in to your account
              </h2>
              <p className='mt-4 text-base text-gray-600 text-center'>
                Or{' '}
                <a
                  href='/login'
                  className=' underline block mt-2 font-medium text-slate-600 hover:text-slate-500'
                >
                  Login to your account if you are a registered user
                </a>
              </p>
            </div>

            <div className='mt-8'>
              <div className='mt-6'>
                <form onSubmit={submitHandler} className='space-y-6'>
                  <div>
                    <label
                      htmlFor='firstName'
                      className='block text-sm font-medium text-gray-700'
                    >
                      First Name
                    </label>
                    <div className='mt-1'>
                      <input
                        id='firstName'
                        name='firstName'
                        type='text'
                        autoComplete='firstName'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 drop-shadow-lg focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='lastName'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Last Name
                    </label>
                    <div className='mt-1'>
                      <input
                        id='lastName'
                        name='lastName'
                        type='text'
                        autoComplete='lastName'
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 drop-shadow-lg focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Email address
                    </label>
                    <div className='mt-1'>
                      <input
                        id='email'
                        name='email'
                        type='email'
                        autoComplete='email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 drop-shadow-lg focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='space-y-1'>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Password
                    </label>
                    <div className='mt-1'>
                      <input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 drop-shadow-lg focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='space-y-1'>
                    <label
                      htmlFor='confirm-password'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Confirm Password
                    </label>
                    <div className='mt-1'>
                      <input
                        id='confirm-password'
                        name='confirm-password'
                        type='password'
                        autoComplete='confirm-password'
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 drop-shadow-lg focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <input
                        id='remember-me'
                        name='remember-me'
                        type='checkbox'
                        className='h-4 w-4 text-slate-600 focus:ring-slate-500 border-gray-300 rounded'
                      />
                      <label
                        htmlFor='remember-me'
                        className='ml-2 block text-sm text-gray-900'
                      >
                        Remember me
                      </label>
                    </div>

                    <div className='text-sm'>
                      <a
                        href='#'
                        className='font-medium text-slate-600 hover:text-slate-500'
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    {loading ? (
                      <button
                        type='button'
                        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 hover:drop-shadow-lg hover:-translate-y-1 active:-translate-y-1'
                        disabled
                      >
                        <svg
                          className={`animate-spin -ml-1 mr-3 h-4 w-4 text-white`}
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            strokeWidth='4'
                          ></circle>
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                          ></path>
                        </svg>
                        Signing you up
                      </button>
                    ) : (
                      <button
                        type='submit'
                        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 hover:drop-shadow-lg hover:-translate-y-1 active:-translate-y-1'
                      >
                        Sign up
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden lg:block relative w-0 flex-1'>
          <img
            className='absolute inset-0 h-full w-full object-cover overflow-hidden'
            src='https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80'
            alt=''
          />
        </div>
      </div>
    </>
  );
}
