"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import styles from './links.module.scss'
import links from '@/data/links.json'

const Links = () => {
    const pathName = usePathname();

    return (
        <div className={styles.container}>
            {links.map((link) => (

                <Link key={link.title}
                    href={link.path}
                    className={`${styles.container} 
                        ${pathName === link.path && styles.active}`}>
                    {link.title}
                </Link>

            ))}
        </div>
    );
};


export default Links