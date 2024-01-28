"use client";
import { Contact } from "@/components/contact";
import { Content } from "@/components/content";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Testimonial } from "@/components/testimonial";

export default function Home() {
  return (
    <>
      {/*<motion.div
        //     initial={{ opacity: 0 }}
        //     whileInView={{
        //       opacity: 1,
        //       transition: {
        //         ease: "linear",
        //       },
        //     }}
        //     viewport={{ once: true, amount: 0.8 }}
        //   >
        <Hero />
      </motion.div >
      */}
      <Hero />

      <Content />

      <Gallery />

      <Testimonial />

      <Contact />
    </>
  );
}
