import LatestPosts from "@/components/LatestPosts";
import styles from "./page.module.scss";
import { getAllPosts } from "@/lib/posts";
import { getLatestPosts } from "@/lib/posts";
import HorizontalLine from "@/components/HorizontalLine";

export default async function Home() {
  const latestPosts = await getLatestPosts();
  const posts = latestPosts.data.posts.nodes;
  return (
    <main className={styles.main}>
      <div className={styles.title_container}>
        <HorizontalLine />
        <h1>MY BLOG</h1>
        <HorizontalLine />
      </div>
      <div className={styles.latest_posts_wrapper}>
        <LatestPosts posts={posts} />
      </div>
    </main>
  );
}
