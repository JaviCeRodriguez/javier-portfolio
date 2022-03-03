import React from "react";
import NextLink from "next/link";
import { Text, Avatar, Card, Link } from "@nextui-org/react";
import {
  SectionContainer,
  AboutHeader,
  CustomAvatar,
  CustomCard,
} from "./index.styled";

const About: React.FC = () => {
  return (
    <SectionContainer>
      <AboutHeader>
        <Avatar src="/perfil.jpg" css={CustomAvatar} borderWeight="black" />
        <div className="headers">
          <Text h1 color="success">
            JAVIER RODRIGUEZ
          </Text>
          <Text h2 color="white">
            Fullstack Dev
          </Text>
          <Text h3 color="white">
            React + Python
          </Text>
        </div>
      </AboutHeader>
      <Card css={CustomCard}>
        <Text h4>
          HOLA! <span className="hand">👋</span>
        </Text>
        <Text>
          De Buenos Aires, Argentina. En el rubro del desarrollo e ingeniería,
          ganando constantemente experiencia y conocimientos en proyectos
          interesantes, ya sean propios o grupales. Participo de iniciativas en
          comunidades IT y comparto buenos momentos con amigos (con matecitos de
          por medio, claro 🧉)
        </Text>
        <Card.Footer>
          <Text>
            Te invito a ver &nbsp;
            <NextLink href="/">
              <Link block color="primary">
                mis proyectos 🙌
              </Link>
            </NextLink>
            &nbsp; (WIP 🚧)
          </Text>
        </Card.Footer>
      </Card>
    </SectionContainer>
  );
};

export default About;
