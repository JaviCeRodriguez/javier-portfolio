import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-raisinBlack w-full h-16">
      <div className="flex justify-center w-full h-full">
        <ul className="flex justify-evenly items-center w-full h-full text-white font-semibold text-xl">
          <li className="item-nav">
            <Link href="/">
              <a className="a-nav">🧉 INICIO</a>
            </Link>
          </li>
          <li className="item-nav">
            <Link href="/portfolio">
              <a className="a-nav">📁 PORTFOLIO</a>
            </Link>
          </li>
          <li className="item-nav">
            <Link href="/blog">
              <a className="a-nav">✍ BLOG</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
