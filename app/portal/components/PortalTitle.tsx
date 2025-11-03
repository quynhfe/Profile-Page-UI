import Avatar1 from '@/assets/pic-1.jpg';
import Avatar2 from '@/assets/pic-2.jpg';
import Avatar3 from '@/assets/pic-3.jpg';
import { InsIcon, PinIcon, PlusIcon, TiktokIcon } from '@/components/icons';
import { ButtonCus } from '@/components/button';
import IconBox from '@/components/icon-box';
import { Tooltip } from '@heroui/tooltip';
import { AvatarCus } from '@/components/avatar';
export default function PortalTitle() {
  const users = [
    { id: 1, name: 'James', img: Avatar1.src },
    { id: 2, name: 'Azzaa Azara', img: Avatar2.src },
    { id: 3, name: 'Henry', img: Avatar3.src },
  ];
  return (
    <div className=' flex justify-between items-end w-full'>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4 w-fit h-fit items-center'>
          <p className='font-medium text-4xxl'>Running Club</p>
          <div className='flex -space-x-2'>
            {users.map((user) => (
              <div key={user.id}>
                <Tooltip
                  content={
                    <>
                      <div className='relative z-10 font-normal text-xs '>
                        {user.name}
                      </div>
                      <div
                        className='absolute inset-0 rounded-lg pointer-events-none'
                        style={{
                          background: 'var(--color-stroke-tooltip)',
                          padding: '1px',
                          WebkitMask:
                            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                          zIndex: 1,
                        }}
                      />
                      {/* <div className='absolute z-50 w-2 h-2 bg-white/12 transform translate-y-2.75 rotate-45'></div> */}
                      {/* <div className='absolute z-40 w-2 h-2 bg-white/12 border border-white/12 backdrop-blur-sm transform translate-y-2.75 rotate-45'></div> */}
                    </>
                  }
                  showArrow={true}
                  className='bg-white/15 backdrop-blur-sm  shadow-none rounded-lg'
                  classNames={{
                    base: ' border-none  shadow-none rounded-lg ',
                    content: 'border-none shadow-none ',
                  }}>
                  <AvatarCus
                    border='user'
                    src={user.img}
                    radius='sm'
                    className='size-8'></AvatarCus>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
        <p className='font-normal opacity-60'>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries
        </p>
      </div>
      <div className='flex gap-6 items-center w-fit h-fit'>
        <div className='flex h-full gap-5 opacity-30'>
          <InsIcon />
          <PinIcon />
          <TiktokIcon />
        </div>
        <ButtonCus variant='purple'>
          <p className='dark:block hidden'>Join</p>
          <p className='dark:hidden block'>Leave</p>
          <IconBox className='w-5 h-5'>
            <PlusIcon />
          </IconBox>
        </ButtonCus>
      </div>
    </div>
  );
}
