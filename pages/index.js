import Head from 'next/head'
import useSWR from 'swr';
import styled from "styled-components";
import styles from '../styles/Home.module.css'

export default function Home() {

  const SymbolSearchInput = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: darkgray;
    background: whitesmoke;
    border: none;
    border-radius: 5px;
    font-size: 1.3em;
    text-transform: uppercase;
  `;

  const fetchSymbol = () => {
    const { data, error } = useSWR('/api/stock', fetch);
  };

  const { data, error } = useSWR('/api/search?keywords=apple', fetch);

  return (
    <div className={styles.container}>
      <Head>
        <title>Stock Symbol Scanner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Stock Symbol Scanner
        </h1>

        <p><i>Analysis and interpolation of stock symbol performance based on historical publicly available data.</i></p>

        <p className={styles.description}>
          Get started by searching a stock symbol
        </p>
        <SymbolSearchInput type="text" onClick={() => fetchSymbol()} />        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/dlbrown06/stock-symbol-scanner"
          target="_blank"
        >
          👉 Click to follow development in Github!
        </a>
      </footer>
    </div>
  )
}
