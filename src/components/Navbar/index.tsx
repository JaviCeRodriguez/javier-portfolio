import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { NavbarContainer, NavbarWrapper, CustomBtn } from "./index.styled";

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <li>
          <Link href="/">
            <Button color="success" auto ghost css={CustomBtn}>
              🧉 INICIO
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Button color="success" auto ghost css={CustomBtn}>
              📁 PORTFOLIO
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Button color="success" auto ghost css={CustomBtn}>
              ✍ BLOG
            </Button>
          </Link>
        </li>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
