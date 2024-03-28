import React from "react";
import styles from "@/assets/styles/components/singlePost.module.scss";
import FeaturedImage from "./FeaturedImage";
import { formatDate } from "@/lib/formatDate";

interface SinglePostProps {
  post: any;
}

const SinglePost = ({ post }: SinglePostProps) => {
  console.log(post.data.post);
  const date = formatDate(post.data.post.date);
  const modified = formatDate(post.data.post.modified);

  return (
    <div className={styles.single_post_wrapper}>
      <h1>{post.data.post.title}</h1>
      <FeaturedImage
        post={post.data.post}
        size={{ width: 1130, height: 500 }}
      />
      <div className={styles.single_post_container}>
        <div className={styles.post_info}>
          <p>Author: {post.data.post.author.node.name}</p>
          <p>Published: {date}</p>
          <p>Modified: {modified}</p>
        </div>
        <div className={styles.post_content}>
          <div
            dangerouslySetInnerHTML={{
              __html: post.data.post.content,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
