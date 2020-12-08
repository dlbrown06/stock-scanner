import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stock Scanner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Stock Scanner
        </h1>

        <p><i>Analysis and interpolation of stock symbol performance based on historical publicly available data.</i></p>

        <p className={styles.description}>
          Get started by searching a stock symbol<br />
          <input type="text" />
        </p>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/dlbrown06/stock-symbol-scanner"
          target="_blank"
        >
          Click to follow development in Github!
        </a>
      </footer>
    </div>
  )
}
