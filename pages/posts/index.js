import AllPosts from "../../components/posts/all-posts";

const dummy_posts = [
  {
    slug: "demo-next-js",
    title: "Demo nextJS post",
    image: "demo-nextjs-blog.jpg",
    excerpt:
      "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with server site rendering",
    date: "2022-02-10",
  },
  {
    slug: "demo2-next-js",
    title: "Demo nextJS post",
    image: "demo-nextjs-blog.jpg",
    excerpt:
      "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with server site rendering",
    date: "2022-02-10",
  },
  {
    slug: "demo3-next-js",
    title: "Demo nextJS post",
    image: "demo-nextjs-blog.jpg",
    excerpt:
      "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with server site rendering",
    date: "2022-02-10",
  },
  {
    slug: "demo4-next-js",
    title: "Demo nextJS post",
    image: "demo-nextjs-blog.jpg",
    excerpt:
      "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with server site rendering",
    date: "2022-02-10",
  },
];

function AllPostsPage() {
  return <AllPosts posts={dummy_posts} />;
}

export default AllPostsPage;
