import { Image } from '@heroui/image';
import HeroImage from '@/assets/hero.png';
import { Badge } from '@heroui/badge';
import { LogoHero } from '@/components/icons';
import IconBox from '@/components/icon-box';
export default function PortalBanner() {
  return (
    <div className='relative w-full '>
      <Image
        className='w-full h-full object-cover'
        src={HeroImage.src}
        alt='background hero '></Image>
      <div className='absolute z-10 top-39.75 left-17'>
        <Badge
          isOneChar
          content={<div className='size-6 bg-icon-notify rounded-2xl'></div>}
          shape='rectangle'
          color='danger'
          placement='bottom-right'
          classNames={{
            base: 'size-25',
            badge: 'size-6 border-none',
          }}>
          <IconBox className='bg-white bg-clip-padding w-25 h-25 border-5 border-border-logo rounded-2xxl overflow-hidden'>
            <LogoHero />
          </IconBox>
        </Badge>
      </div>
    </div>
  );
}
