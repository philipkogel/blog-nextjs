import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

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

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={dummy_posts} />
    </Fragment>
  );
}

export default HomePage;

// 1) Hero section => Present outselves
// 2) Featuered Posts section
