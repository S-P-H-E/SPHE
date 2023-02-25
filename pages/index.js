import Head from 'next/head'
import { Inter } from '@next/font/google'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Tech from '@/components/Tech'
import Recents from '@/components/Recents'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sphe - Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <Hero />
      <Tech />
      <Recents />
      <Contact />

      <Footer />
    </>
  )
}