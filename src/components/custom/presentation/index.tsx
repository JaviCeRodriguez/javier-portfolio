"use client";

import React from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Presentation = () => {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
      <Image
        src="/images/javo.jpg"
        alt="profile-pic"
        width={2320}
        height={1740}
        className="rounded-2xl justify-self-center"
        loading="lazy"
        quality={100}
      />
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold mb-2 lg:text-5xl">
          Javier Rodriguez
        </h1>
        <h2 className="text-xl mb-4 font-semibold lg:text-2xl">
          Frontend Developer and Data Engineer
        </h2>
        <p className="mb-8">
          I&apos;m a frontend developer with a passion for building beautiful
          and functional user interfaces. Also, as a data engineer, I&apos;m
          interested in building great projects with data about anything.
          I&apos;m currently working at&nbsp;
          <a
            href="https://incubator.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-400"
          >
            Incubator
          </a>
          &nbsp;since 2021 as a tech leader frontend.
        </p>
        <h3 className="text-lg mb-4 lg:text-xl">
          You can find me on these social networks and platforms:
        </h3>
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://twitter.com/javicerodriguez"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="text-blue-400" />
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/JaviCeRodriguez"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:javicerodriguez@gmail.com">
                <Mail className="text-red-600" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
