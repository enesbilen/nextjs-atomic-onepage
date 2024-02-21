import React from 'react';
import styles from './referance.module.scss';
import Image from 'next/image';
import { FaCodeCompare, FaChartPie } from 'react-icons/fa6';

const Referance = () => {
    return (
        <div className={styles.bgRef}>
            <div className="content">
                <div className={styles.inner}>
                    <div className={styles.image}>
                        <Image
                            src="/screenshots/services.jpg"
                            alt=""
                            layout="fill"
                            quality={100}
                            className={styles.img}
                        />
                    </div>
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
                </div>
            </div>
        </div>
    );
};

export default Referance;
