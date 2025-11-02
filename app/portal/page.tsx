import React from 'react';
import PortalTitle from './components/PortalTitle';
import PortalBanner from './components/PortalBanner';
import PortalUpdate from './components/PortalUpdate';
import PortalEvent from './components/PortalEvent';
import PortalActivity from './components/PortalActivity';
export default function page() {
  return (
    <div className='flex flex-col items-start justify-center w-full'>
      <PortalBanner />
      <div className='px-16  mt-10 w-full'>
        <PortalTitle />
        <div className='mt-16 flex gap-5'>
          <div className=' flex flex-col gap-8 w-224.25'>
            <PortalUpdate />
            <PortalEvent />
          </div>
          <PortalActivity />
        </div>
      </div>
    </div>
  );
}
