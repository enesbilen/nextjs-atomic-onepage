"use client"

import Image from 'next/image';
import { FaCodeCompare, FaChartPie, FaRegCircleCheck } from "react-icons/fa6";
import styles from './about.module.scss'

const About = () => {
    return (
        <div className='content'>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h4>Features</h4>
                    <h2>We are Experts in Development on All Technologies and Platforms</h2>
                    <p>
                        Platform-independent development of your mobile application, testing process, and
                        publishing your application, continuous monitoring, updating, and sharing analytical data.
                    </p>
                    <div className={styles.feature}>
                        <div className={styles.box}>
                            <div className={styles.icon}>
                                <FaCodeCompare />
                            </div>
                            <div className={styles.text}>
                                <p className={styles.head}>
                                    Platform Independent Architecture
                                </p>
                                <p>The developed application symbolizes seamless compatibility with both IOS and Android devices.</p>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.icon}>
                                <FaChartPie />
                            </div>
                            <div className={styles.text}>
                                <p className={styles.head}>
                                    Platform Independent Architecture
                                </p>
                                <p>
                                    The developed application is tailored specifically to your needs, free from unnecessary details, and provides a high-performance experience.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/sliderbg.jpg"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        className={styles.image}
                    />
                    <div className={styles.info}>
                        <div className={styles.icon}>
                            <span><FaRegCircleCheck /></span>
                            <p>Become a Professional with SAP / ABAP</p>
                        </div>
                        <div className={styles.icon}>
                            <span><FaRegCircleCheck /></span>
                            <p>Perfect Interface</p>
                        </div>
                        <div className={styles.icon}>
                            <span><FaRegCircleCheck /></span>
                            <p>Create a Free Account</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
