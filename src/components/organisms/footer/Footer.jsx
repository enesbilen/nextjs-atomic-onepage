"use client"

import React from 'react'
import styles from './footer.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa';
import Copyright from './copyright';
import Image from 'next/image';
import links from '@/data/links.json'

const Footer = () => {
  const pathName = usePathname();
  return (
    <div className={styles.container}>
      <div className="content">
        <div className={styles.inner}>
          <div className={styles.box}>
            <Link href='/' className={styles.logo}>
              <Image alt='EnesDev' src='/logo/eneslogoWhite.png' height={50} width={128} />
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sit temporibus, assumenda ipsum qui corporis cum magnam sapiente aspernatur eveniet.
            </p>
          </div>
          <div className={styles.box}>
            <h4>Pages</h4>
            <div className={styles.footerLink}>

              {links.map((link) => (

                <Link key={link.title}
                  href={link.path}
                  className={`${styles.title} 
                        ${pathName === link.path && styles.active}`}>
                  {link.title}
                </Link>
              ))}

            </div>
          </div>
          <div className={styles.box}>
            <h4>Contact</h4>

            <ul>
              <li><p>National Express House</p></li>
              <li><p>Mill Ln Birmingham B5 6DD</p></li>
              <li><p>United Kingdom</p></li>
              <li><FaEnvelope /><Link href="#">info@example.com</Link></li>
              <li><FaPhone /><Link href="#">456 21 45</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Footer