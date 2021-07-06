import Configuration from '../components/Configuration';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <header>
        <h1>City trip planner</h1>
      </header>
      <main className={styles.main}>
        <div style={{ display: 'inline-block', width: '200px' }}></div>
        <Configuration />
        <Configuration />
        <Configuration />
        <Configuration />
        <div id="labels">
          <div className="even">Travel time</div>
          <div className="odd">Wasted time</div>
          <div className="even">Cost per month time</div>
          <div className="odd">Physical effort</div>
          <div className="even">Confort</div>
          <div className="odd">Security</div>
        </div>
      </main>
    </>
  )
}
