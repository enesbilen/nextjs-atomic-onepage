"use client"

import React, { useEffect, useState } from 'react';

import styles from './navbar.module.scss';
import Link from 'next/link';
import Links from './links/Links';
import Image from 'next/image';
import Hamburger from './hamburger';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > sticky);
    };

    const header = document.getElementById("header");
    const sticky = header.offsetTop;

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="header" className={`${styles.container} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.inner}>
        <Link href='#home' className={styles.logo}>
          <Image alt='EnesDev' src={isSticky ? '/logo/eneslogo.png' : '/logo/eneslogoWhite.png'} height={50} width={128} />
        </Link>
        <div className={styles.nav}>
          <Links />
        </div>
        <div className={styles.hamburger}>
          <Hamburger />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
