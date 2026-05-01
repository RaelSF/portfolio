'use client';

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function Typewriter({ texts }: { texts: string[] }) {
  const [textIndex, setTextIndex] = useState(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => texts[textIndex].slice(0, latest));
  const [done, setDone] = useState(false);

  useEffect(() => {
    const controls = animate(count, texts[textIndex].length, {
      type: "tween",
      duration: 2,
      ease: "easeInOut",
      onComplete: () => {
        setDone(true);
        setTimeout(() => {
          setDone(false);
          const nextIndex = (textIndex + 1) % texts.length;
          count.set(0);
          setTextIndex(nextIndex);
        }, 2000); // Tempo que o texto fica parado antes de mudar
      },
    });
    return controls.stop;
  }, [textIndex, count, texts]);

  return (
    <span className="inline-flex">
      <motion.span>{displayText}</motion.span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="ml-1 inline-block w-0.5 h-[1.2em] bg-accent"
      />
    </span>
  );
}