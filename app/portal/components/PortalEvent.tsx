import { ButtonCus } from '@/components/button';
import IconBox from '@/components/icon-box';
import { ListIcon, MenuIcon, PlusIcon } from '@/components/icons';
import { Button } from '@heroui/button';
import Border from '@/components/border';
import React from 'react';
import GradientBorder from '@/components/gradient-border';
import Dot from '@/components/dot';
import Event from '@/components/event';
import type { MeetingFormat } from '@/components/event';
import type { MeetingStatus } from '@/components/event';
import Pic1 from '@/assets/pic-4.png';
import Line from '@/components/line';
export default function PortalEvent() {
  const eventsByDate = [
    {
      id: 1,
      date: '2024-05-07',
      dayLabel: 'Today',
      dateLabel: 'Wed, 7 May',
      events: [
        {
          id: 'meeting-1',
          title: 'Meeting about fitness after work',
          description:
            'Lorem ipsum is placeholder text commonly used in the graphic, print...',
          startTime: '11:00 AM',
          endTime: '12:30 PM',
          meetingNow: true,
          status: 'ended',
          format: ['in-person', 'virtual'],
          image: Pic1.src,
          host: {
            id: 'user-1',
            name: 'Tom Davis',
            avatar: Pic1.src,
          },
          speakers: [
            {
              id: 'user-2',
              name: 'Sarah Johnson',
              avatar: Pic1.src,
            },
            {
              id: 'user-3',
              name: 'Mike Chen',
              avatar: Pic1.src,
            },
          ],
        },
        {
          id: 'meeting-2',
          title: 'Product Strategy Workshop',
          description:
            'Discussing Q4 roadmap and feature prioritization for the upcoming release...',
          startTime: '2:00 PM',
          endTime: '4:00 PM',
          meetingNow: false,
          status: 'live',
          format: ['virtual'],
          image: Pic1.src,
          host: {
            id: 'user-5',
            name: 'Alex Rivera',
            avatar: Pic1.src,
          },
          speakers: [
            {
              id: 'user-6',
              name: 'Jessica Lee',
              avatar: Pic1.src,
            },
            {
              id: 'user-7',
              name: 'David Park',
              avatar: Pic1.src,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      date: '2024-05-08',
      dayLabel: '8 May 2024',
      dateLabel: 'Thursday',
      events: [
        {
          id: 'meeting-3',
          title: 'Team Building Activity',
          description:
            'Fun outdoor activities and team bonding exercises at the park...',
          startTime: '9:00 AM',
          endTime: '11:30 AM',
          meetingNow: false,
          status: 'upcoming',
          format: ['in-person'],
          image: Pic1.src,
          host: {
            id: 'user-9',
            name: 'Linda Martinez',
            avatar: Pic1.src,
          },
          speakers: [],
        },
        {
          id: 'meeting-4',
          title: 'Design System Review',
          description:
            'Review and update component library, discuss new design tokens...',
          startTime: '4:00 PM',
          endTime: '5:00 PM',
          meetingNow: false,
          status: 'upcoming',
          format: ['virtual'],
          image: Pic1.src,
          host: {
            id: 'user-10',
            name: 'James Wilson',
            avatar: Pic1.src,
          },
          speakers: [
            {
              id: 'user-11',
              name: 'Emma Thompson',
              avatar: Pic1.src,
            },
          ],
        },
        {
          id: 'meeting-5',
          title: 'Client Presentation',
          description:
            'Present new features and get feedback from key stakeholders...',
          startTime: '5:00 PM',
          endTime: '',
          meetingNow: false,
          status: 'upcoming',
          format: ['virtual'],
          image: Pic1.src,
          host: {
            id: 'user-12',
            name: 'Robert Chen',
            avatar: Pic1.src,
          },
          speakers: [
            {
              id: 'user-13',
              name: 'Michelle Wong',
              avatar: Pic1.src,
            },
            {
              id: 'user-14',
              name: 'Kevin Tran',
              avatar: Pic1.src,
            },
          ],
        },
      ],
    },
  ];
  return (
    <section className=' w-full flex flex-col gap-8'>
      <div className='flex justify-between items-center'>
        <p className='font-medium text-4xxl'>Events</p>
        <div className='flex gap-2.5 inset-shadow-dark'>
          <Button className=' gap-2 rounded-xl py-2 px-3.5 bg-white/15 flex text-neutral'>
            <p className='font-semibold text-sm leading-5 w-22.5'>
              Submit Event
            </p>
            <IconBox className='size-5'>
              <PlusIcon />
            </IconBox>
          </Button>
          <div className='flex gap-2 justify-center items-center bg-white dark:bg-inherit rounded-[10px] dark:rounded-none px-1 dark:p-0 shadow-dark dark:shadow-none'>
            <div className='w-fit h-fit overflow-hidden '>
              <GradientBorder
                variant='green'
                rounded='rounded-lg'
                className='p-2 bg-green dark:shadow-green'>
                <IconBox className='size-3.5 '>
                  <ListIcon />
                </IconBox>
              </GradientBorder>
            </div>
            <GradientBorder
              variant='dark'
              rounded='rounded-lg'
              className='p-2 bg-black-2526 hidden dark:block'>
              <IconBox className='size-3.5'>
                <MenuIcon className='text-neutral' />
              </IconBox>
            </GradientBorder>

            <div className='p-1.75 border border-border-grey bg-grey rounded-lg block dark:hidden'>
              <IconBox className='size-3.5  '>
                <MenuIcon className='text-black/30' />
              </IconBox>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        {eventsByDate.map((eventByDate) => (
          <div
            className='w-full flex gap-5'
            key={eventByDate.id}>
            <div className='flex flex-col gap-0.5 w-25.75'>
              <p className='font-medium text-base'>{eventByDate.dateLabel}</p>
              <p className='text-sm font-normal dark:text-white opacity-75 text-[#868687]'>
                {eventByDate.dayLabel}
              </p>
            </div>
            <div className='flex flex-col gap-4 h-fit'>
              <div
                className='relative z-0 w-4'
                style={{
                  height: `calc(${eventByDate.events.length * 33.75 + (eventByDate.events.length - 1) * 16})px`,
                }}>
                <Line
                  color='rgba(62,62,62,1)'
                  gap={5}
                  totalHeight={
                    eventByDate.events.length * 135 +
                    (eventByDate.events.length - 1) * 16 -
                    99
                  }
                  className='hidden dark:flex absolute -z-10 transform translate-x-2 top-14'
                />
                <Line
                  color='#D7D7D7'
                  gap={5}
                  totalHeight={
                    eventByDate.events.length * 135 +
                    (eventByDate.events.length - 1) * 16 -
                    99
                  }
                  className='absolute block dark:hidden -z-10 transform translate-x-2 top-14'
                />
              </div>
              {eventByDate.events.map((e) => (
                <div
                  key={e.id}
                  className='flex gap-6 relative z-0'>
                  <IconBox className='h-12'>
                    {e.status === 'upcoming' ? (
                      <Dot variant='black' />
                    ) : (
                      <Dot variant='red' />
                    )}
                  </IconBox>

                  <Event
                    id={e.id}
                    title={e.title}
                    description={e.description}
                    startTime={e.startTime}
                    endTime={e.endTime}
                    meetingNow={e.meetingNow}
                    status={e.status as MeetingStatus}
                    format={e.format as MeetingFormat[]}
                    image={e.image}
                    host={e.host}
                    speakers={e.speakers}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
