
import styles from './box.module.css'

import React from 'react'

type BoxProps = {
  children: React.ReactNode[];
}


const Box = (props: BoxProps) => {
  return (
    <div className={styles.box}>     
      {props.children}
    </div>
  )
}

export default Box