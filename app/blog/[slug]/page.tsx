import { getSinglePost } from "@/lib/posts";
import SinglePost from "@/components/SinglePost";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getSinglePost(params.slug);
  return (
    <div>
      <SinglePost post={post} />
    </div>
  );
}
