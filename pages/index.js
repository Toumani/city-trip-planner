import Head from 'next/head';

import Configuration from '../components/Configuration';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&amp;family=Raleway:wght@300&amp;display=swap" rel="stylesheet" />
      </Head>
      <header>
        <h1>City trip planner</h1>
      </header>
      <main className={styles.main}>
        <div style={{ display: 'inline-block', width: '200px' }}></div>
        <Configuration id="one" />
        <Configuration id="two" />
        <Configuration id="three" />
        <Configuration id="four" />
        <div id="labels">
          <div className="even"><span>Travel time</span></div>
          <div className="odd"><span>Wasted time</span></div>
          <div className="even"><span>Cost per month time</span></div>
          <div className="odd"><span>Physical effort</span></div>
          <div className="even"><span>Confort</span></div>
          <div className="odd"><span>Security</span></div>
        </div>
      </main>
    </>
  )
}
