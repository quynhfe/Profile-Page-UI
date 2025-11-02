import React from 'react';
import { Image } from '@heroui/image';
import { DotIcon, GroupIcon, VideoIcon } from './icons';
import IconBox from './icon-box';
import MeetingTypeBox from '@/app/portal/components/MeetingTypeBox';
import { AvatarCus } from './avatar';
export type MeetingFormat = 'in-person' | 'virtual';
export type MeetingStatus = 'live' | 'upcoming' | 'ended';

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface EventProps {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  meetingNow: boolean;
  status: MeetingStatus;
  format: MeetingFormat[];
  image: string;
  host: User;
  speakers: User[];
}
export default function Event({
  title,
  description,
  startTime,
  endTime,
  status,
  format,
  image,
  host,
  speakers,
}: EventProps) {
  const hasInPerson = format.includes('in-person');
  const hasVirtual = format.includes('virtual');

  return (
    <div className='group w-183.5 flex justify-between p-4 rounded-2xl dark:bg-[#111111] bg-white border border-border-grey dark:border-[#1F1F1F]'>
      {status !== 'ended' && (
        <div className='size-25.75 overflow-hidden rounded-lg'>
          <Image
            src={image}
            alt={title}
            classNames={{
              img: 'scale-265 transform -translate-y-24 translate-x-10.5',
              wrapper: 'transform -translate-y-10',
            }}
          />
        </div>
      )}

      <div className='flex flex-col gap-2 w-136.75'>
        <div className='flex flex-col gap-0.5'>
          <div className='flex gap-2.5 items-center'>
            <p className='font-medium text-xs hidden dark:block'>
              {startTime}
              {endTime && ` - ${endTime}`}
            </p>
            <p className='font-medium text-xs block dark:hidden'>{startTime}</p>

            {status === 'live' && (
              <MeetingTypeBox
                variant='status'
                label='Now'></MeetingTypeBox>
            )}
            {status === 'ended' && (
              <MeetingTypeBox
                variant='status'
                label='Live'></MeetingTypeBox>
            )}
            {hasInPerson && (
              <MeetingTypeBox
                variant='format'
                icon={<GroupIcon />}
                label='In-person'></MeetingTypeBox>
            )}
            {hasVirtual && (
              <MeetingTypeBox
                variant='format'
                icon={<VideoIcon />}
                label='Virtual'></MeetingTypeBox>
            )}
          </div>

          <p className='font-medium text-lg'>{title}</p>
        </div>

        <p className='text-xs dark:text-white/40 text-[#868687] font-normal line-clamp-1'>
          {description}
        </p>

        <div className=' gap-2 items-center text-xs hidden dark:flex'>
          <span className='text-xs text-white/30 font-normal '>Host:</span>
          <div className='flex items-center gap-1.5'>
            <AvatarCus
              size={4.5}
              border='user'
              src={host.avatar}
              alt={host.name}
              className='rounded-[6px]'
            />
            <span>{host.name}</span>
          </div>

          {speakers.length > 0 && (
            <>
              <span className='text-xs text-white/30 font-normal '>
                Speakers:
              </span>
              <div className='flex -space-x-1.5 w-12'>
                {speakers.map((speaker) => (
                  <AvatarCus
                    size={4.5}
                    border='user'
                    key={speaker.id}
                    src={speaker.avatar}
                    alt={speaker.name}
                    className='rounded-[6px]'
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className='h-25.75  items-center justify-center hidden dark:flex'>
        <IconBox className='size-5'>
          <DotIcon className='group-hover:text-white text-[#5E5E5F]' />
        </IconBox>
      </div>
    </div>
  );
}
