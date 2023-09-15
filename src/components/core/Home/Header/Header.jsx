import React from 'react'
import styles from "./style.module.scss"
const Header = () => {
  return (
    <div className={styles.main}>
        <div className={styles.text}>
            <h1>Elevate Solution with Integration</h1>
            <p>TecFinics blends business strategy and tech innovation for success. Our expert team delivers ethical, customized solutions, driving digital transformation and long-term growth.</p>
            <button>
                More Info
            </button>
        </div>
    </div>
  )
}

export default Header