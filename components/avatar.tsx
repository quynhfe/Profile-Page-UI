'use client';

import React from 'react';
import { Avatar, AvatarGroup } from '@heroui/avatar';

function User() {
  const users = [
    { id: 1, name: 'James', color: 'var(--color-pink)' },
    { id: 2, name: 'Amelia', color: 'var(--color-purple)' },
    { id: 3, name: 'Henry', color: 'var(--color-blue)' },
    { id: 4, name: 'Fiona', color: 'var(--color-green)' },
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
        <Avatar
          name={`${count} +`}
          radius='sm'
          showFallback
          style={{ backgroundColor: 'var(--color-black-23)' }}
          classNames={{
            base: 'text-white size-7.5',
          }}
        />
      )}>
      {users.map((user) => (
        <Avatar
          style={{
            backgroundColor: user.color
              ? `${user.color}`
              : 'var(--color-black-23)',
          }}
          radius='sm'
          key={user.id}
          showFallback
          name={user.name}
          src='https://i'
          classNames={{
            base: 'text-white size-7.5 border border-border-avt',
          }}
        />
      ))}
    </AvatarGroup>
  );
}

export default User;
