import React from 'react';
import PortalTitle from './components/PortalTitle';
import PortalBanner from './components/PortalBanner';
import PortalUpdate from './components/PortalUpdate';
export default function page() {
  return (
    <div className='flex flex-col items-start justify-center w-full'>
      <PortalBanner />
      <PortalTitle />
      <PortalUpdate />
    </div>
  );
}
