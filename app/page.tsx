'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Joke from "./components/Joke"
import PunchLine from "./components/PunchLine"
import Button from "./components/Button"
import jokeData from "./jokeData"
import React, { useState } from "react";

export default function Home() {
  const [jokes, setJokes] = useState(jokeData)

  let jokeElements = jokes.map(joke => {
    let [visible, setVisible] = useState(true)
    function toggleReveal() {
      setVisible(prevState => !prevState)

    }
    return (
      <div className={styles.joke_container}>
        <Joke joke={joke.joke} />

        <PunchLine
          punchLine={joke.punchLine}
          isVisible={visible}
        />

        <Button
          isVisible={visible}
          punchLine={joke.punchLine}
          toggleReveal={toggleReveal}
        />
      </div >
    )
  })






  return (
    <main className={styles.main}>
      <h1>Welcome to lame jokes!</h1>
      {jokeElements}
    </main>
  );
}
