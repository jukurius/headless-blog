import styles from "@/assets/styles/components/latestPosts.module.scss";
import FeaturedImage from "./FeaturedImage";
import HorizontalLine from "./HorizontalLine";
import SinglePostReview from "./SinglePostReview";

interface LatestPostsProps {
  posts: any;
}
const LatestPosts = ({ posts }: LatestPostsProps) => {
  const postGrid = posts.map((post: any, index: any) => {
    if (index === 0) {
      return (
        <SinglePostReview
          post={post}
          isLatest={true}
          size={{ width: 600, height: 400 }}
        />
      );
    }
    return (
      <>
        <SinglePostReview post={post} size={{ width: 240, height: 168 }} />
        {index === posts.length - 1 ? null : <HorizontalLine />}
      </>
    );
  });

  const firstPost = postGrid.shift(); // Shift the first post
  const otherPosts = postGrid; // The rest of the posts

  return (
    <div className={styles.latest_posts_wrapper}>
      <div className={styles.large_post_container}>
        <ul>{firstPost}</ul>
      </div>
      <div className={styles.normal_post_container}>
        <ul>{otherPosts}</ul>
      </div>
    </div>
  );
};

export default LatestPosts;
