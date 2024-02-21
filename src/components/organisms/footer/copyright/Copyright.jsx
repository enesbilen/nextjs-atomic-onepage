import React from 'react'
import styles from './copyright.module.scss'
import Link from 'next/link'

import { FaGithub, FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa6';


const Copyright = () => {
  return (
    <div className={styles.container}>
      <div className="content">
        <div className={styles.inner}>
          <p><Link href='https://github.com/enesbilen/'>Enes Bilen</Link> © 2024</p>
          <div className={styles.icons}>
            <Link target='_blank' href="https://github.com/enesbilen/"><FaGithub /></Link>
            <Link target='_blank' href="https://instagram.com/enesbln/"><FaInstagram /></Link>
            <Link target='_blank' href="https://twitter.com"><FaTwitter /></Link>
            <Link target='_blank' href="https://facebook.com"><FaFacebook /></Link>
            <Link target='_blank' href="https://linkedin.com/in/enesbln/"><FaLinkedin /></Link>
            <Link target='_blank' href="https://youtube.com"><FaYoutube /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Copyright