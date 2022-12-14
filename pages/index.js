import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import Image from 'next/image'
import deved from '../public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons '>Devrajsinh</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
              </li>
              <li>
                <a href="#" className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 '>Resume</a>
              </li>
            </ul>
          </nav>
          <div className=' text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Devrajsinh</h2>
            <h3 className=' text-2xl py-2'>Developer an Designer</h3>
            <p className=' text-md py-5 leading-8 text-gray-800'>
              Freelancer providing services for programming and design content needs. Join me down below and let's get cracking!
            </p>
          </div>
          <div className=' text-5xl flex  justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className=' relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden'>
            <Image src={deved} layout='fill' objectFit='cover'/>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div>
            <div>
              <Image src={design} width={100} height={100} />
              <h3>Beautiful Designs</h3>
            </div>
            <div>
              <Image src={code} width={100} height={100} />
            </div>
            <div>
              <Image src={consulting} width={100} height={100} />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}