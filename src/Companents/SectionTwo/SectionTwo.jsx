import React from 'react'
import styles from "../SectionTwo/SectionTwo.module.css"
const SectionTwo = () => {
  return (
    <section className={styles.sectionTwo}>
<div className={styles.containerTwo}>
    <div className={styles.card}>
        <h1>Women</h1>
        <p>Spring 2018</p>
    </div>
    <div className={styles.card}>
        <h1>Men</h1>
        <p>Spring 2018</p>
    </div>
    <div className={styles.card}>
        <h1>Accessories</h1>
        <p>New Trend</p>
    </div>
</div>
    </section>
  )
}

export default SectionTwo