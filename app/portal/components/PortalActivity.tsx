'use client';
import React, { useState } from 'react';
import Pic from '@/assets/pic-3.jpg';
import { Badge } from '@heroui/badge';
import { AvatarCus } from '@/components/avatar';
import { ClockIcon, PlusCircleIcon, RocketIcon } from '@/components/icons';
import IconBox from '@/components/icon-box';
import { ScrollShadow } from '@heroui/scroll-shadow';
import { Calendar } from '@heroui/calendar';
export default function PortalActivity() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const notifications = [
    {
      id: 1,
      user: {
        name: 'Amalia',
        avatar: Pic.src,
      },
      action: 'awarded badge during event',
      time: '10mins',
      badgeEvent: 'rocket',
    },
    {
      id: 2,
      user: {
        name: 'Hoa',
        avatar: 'https://invalid-url.com/avatar.jpg',
      },
      action: 'awarded badge during event',
      time: '10mins',
      badgeEvent: 'rocket',
    },
    {
      id: 3,
      user: {
        name: 'Amalia',
        avatar: Pic.src,
      },
      action: 'awarded badge during event',
      time: '10mins',
      badgeEvent: 'plus',
    },
    {
      id: 4,
      user: {
        name: 'Amalia',
        avatar: Pic.src,
      },
      action: 'awarded badge during event',
      time: '10mins',
      badgeEvent: 'rocket',
    },
    {
      id: 5,
      user: {
        name: 'Sarah Johnson',
        avatar: Pic.src,
      },
      action: 'commented on your post',
      time: '25mins',
      badgeEvent: 'rocket',
    },
    {
      id: 6,
      user: {
        name: 'Mike Chen',
        avatar: 'https://broken-link.com/avatar.png',
      },
      action: 'joined your team',
      time: '1hr',
      badgeEvent: 'rocket',
    },
    {
      id: 7,
      user: {
        name: 'Jessica Lee',
        avatar: Pic.src,
      },
      action: 'liked your presentation',
      time: '2hrs',
      badgeEvent: 'rocket',
    },
    {
      id: 8,
      user: {
        name: 'David Park',
        avatar: Pic.src,
      },
      action: 'shared a document with you',
      time: '3hrs',
      badgeEvent: 'rocket',
    },
    {
      id: 9,
      user: {
        name: 'Emma Thompson',
        avatar: 'https://error-avatar.com/img.jpg',
      },
      action: 'invited you to an event',
      time: '5hrs',
      badgeEvent: 'rocket',
    },
    {
      id: 10,
      user: {
        name: 'Robert Chen',
        avatar: Pic.src,
      },
      action: 'mentioned you in a comment',
      time: '1day',
      badgeEvent: 'rocket',
    },
  ];
  return (
    <div className=' mt-16.75 flex flex-col gap-5 w-full'>
      <div className='flex flex-col overflow-hidden relative z-0 w-full gap-4 bg-white dark:bg-[#111111] h-72.75  rounded-2xl p-5  border border-border-grey dark:border-[#1F1F1F]'>
        <p className=' font-medium text-base '>Recent activity</p>

        <ScrollShadow
          offset={100}
          hideScrollBar
          className='relative z-0 flex flex-col w-full h-full'>
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className='flex gap-3 py-2'>
              {notification.badgeEvent === 'rocket' ? (
                <Badge
                  size='sm'
                  isOneChar
                  variant='solid'
                  placement='bottom-right'
                  content={
                    <IconBox className='size-2'>
                      <RocketIcon />
                    </IconBox>
                  }
                  classNames={{
                    badge: 'bg-[#1ABC72]',
                    base: 'rounded-lg',
                  }}>
                  <AvatarCus
                    alt=''
                    name={notification.user.name}
                    src={notification.user.avatar}
                    size={8}
                    className='rounded-lg bg-button-purple'
                  />
                </Badge>
              ) : (
                <Badge
                  size='sm'
                  isOneChar
                  placement='bottom-right'
                  content={
                    <IconBox className='size-2'>
                      <PlusCircleIcon />
                    </IconBox>
                  }
                  classNames={{
                    badge: 'bg-[#F97F4B]',
                    base: 'rounded-lg',
                  }}>
                  <AvatarCus
                    alt=''
                    src={notification.user.avatar}
                    size={8}
                    className='rounded-lg bg-button-purple'
                  />
                </Badge>
              )}
              <p className='leading-[100%]'>
                <span className='text-base leading-[100%]'>
                  {notification.user.name} {notification.action}
                </span>
                <span className='dark:text-white/40 text-black/40'>
                  {' '}
                  {notification.time}
                </span>
              </p>
            </div>
          ))}
        </ScrollShadow>
        <div className='absolute z-10 h-29.75 w-81 transfrom -translate-x-5.5 bottom-0 bg-gradient-to-t dark:from-black dark:to-black/0 from-white to-white/0'></div>
      </div>

      <div className='text-nowrap leading-[100%] tracking-tight flex h-fit w-full justify-between items-center px-5 py-4 bg-white dark:bg-[#111111] rounded-2xl  border border-border-grey dark:border-[#1F1F1F]'>
        <IconBox className='size-4'>
          <ClockIcon />
        </IconBox>
        <p className='opacity-50'>Time in your location</p>
        <p className='font-medium text-base'>1:14 PM</p>
      </div>
      <div className='relative z-0'>
        <div className='absolute z-10 top-16 w-63 left-4 flex flex-col gap-3'>
          <div className=' w-full left-4 flex dark:bg-white/5 bg-border-grey dark:inset-shadow-[2px_2px_4px_0_rgba(0,0,0,0.25)] rounded-[10px] p-1'>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'upcoming'
                  ? 'dark:bg-[#3E3E3E66] bg-white'
                  : ' dark:hover:text-white'
              }`}>
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'past'
                  ? 'dark:bg-[#3E3E3E66] bg-white'
                  : ' dark:hover:text-white'
              }`}>
              Past Event
            </button>
          </div>
          <div className='flex h-8.75 w-full justify-center items-center'>
            <p className='size-8.75 flex justify-center items-center font-medium text-sm'>
              Mo
            </p>
            <p className='size-8.75 flex justify-center items-center font-medium text-sm'>
              Tu
            </p>
            <p className='size-8.75 flex justify-center items-center font-medium text-sm'>
              We
            </p>
            <p className='size-8.75 flex justify-center items-center font-medium text-sm'>
              Th
            </p>
            <p className='size-8.75 flex justify-center items-center font-medium text-sm'>
              Fr
            </p>
            <p className='size-8.75 flex justify-center items-center font-medium text-sm'>
              Sat
            </p>
            <p className='size-8.75 flex justify-center items-center font-medium text-sm'>
              Su
            </p>
          </div>
        </div>

        <Calendar
          className='flex justify-center p-4'
          aria-label='Date (firstDayOfWeek)'
          firstDayOfWeek='mon'
          classNames={{
            base: 'flex p-0 w-full bg-white dark:bg-[#111111] rounded-2xl  border border-border-grey dark:border-[#1F1F1F] shadow-none',
            title: 'text-black dark:text-white h-8 flex items-center',
            prevButton: 'text-black dark:text-white',
            nextButton: 'text-black dark:text-white',
            cellButton:
              ' text-sm w-8.75 data-[selected=true]:bg-button-purple data-[outside-month=true]:text-[#868687] hover:bg-button-purple rounded-[8px]',
            headerWrapper: 'bg-inherit h-34.25 flex items-start p-0',
            gridWrapper: '',
            gridHeader: 'hidden',
            grid: 'p-0',
            content: 'p-0 m-0',
            gridBody: 'p-0',
          }}
        />
      </div>
    </div>
  );
}
