"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface Challenger {
  id: string;
  name: string;
  logo: string;
  alt: string;
}

export default function TeamLogoScroll() {
  const t = useTranslations("Elite");
  const challengers: Challenger[] = t.raw("challengers");
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const controls = useAnimationControls();

  const updateWidth = useCallback(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth);
    }
  }, []);

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [updateWidth]);

  useEffect(() => {
    if (containerWidth > 0) {
      controls.start({
        x: [0, -containerWidth / 2],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    }
  }, [containerWidth, controls]);

  return (
    <div className="container mx-auto px-2">
      <div
        id="schedule"
        className="mx-auto overflow-hidden rounded-lg shadow-xl py-10 md:py-20"
      >
        <div className="relative">
          <motion.div ref={containerRef} className="flex" animate={controls}>
            {[...challengers, ...challengers].map((challenger, index) => (
              <div
                className="flex flex-col space-y-2 justify-center items-center flex-shrink-0"
                key={`${challenger.name}-${index}`}
              >
                <Image
                  src={challenger.logo}
                  alt={challenger.alt}
                  width={100}
                  height={100}
                  className="px-10 h-16 w-auto"
                />
                <p className="text-white text-xs font-bold">
                  {challenger.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
