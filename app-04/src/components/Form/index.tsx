
import styles from './form.module.css'
import React from 'react';

type FormProps = {
  children: React.ReactNode[];
}

const Form = (props : FormProps) => {
  return (
    <form className={styles.form}>
        {props.children}
    </form>
  )
}

export default Form