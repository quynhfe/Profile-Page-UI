import { Image } from '@heroui/image';
import HeroImage from '@/assets/hero.png';
import { Badge } from '@heroui/badge';
import { LogoHero } from '@/components/icons';

export default function AboutPage() {
  return (
    <div className='relative '>
      <div className='w-full px-14'>
        <Image
          src={HeroImage.src}
          alt='background hero'></Image>
      </div>
      <div className='absolute z-10 top-39.75 left-31'>
        <Badge
          isOneChar
          content={<div className='size-6 bg-icon-notify rounded-2xl'></div>}
          shape='rectangle'
          color='danger'
          placement='bottom-right'
          classNames={{
            base: 'size-25 border-none',
            badge: 'size-6 border-none',
          }}>
          <div className=' bg-white w-25 h-25 flex justify-center items-center border-5 border-border-logo/24 rounded-2xxl'>
            <LogoHero />
          </div>
        </Badge>
      </div>
    </div>
  );
}
