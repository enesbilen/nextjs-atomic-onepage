import React from 'react'
import styles from './contact.module.scss'
import { FaComments, FaEnvelope, FaPhone } from "react-icons/fa6";
import Image from 'next/image'
import Link from 'next/link'
import Form from '@/components/molecules/form';


const Contact = () => {
    return (
        <div className={styles.container}>
            <div className="content">
                <div className={styles.inner}>
                    <div className={styles.feature}>

                        <div className={styles.box}>
                            <div className={styles.icon}>
                                <FaComments />
                            </div>
                            <span>Contact with us</span>
                            <p>
                                We have live support specialists waiting to help you Monday to Friday from 09.00 to 18.00.
                            </p>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.icon}>
                                <FaEnvelope />
                            </div>
                            <span>Send Email</span>
                            <p>
                                Send us an e-mail at <Link href="mailto:info@example.com"> info@example.com</Link> and we will reply within 24 hours.7
                            </p>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.icon}>
                                <FaPhone />
                            </div>
                            <span>Call us</span>
                            <p>
                                Our software experts are waiting for your call from Monday to Friday between 09.00 - 18.00
                            </p>
                        </div>

                    </div>

                    <div className={styles.contactForm}>
                        <div className={styles.left}>
                            <span>Contact Our Sales and Marketing Team</span>
                            <Form />
                        </div>
                        <div className={styles.right}>
                            <Image
                                src="/contactImg.svg"
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
    )
}

export default Contact