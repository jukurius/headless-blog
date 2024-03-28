import Image from "next/image";
import Link from "next/link";
import styles from "@/assets/styles/components/featuredImage.module.scss";

interface FeaturedImageProps {
  post: any;
  isLatest?: boolean;
  size?: { width: number; height: number };
}

const FeaturedImage = ({ post, isLatest, size }: FeaturedImageProps) => {
  console.log(size);
  var img;
  const defaultFeaturedImage =
    "http://localhost/wordpress/wp-content/uploads/2024/03/pexels-jess-bailey-designs-768474.jpg";
  const defaultWidth = 240;
  const defaultHeight = 168;

  if (post.featuredImage) {
    let url = post.featuredImage.node.mediaItemUrl;
    if (size) {
      img = {
        src: url,
        width: size.width,
        height: size.height,
      };
    } else {
      img = {
        src: url,
        width: defaultWidth,
        height: defaultHeight,
      };
    }
  } else {
    img = {
      src: defaultFeaturedImage,
      width: defaultWidth,
      height: defaultHeight,
    };
  }
  return (
    <Link className={styles.featured_image} href={`/blog/${post.slug}`}>
      <Image
        src={img.src}
        alt={post.title}
        width={img.width}
        height={img.height}
        className={styles.image}
      />
    </Link>
  );
};

export default FeaturedImage;
