import { React } from 'react';
import Head from 'next/head';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import Dashboard from '@/component/Dashboard';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400;500;600;700&family=Jost:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&family=Permanent+Marker&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <h1 className='main'>Welcome to our website!</h1>
      <Dashboard />

      <Footer />
    </div>
  )
}