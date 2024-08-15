"use client";

import Image from "next/image";
import styles from "./contact.module.css";
import { useState, useEffect } from "react";

const ContactPage = () => {
  // Hydration Error
  // const a = Math.random();
  // console.log(a);

  // Solution
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const a = Math.random();
  console.log(a, isClient);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        {/* {a} */}
        {isClient && a}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname"></input>
          <input type="text" placeholder="Email Adress"></input>
          <input type="text" placeholder="Phone Number (Optional)"></input>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button onClick={() => {console.log("clicked")}}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
