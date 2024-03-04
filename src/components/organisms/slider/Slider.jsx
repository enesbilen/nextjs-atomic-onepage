
import React from 'react';
import styles from './slider.module.scss';
import Image from 'next/image';
import SliderText from '@/components/molecules/sliderText';

const Slider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/sliderbg.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          quality={100}
          className={styles.image}
        />

        <div className={styles.text}>
          <SliderText />
        </div>
      </div>
    </div>
  );
};
export default Slider;
