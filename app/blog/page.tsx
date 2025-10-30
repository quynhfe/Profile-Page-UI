import { title } from '@/components/primitives';
import { Avatar } from '@heroui/avatar';
import Avatar1 from '@/assets/Avatar.png';
import Avatar2 from '@/assets/Avatar-2.png';
import Avatar3 from '@/assets/Avatar-3.png';
import { InsIcon, PinIcon, PlusIcon, TiktokIcon } from '@/components/icons';
// import { Button } from '@heroui/button';
import { ButtonCus } from '@/components/button';
import IconBox from '@/components/icon-box';
export default function BlogPage() {
  return (
    <div className='px-16 flex justify-between items-end w-full'>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4 w-fit h-fit items-center mt-10'>
          <p className='font-medium text-4xxl'>Running Club</p>
          <div className='flex -space-x-2'>
            <Avatar
              src={Avatar1.src}
              radius='sm'
              className='size-8'></Avatar>
            <Avatar
              radius='sm'
              src={Avatar2.src}
              className='size-8 '></Avatar>
            <Avatar
              radius='sm'
              src={Avatar3.src}
              className='size-8 '></Avatar>
          </div>
        </div>
        <p className='font-normal opacity-60'>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries
        </p>
      </div>
      <div className='flex gap-6 items-end w-fit h-fit'>
        <div className='flex gap-5 opacity-30'>
          <InsIcon />
          <PinIcon />
          <TiktokIcon />
        </div>
        <ButtonCus
          // color='primary'
          // className='rounded-xl bg-button-purple text-white py-2 px-3.5'
          variant='purple'>
          <p>Join</p>
          <IconBox className='w-5 h-5'>
            <PlusIcon />
          </IconBox>
        </ButtonCus>
      </div>
    </div>
  );
}
