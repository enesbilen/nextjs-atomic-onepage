"use client"
import React, { useState } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6';
import styles from './myDisclosure.module.scss';

const MyDisclosure = ({ title, children, className, toggleClassName, contentClassName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDisclosure = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.myDisclosure} ${isOpen ? styles.open : ''} ${className}`}>
      <button className={`${styles.myDisclosureToggle} ${toggleClassName}`} onClick={toggleDisclosure}>
        {title}
        {isOpen ? <FaAngleDown /> : <FaAngleRight />}
      </button>
      <div className={`${styles.myDisclosureContent} ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
};
export default MyDisclosure;
