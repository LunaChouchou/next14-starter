import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const BlogPage = ({ params, searchParams }) => {
  console.log(params); // {}
  console.log(searchParams); // search querys
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;
