"use client"
import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {

  return (
    <div className={styles.container}>
        <div>@2023 .All Rights Reserved for Ranjith</div>
        <div className={styles.social}>
          <Image src="/1.png" alt='fb' height={15} width={15} className={styles.icon}/> 
          <Image src="/2.png" alt='instagram' height={15} width={15} className={styles.icon}/>  
          <Image src="/3.png" alt='twitter' height={15} width={15} className={styles.icon}/> 
          <Image src="/4.png" alt='youtube' height={15} width={15} className={styles.icon} />          
        </div>
    </div>
    
  )
}

export default Footer