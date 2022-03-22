import React from "react";
import Link from "next/link";
import { Container } from "@nextui-org/react";
import { AnchorText, ListItem } from "./index.styled";

const Navbar: React.FC = () => {
  return (
    <Container
      css={{
        padding: 0,
      }}
    >
      <Container
        css={{
          padding: 0,
          maxWidth: "368px",
          width: "100%",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "10px 0",
          }}
        >
          <li style={ListItem}>
            <Link href="/">
              <AnchorText b color="$success">
                🧉 INICIO
              </AnchorText>
            </Link>
          </li>
          {/* <li style={ListItem}>
            <Link href="/">
              <AnchorText b color="$success">
                🧉 PROYECTOS
              </AnchorText>
            </Link>
          </li> */}
          <li style={ListItem}>
            <Link href="/blog">
              <AnchorText b color="$success">
                ✍ BLOG
              </AnchorText>
            </Link>
          </li>
        </ul>
      </Container>
    </Container>
  );
};

export default Navbar;
