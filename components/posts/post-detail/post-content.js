import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const dummy_post = {
  slug: "demo-next-js",
  title: "Demo nextJS post",
  image: "demo-nextjs-blog.jpg",
  date: "2022-02-10",
  content: "# This is a first post",
};

function PostContent() {
  const imagePath = `/images/posts/${dummy_post.slug}/${dummy_post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={dummy_post.title} image={imagePath} />
      <ReactMarkdown>{dummy_post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
