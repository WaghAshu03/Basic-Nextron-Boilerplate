import electron from "electron";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((prevVal) => prevVal + 1);
    }, 1000);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (store-data)</title>
      </Head>
      <div>
        <button
          onClick={() => {
            setCount((prevVal) => prevVal + 1);
          }}
        >
          Count {count}
        </button>
      </div>
    </React.Fragment>
  );
}

export default Home;
