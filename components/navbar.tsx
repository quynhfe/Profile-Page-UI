'use client';
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
  NavbarBrand,
} from '@heroui/navbar';
import { Avatar } from '@heroui/avatar';
import { ThemeSwitch } from '@/components/theme-switch';
import { BellIcon, Logo, OnlineIcon } from './icons';
import User from './user';
import { Badge } from '@heroui/badge';
import IconBox from './icon-box';
import { AvatarCus } from './avatar';
export const Navbar = () => {
  return (
    <HeroUINavbar
      maxWidth='xl'
      position='sticky'
      height={48}
      classNames={{
        base: 'top-5 self-center w-fit flex justify-between  bg-black/80 rounded-2xl px-1.5',
        wrapper: 'p-0',
        content: 'p-0',
      }}>
      <NavbarContent
        className='w-175 p-0'
        justify='center'>
        <div className='flex justify-start items-center w-122 gap-(--my-gap) bg-gradient-to-r from-bg-gradient-black/20 to-bg-gradient-green/20 rounded-2xl py-1.5'>
          <div className=' bg-black-20 rounded-xxl w-9 h-9 flex justify-center items-center '>
            <Logo />
          </div>
          <p className='font-medium text-sm text-white'>Back to Dashboard</p>
          <User />
        </div>

        <NavbarContent
          justify='end'
          className='flex gap-2'>
          <ThemeSwitch />
          <div className='w-2.5 h-0 -rotate-90 opacity-20 rounded-2xl border border-white'></div>
          <NavbarItem className='icon-header'>
            <IconBox className='relative w-3.5 h-3.5'>
              <BellIcon />
              <span className='absolute -top-0.25 -right-0.25'>
                <OnlineIcon size={7.462184906005859} />
              </span>
            </IconBox>
          </NavbarItem>
          <AvatarCus
            name='Hoa'
            radius='sm'
            background='bg-blue'
            className='text-white border'
            size={7.5}
            border='border-black-24'
          />
        </NavbarContent>
      </NavbarContent>
    </HeroUINavbar>
  );
};
