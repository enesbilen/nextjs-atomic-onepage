import Tabs from '@/components/atoms/Tab';
import styles from './product.module.scss'
import Image from 'next/image';
import Button from '@/components/atoms/Button';

const Product = () => {
  const tabs = [
    {
      id: 1,
      title: 'PRODUCT MODULE 1',
      content: <div className={styles.inner}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Dolor quia eaque nobis nisi fuga esse minima quaerat rerum rem explicabo.
          <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ipsa?
        </p>
        <Button variant="outline">Get an offer</Button>
        <div className={styles.image}>
          <Image
            src="/screenshots/mockup.png"
            alt=""
            layout="fill"
            quality={100}
            className={styles.img}
          />
        </div>

      </div>
    },
    {
      id: 2,
      title: 'PRODUCT MODULE 2',
      content: <div className={styles.inner}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Dolor quia eaque nobis nisi fuga esse minima quaerat rerum rem explicabo.
          <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ipsa?
        </p>
        <Button variant="outline">Get an offer</Button>
      </div>
    },
    {
      id: 3,
      title: 'PRODUCT MODULE 3',
      content: <div className={styles.inner}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Dolor quia eaque nobis nisi fuga esse minima quaerat rerum rem explicabo.
          <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ipsa?
        </p>
        <Button variant="outline">Get an offer</Button>
        <div className={styles.image}>
          <Image
            src="/screenshots/mockup.png"
            alt=""
            layout="fill"
            quality={100}
            className={styles.img}
          />
        </div>

      </div>
    }
  ];

  return (
    <div className="content">
      <div className={styles.container}>
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}
export default Product