import React from 'react'

import styles from './button.module.scss'

const button = ({ children, onClick }) => (
  <button className={styles.btn} onClick={onClick}>
    {children}
  </button>
)

export default button
