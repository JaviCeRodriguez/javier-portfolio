import React from "react";
import Image from "next/image";
import { Container, Text } from "@nextui-org/react";

export default function Custom404() {
  return (
    <Container
      css={{
        padding: "0",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Text
        h2
        css={{
          display: "flex",
          color: "$accents2",
          fontWeight: "700",
        }}
      >
        Upss...&nbsp;
        <Text h2 color="$error">
          error 404
        </Text>
      </Text>
      <Text
        h4
        css={{
          color: "$accents2",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Es probable que la página que buscas no exista.
      </Text>
      <Text
        h4
        css={{
          display: "-webkit-inline-box",
          color: "$accents2",
          fontWeight: "700",
          margin: "0 0 2rem 0",
          textAlign: "center",
        }}
      >
        Tomate un&nbsp;
        <Text h4 color="$success">
          mate
        </Text>
        &nbsp;y vuelve al inicio!
      </Text>
      <Image src="/mate.png" width="400px" height="400px" />
    </Container>
  );
}
