'use client';

import React from 'react';
import { Avatar, AvatarGroup } from '@heroui/avatar';
import { AvatarCus } from './avatar';

function User() {
  const users = [
    { id: 1, name: 'James', color: 'bg-pink' },
    { id: 2, name: 'Amelia', color: 'bg-purple' },
    { id: 3, name: 'Henry', color: 'bg-blue' },
    { id: 4, name: 'Fiona', color: 'bg-green' },
    { id: 5, name: 'Lucas' },
    { id: 6, name: 'Sophia' },
    { id: 7, name: 'Ethan' },
    { id: 8, name: 'Mia' },
    { id: 9, name: 'Noah' },
    { id: 10, name: 'Olivia' },
  ];

  return (
    <AvatarGroup
      max={4}
      total={3}
      renderCount={(count) => (
        <AvatarCus
          name={`${count} + `}
          radius='sm'
          size={7.5}
          background='bg-black-23'
          className='text-white/60'
        />
      )}>
      {users.map((user) => (
        <AvatarCus
          background={user.color || 'bg-black-23'}
          radius='sm'
          key={user.id}
          name={user.name}
          size={7.5}
          className='text-white'
          border='fallback'
          src='https://i'
        />
      ))}
    </AvatarGroup>
  );
}

export default User;
