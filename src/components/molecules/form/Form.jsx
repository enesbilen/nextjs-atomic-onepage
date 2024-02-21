import Button from '@/components/atoms/Button'
import React from 'react'
import styles from './form.module.scss'

const Form = () => {
  return (
    <form action="" method="post" className={styles.form}>
      <div className={styles.row}>
        <div className={styles.formGroup}>
          <input type="text" placeholder='Name / Surname' />
          <input type="text" placeholder='Phone' />
        </div>

        <div className={styles.formGroup}>
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Subject' />
        </div>

        <div className={styles.formText}>
          <textarea placeholder='Message'></textarea>
        </div>

        <div className={styles.formBtn}>
          <Button variant='info'>Submit</Button>
        </div>
      </div>
    </form>
  )
}

export default Form