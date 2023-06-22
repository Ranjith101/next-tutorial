import React from 'react'
import Styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/button/Button';
const Contact = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}> Lets Keep In Touch</h1>
      <div className={Styles.content}>
        <div className={Styles.imgContainer}>
          <Image 
          src="/contact.png"
          alt='contact'
          fill={true}
          className={Styles.img}
          />
        </div>
        <form className={Styles.form}>
          <input type="name" placeholder='Enter Name...' className={Styles.input}/>
          <input type="email" placeholder='Enter Email...' className={Styles.input}/>
          <textarea className={Styles.textarea} placeholder='Message' rows={10} cols={30}></textarea>
          <Button url="#" text="Send"/>
        </form>
      </div>
    </div>
  )
}

export default Contact