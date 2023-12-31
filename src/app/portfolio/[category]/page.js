import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/button/Button';
const Category = ({params}) => {
  return (  
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}> Desc</p>
          <Button url="#" text="see more..."/>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg' fill={true} alt=''/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}> Desc</p>
          <Button url="#" text="see more..."/>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg' fill={true} alt=''/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}> Desc</p>
          <Button url="#" text="see more..."/>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg' fill={true} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Category