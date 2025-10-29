import { Link } from '@heroui/link';
import { Snippet } from '@heroui/snippet';
import { Code } from '@heroui/code';
import { button as buttonStyles } from '@heroui/theme';

import { siteConfig } from '@/config/site';
import { title, subtitle } from '@/components/primitives';
import AboutLayout from './about/layout';
import AboutPage from './about/page';
import BlogPage from './blog/page';

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center mt-2 w-full'>
      <AboutPage />
      <BlogPage />
    </section>
  );
}
