import FeaturedImage from "./FeaturedImage";
import styles from "@/assets/styles/components/singlePostReview.module.scss";
import { formatDate } from "@/lib/formatDate";

interface SinglePostReviewProps {
  post: any;
  isLatest?: boolean;
  size?: { width: number; height: number };
}

const MAX_EXCERPT_LENGTH = 240;

const SinglePostReview = ({ post, isLatest, size }: SinglePostReviewProps) => {
  const truncatedExcerpt =
    post.excerpt.length > MAX_EXCERPT_LENGTH
      ? post.excerpt.substring(0, MAX_EXCERPT_LENGTH) + "..." // Truncate the excerpt if it's longer than the maximum length
      : post.excerpt;

  const formatedDate = formatDate(post.date);

  return (
    <li
      className={`${styles.post_container} ${
        !isLatest ? styles.small_container : ""
      }`}
      key={post.slug}
    >
      <FeaturedImage post={post} isLatest={isLatest} size={size} />
      {isLatest ? (
        <>
          <p className={styles.post_date}>{formatedDate}</p>
          <h3>{post.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: truncatedExcerpt }}></div>
        </>
      ) : (
        <div className={styles.small_container_inner}>
          <p className={styles.post_date}>{formatedDate}</p>
          <h3>{post.title}</h3>
        </div>
      )}
    </li>
  );
};

export default SinglePostReview;
