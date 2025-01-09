"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export const AnimatedAvatar = () => {
  const [isFade, setIsFade] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  return (
    <Avatar
      className="relative w-24 h-24 overflow-hidden"
      onMouseEnter={() => setIsFade(true)}
      onMouseLeave={() => setIsFade(false)}
    >
      <motion.div
        className="absolute w-full h-full"
        initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        animate={{
          clipPath: isFade
            ? "polygon(100% 0, 100% 0, 0 100%, 0 100%)"
            : "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/javo.jpeg"
          alt="Profile Picture"
          className="object-cover rounded-full"
          fill
          sizes="96px"
          priority
          onLoad={() => setImagesLoaded(true)}
        />
      </motion.div>

      <motion.div
        className="absolute w-full h-full"
        initial={{ clipPath: "polygon(100% 0, 100% 0, 0 100%, 0 100%)" }}
        animate={{
          clipPath: isFade
            ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            : "polygon(100% 0, 100% 0, 0 100%, 0 100%)",
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/javo_memoji.jpeg"
          alt="Profile Picture"
          className="object-cover rounded-full"
          fill
          sizes="96px"
          priority
          onLoad={() => setImagesLoaded(true)}
        />
      </motion.div>

      <AvatarFallback className={`${imagesLoaded ? "hidden" : "block"}`}>
        JR
      </AvatarFallback>
    </Avatar>
  );
};
