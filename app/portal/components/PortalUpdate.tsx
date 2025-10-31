import Card from '@/components/card';
import React from 'react';
import Collabrator from '@/assets/pic-3.jpg';
import Author from '@/assets/pic-1.jpg';
import Bg from '@/assets/pic-5.png';
export const tripCardsData = [
  {
    id: '1',
    title: 'How we plan the beautiful trip in Bali, Indonesia',
    updatedTime: '43 mins ago',
    backgroundImage: Bg.src,
    author: {
      name: 'John Doe',
      avatar: Author.src,
    },
    collaborators: [
      { name: 'Sarah Smith', avatar: Collabrator.src },
      { name: 'Sarah Smith', avatar: Collabrator.src },
    ],
    isRecording: true,
  },
  {
    id: '2',
    title: 'How we plan the beautiful trip in Bali, Indonesia',
    updatedTime: '2 days ago',
    backgroundImage: Bg.src,
    author: {
      name: 'John Doe',
      avatar: Author.src,
    },
    collaborators: [
      { name: 'Sarah Smith', avatar: Collabrator.src },
      { name: 'Sarah Smith', avatar: Collabrator.src },
    ],
  },
  {
    id: '3',
    title: 'How we plan the beautiful trip in Bali, Indonesia',
    updatedTime: '2 weeks ago',
    backgroundImage: Bg.src,

    author: {
      name: 'John Doe',
      avatar: Author.src,
    },
    collaborators: [
      { name: 'Sarah Smith', avatar: Collabrator.src },
      { name: 'Sarah Smith', avatar: Collabrator.src },
    ],
  },
  {
    id: '4',
    title: 'How we plan the beautiful trip in Bali, Indonesia',
    updatedTime: 'a month ago',
    backgroundImage: Bg.src,
    author: {
      name: 'John Doe',
      avatar: Author.src,
    },
    collaborators: [
      { name: 'Sarah Smith', avatar: Collabrator.src },
      { name: 'Sarah Smith', avatar: Collabrator.src },
    ],
    isRecording: true,
  },
];
export default function PortalUpdate() {
  return (
    <div className='mx-16 mt-16 flex flex-col justify-center items-start w-224.25 space-y-6'>
      <p className='font-medium text-20'>Recently updated</p>
      <div className='grid grid-cols-4 gap-5'>
        {tripCardsData.map((trip) => (
          <Card
            key={trip.id}
            backgroundImage={trip.backgroundImage}
            collaborators={trip.collaborators}
            author={trip.author}
            title={trip.title}
            updatedTime={trip.updatedTime}
            isRecording={trip.isRecording}
            className='col-span-1'></Card>
        ))}
      </div>
    </div>
  );
}
