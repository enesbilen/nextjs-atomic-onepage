import React from 'react'
import styles from './services.module.scss'
import { FaLayerGroup } from "react-icons/fa6";
import Button from '@/components/atoms/Button';
import Image from 'next/image'


const Services = () => {
  return (
    <div className={styles.bgServices}>
      <div className="content">
        <div className={styles.inner}>
          <div className={styles.feature}>

            <div className={styles.box}>
              <div className={styles.icon}>
                <FaLayerGroup />
              </div>
              <span>Yüksek Performans</span>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam excepturi reiciendis beatae inventore praesentium mollitia eaque consectetur voluptas soluta minus!
              </p>
            </div>
            <div className={styles.box}>
              <div className={styles.icon}>
                <FaLayerGroup />
              </div>
              <span>Yüksek Performans</span>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam excepturi reiciendis beatae inventore praesentium mollitia eaque consectetur voluptas soluta minus!
              </p>
            </div>
            <div className={styles.box}>
              <div className={styles.icon}>
                <FaLayerGroup />
              </div>
              <span>Yüksek Performans</span>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam excepturi reiciendis beatae inventore praesentium mollitia eaque consectetur voluptas soluta minus!
              </p>
            </div>

          </div>

          <div className={styles.featureImg}>
            <div className={styles.box}>
              <div className={styles.left}>
                <div className={styles.text}>
                  <span>Web Tabanlı Yazılımlar</span>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, maiores!</p>
                </div>
                <div className={styles.btn}>
                  <Button variant="outline">Get an offer</Button>
                </div>
              </div>
              <div className={styles.right}>

                <Image
                  src="/feature1.png"
                  alt=""
                  layout="fill"
                  quality={100}
                  className={styles.img}
                />

              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.left}>
                <div className={styles.text}>
                  <span>Web Tabanlı Yazılımlar</span>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, maiores!</p>
                </div>
                <div className={styles.btn}>
                  <Button variant="outline">Get an offer</Button>
                </div>
              </div>
              <div className={styles.right}>

                <Image
                  src="/feature2.png"
                  alt=""
                  layout="fill"
                  quality={100}
                  className={styles.img}
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services