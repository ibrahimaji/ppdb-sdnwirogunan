"use client";
import { Contact } from "@/components/contact";
import { Content } from "@/components/content";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Hero />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 3 }}
        viewport={{ once: true }}
      >
        <Content />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 3 }}
        viewport={{ once: true }}
      >
        <Gallery />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 3 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>
    </>
  );
}
