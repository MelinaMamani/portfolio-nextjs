"use client";

import { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedSection({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
