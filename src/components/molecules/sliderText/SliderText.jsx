import React from 'react'
import styles from './slidertext.module.scss'
import Button from '@/components/atoms/Button'

const SliderText = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2><span>We are a  digital</span> agency specialized in
                    creating innovative <span>solutions for businesses</span> and startups
                </h2>
                <Button variant="gradient">Get an offer</Button>
            </div>
        </div>
    )
}

export default SliderText