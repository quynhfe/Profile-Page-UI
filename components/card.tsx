import BgCard from '@/assets/pic-5.png';
import Image from 'next/image';
import React from 'react';
import GradientBorder from './gradient-border';
import { AvatarCus } from './avatar';

interface CardProps {
  title: string;
  updatedTime: string;
  backgroundImage: string;
  author: {
    name: string;
    avatar: string;
  };
  collaborators: Array<{
    name: string;
    avatar: string;
  }>;
  isRecording?: boolean;
  className?: string;
}

export default function Card({
  title,
  updatedTime,
  backgroundImage,
  author,
  collaborators,
  isRecording = false,
  className = '',
}: CardProps) {
  return (
    <div
      className={`bg-inherit relative z-0 h-51.25 w-52.5 rounded-2xl  ${className}`}>
      <div className='absolute -z-10 transform -translate-y-2 left-2.5 -rotate-2'>
        <GradientBorder
          variant='dark'
          rounded='rounded-2xl'
          className='hidden dark:block'>
          <div className='bg-header w-46.75 h-30 rounded-2xl'></div>
        </GradientBorder>
        <div className='bg-bg-card block dark:hidden w-46.75 h-30 rounded-2xl'></div>
      </div>

      <div className='w-full h-full relative bg-white dark:bg-header rounded-2xl shadow-lg overflow-hidden flex flex-col'>
        <div className='absolute top-4 left-4 right-4 z-10 flex items-center justify-between'>
          {isRecording && (
            <div className='w-3 h-3 bg-record rounded-[4px] animate-pulse'></div>
          )}

          <div className='flex items-center space-x-2'>
            {collaborators.map((collaborator, index) => (
              <AvatarCus
                size={4.5}
                key={index}
                src={collaborator.avatar}
                alt={collaborator.name}
                className='rounded-[6px]'
              />
            ))}
          </div>
        </div>

        <div className='flex-1 relative overflow-hidden w-full h-full rounded-2xl'>
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className='object-cover w-full h-full scale-200 object-bottom transfrom -translate-y-15'
          />
          <div className='opacity-70 absolute bottom-0 inset-0 bg-gradient-to-t from-black  to-black/0'></div>
        </div>

        <div className='absolute bottom-0 left-0 right-0 p-4 text-white flex flex-col space-y-0.5'>
          <div className='flex flex-col space-y-0.5'>
            <p className='text-lg font-medium leading-[150%] m-0 line-clamp-2'>
              {title}
            </p>
            <p className='text-xs text-white/30'>Updated {updatedTime}</p>
          </div>

          <AvatarCus
            src={author.avatar}
            alt={author.name}
            size={6}
            className='rounded-[6px]'
          />
        </div>
      </div>
    </div>
  );
}
