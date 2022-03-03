import React from "react";
import { Avatar, Link, Text } from "@nextui-org/react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        paddingBottom: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ margin: "0 10px " }}>
          <Link
            href="https://www.linkedin.com/in/rodriguezjavierc/"
            target="_blank"
            rel="noreferrer"
          >
            <Avatar
              style={{ cursor: "pointer" }}
              size="sm"
              squared
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            />
          </Link>
        </div>
        <div style={{ margin: "0 10px " }}>
          <Link
            href="mailto:javicerodriguez@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Avatar
              style={{ cursor: "pointer" }}
              size="sm"
              squared
              src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png"
            />
          </Link>
        </div>
        <div style={{ margin: "0 10px " }}>
          <Link
            href="https://github.com/JaviCeRodriguez/"
            target="_blank"
            rel="noreferrer"
          >
            <Avatar
              style={{ cursor: "pointer" }}
              size="sm"
              squared
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            />
          </Link>
        </div>
        <div style={{ margin: "0 10px " }}>
          <Link
            href="https://twitter.com/javicerodriguez"
            target="_blank"
            rel="noreferrer"
          >
            <Avatar
              style={{ cursor: "pointer" }}
              size="sm"
              squared
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
            />
          </Link>
        </div>
      </div>
      <Text size="16px" color="white" style={{ textAlign: "center" }}>
        Portfolio hecho con muchos matecitos 🧉 {new Date().getFullYear()}
      </Text>
    </footer>
  );
};

export default Footer;
