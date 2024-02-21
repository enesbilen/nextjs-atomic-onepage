import React, { useState } from 'react';
import styles from './hamburger.module.scss';
import links from '@/data/links.json'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);

  const pathName = usePathname();

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.container} ${isActive ? styles.active : ''}`} onClick={toggleActive}>
      <div className={styles.mobileBars}>
        <span className={isActive ? styles.active : ''}></span>
        <span className={isActive ? styles.active : ''}></span>
        <span className={isActive ? styles.active : ''}></span>
      </div>

      <div className={`${styles.menu} ${isActive ? styles.active : ''}`}>
        {links.map((link) => (

          <Link key={link.title}
            href={link.path}
            className={`${styles.container} 
        ${pathName === link.path && styles.active}`}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hamburger;
