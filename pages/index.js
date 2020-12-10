import Head from 'next/head';
import Link from 'next/link';
import { useState } from "react";
import useSWR from 'swr';
import styled from "styled-components";
import styles from '../styles/Home.module.css';

// Styled Components
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

const SymbolList = styled.div`
  background-color: whitesmoke;
  padding: 1em;
  border-radius: 0.5em;

  div {
    cursor: pointer;
    font-size: 20px;
    display: block;
    color: grey;
    padding: 0.2em;
  }

  &.isValidating {
    background-color: black;
  }
`;

const ErrorMsg = styled.div`
  background-color: #ffdddd;
  color: #ff4c4c;
  padding: 1em;
  margin-top: 0.25em;
  margin-bottom: 1em;
  border-radius: 0.2em;
`;

export default function Home() {
  const [searchSymbol, setSearchSymbol] = useState("");

  const fetcher = url => fetch(url).then(r => r.json())
  const fetchRsp = useSWR(`/api/search?keywords=${searchSymbol}`, fetcher);
  const { data, error, isValidating } = fetchRsp;
  
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
        <p><SymbolSearchInput type="text" onKeyUp={e => setSearchSymbol(e.target.value.toUpperCase())} /></p>
        {error ? <ErrorMsg>Too many requests. Please wait...</ErrorMsg> : null}
        {Array.isArray(data) ? (
          <SymbolList isValidating>
            {data.map((symbolObj, key) => (
              <Link href={`/symbols/${symbolObj["1. symbol"]}`} key={key}><SymbolList>👉 {symbolObj["1. symbol"]} - {symbolObj["2. name"]}</SymbolList></Link>
            ))}
          </SymbolList>
        ) : null }    
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
