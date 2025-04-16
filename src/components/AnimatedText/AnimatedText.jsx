"use client";

import { animate, stagger, inView } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

const AnimatedTextWrapper = ({ children, as = "h1", className = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    document.fonts.ready.then(() => {
      const el = containerRef.current;
      el.style.visibility = "hidden";

      const { words } = splitText(el, {
        by: "word",
        className: "split-word",
      });

      inView(el, () => {
        el.style.visibility = "visible";
        animate(
          words,
          { opacity: [0, 1], y: [10, 0] },
          {
              type: "spring",
              duration: 2,
              bounce: 0,
              delay: stagger(0.05),
          }
        );
      });
    });
  }, []);

  const Tag = as;

  return (
    <>
      <Tag
        ref={containerRef}
        className={`${className} split-text`}
        style={{ visibility: "hidden" }}
      >
        {children}
      </Tag>

      <style>{`
        .split-word {
          display: inline-block;
          white-space: pre;
          will-change: transform, opacity;
        }
      `}</style>
    </>
  );
};

export default AnimatedTextWrapper;
