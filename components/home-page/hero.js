import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/test-img.jpg"
          alt="An image showing Philip"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Philip</h1>
      <p>I blog about web development</p>
    </section>
  );
}

export default Hero;
