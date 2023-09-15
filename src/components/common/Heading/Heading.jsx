import React from 'react'
import styles from "./style.module.scss"
const Heading = ({text}) => {
  return (
    <div className={styles.heading}>
      <h1>
       {text}
      </h1>
      <div>

      </div>

    </div>
  )
}

export default Heading