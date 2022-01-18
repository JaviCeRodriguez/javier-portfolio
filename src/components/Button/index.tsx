import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  link: string;
  type: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, link, type }) => {
  return (
    <div className={`btn ${type ? "btn-primary" : "btn-secondary"}`}>
      <Link href={link}>
        <a target="_blank" >{text}</a>
      </Link>
    </div>
  );
};

export default Button;
