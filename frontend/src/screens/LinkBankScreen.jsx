import { useEffect } from 'react';
import {} from '@heroicons/react/outline';

import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import LinkBank from '../components/LinkBank';

export default function LinkBankScreen() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [navigate, userInfo]);

  return (
    <div className='max-w-[22rem] -mt-24 bg-slate-300 md:max-w-7xl mx-auto rounded-lg'>
      <div className='max-w-[22rem] md:max-w-7xl mx-auto bg-slate-400 lg:grid lg:grid-cols-12 lg:gap-x-5 py-7 px-5 rounded-lg drop-shadow-2xl shadow-black'>
        <Sidebar />
        <LinkBank />
      </div>
    </div>
  );
}
