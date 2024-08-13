import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/20764049/pexels-photo-20764049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/20764049/pexels-photo-20764049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
          </div>
        <div className={styles.content}>
          Nostrud labore laborum excepteur laborum tempor Lorem ullamco duis
          laboris consequat et. Nostrud pariatur reprehenderit incididunt irure
          cillum anim qui do amet proident. Sint veniam occaecat ex eiusmod ex
          do Lorem laboris officia sit tempor tempor eu. Anim ullamco incididunt
          ex commodo.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
