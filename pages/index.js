import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Instant News app!</title>
        <meta name='description' content='Get news snippets in seconds' />
      </Head>
      <div className='bg-gray-900 h-screen'>
        <div className='container max-w-screen-xl mx-auto p-1'>
          <Navbar />
          <div className='max-w-screen-sm mx-auto pt-52'>
            <h1 className='text-gray-300 text-2xl md:text-5xl text-center'>
              Welcome to <br />{' '}
              <span className='text-pink-600'> Instant News app</span> <br />
              <h3 className='text-base'>V:0.0.0</h3>
            </h1>
            <h2 className='text-gray-300 text-sm mt-10 md:text-xl text-center'>
              Created By: Jeswanth vadlamudi <br />
              <a
                className='text-pink-600 text-sm mt-10 md:text-xl text-center cursor-pointer font-medium'
                href='https://jeswanth.netlify.app/'
                target='_blank'
              >
                Link to my portfolio
              </a>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
