"use client"

import styles from './adminHeader.module.scss';
import Link from 'next/link'
import Image from 'next/image'
import Links from '@/data/adminlinks.json'
import { usePathname } from 'next/navigation';
import Button from '@/components/atoms/Button';
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';


const AdminHeader = () => {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove('id');
    Cookies.remove('isAdmin');
    Cookies.remove('username');
    Cookies.remove('jwt');

    toast.success("Başarıyla çıkış yapıldı!");

    setTimeout(() => {
      router.push('/');
    }, 500);
  };

  const pathName = usePathname();
  return (
    <div className={styles.container}>
      <div className="content">
        <div className={styles.inner}>
          <Link href='/' className={styles.logo}>
            <Image alt='Sapport Bilişim' src='/logo/eneslogo.png' height={50} width={128} />
          </Link>
          <div className={styles.nav}>
            {Links.map((link) => (
              <Link key={link.title}
                href={link.path}
                className={`${styles.item} 
                    ${pathName === link.path && styles.active}`}>
                {link.title}
              </Link>
            ))}
            <Button onClick={handleLogout} variant='warning'>Çıkış</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;