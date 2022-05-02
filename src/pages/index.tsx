import { HomeTemplate } from '../lib/templates/home/home-template';
import Head from 'next/head';

export default function Home() {
   return (
      <>
         <Head>
            <title>Moment</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <meta name='description' content='Moment to live.' />
            <link rel='icon' href='/bonidev-logo-sm.svg' />
         </Head>
         <HomeTemplate />
      </>
   );
}
