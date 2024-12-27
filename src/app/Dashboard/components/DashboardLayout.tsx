import SideNavBar from './SideNavBar';
import { Outlet } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import { useState } from 'react';

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className='flex h-screen'>
      <SideNavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='grow md:ml-[240px]'>
        <TopNavBar setIsOpen={setIsOpen} />
        <main className='bg-[#D3D3D5] min-h-full'>
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default DashboardLayout;
