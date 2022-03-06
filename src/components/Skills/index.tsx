import React from "react";
import { Card, Text } from "@nextui-org/react";
import { Skill } from "./skill";
import {
  StyledCard,
  StyledBody,
  StyledSkills,
  TitleSection,
} from "./index.styled";

interface CardHeaderProp {
  title: string;
}

export const CardHeader: React.FC<CardHeaderProp> = ({ title }) => {
  return (
    <Card.Header>
      <Text h4 style={{ fontWeight: "bold", color: "white" }}>
        {title}
      </Text>
    </Card.Header>
  );
};

const Skills: React.FC = () => {
  return (
    <StyledSkills>
      <Text h2 css={TitleSection}>
        Tengo conocimientos en:
      </Text>

      <Card css={StyledCard}>
        <CardHeader title="Lenguajes" />
        <Card.Body css={StyledBody}>
          <Skill
            skill="Typescript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          />
          <Skill
            skill="Python"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          />
        </Card.Body>
      </Card>

      <Card css={StyledCard}>
        <CardHeader title="Bases de datos" />
        <Card.Body css={StyledBody}>
          <Skill
            skill="PostgreSQL"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
          />
          <Skill
            skill="Firebase"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
          />
          <Skill
            skill="MongoDB"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          />
        </Card.Body>
      </Card>

      <Card css={StyledCard}>
        <CardHeader title="Frontend" />
        <Card.Body css={StyledBody}>
          <Skill
            skill="React.js"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          />
          <Skill
            skill="Next.js"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          />
          <Skill
            skill="Gatsby"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg"
          />
          <Skill
            skill="Tailwind CSS"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          />
          <Skill
            skill="Styled Components"
            src="https://emoji.aranja.com/static/emoji-data/img-apple-160/1f485.png"
          />
        </Card.Body>
      </Card>

      <Card css={StyledCard}>
        <CardHeader title="Backend" />
        <Card.Body css={StyledBody}>
          <Skill
            skill="Django"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg"
          />
          <Skill
            skill="Node.js"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
        </Card.Body>
      </Card>

      <Card css={StyledCard}>
        <CardHeader title="Utilidades" />
        <Card.Body css={StyledBody}>
          <Skill
            skill="Storybook"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg"
          />
          <Skill
            skill="Trello"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg"
          />
          <Skill
            skill="Jira"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
          />
        </Card.Body>
      </Card>
    </StyledSkills>
  );
};

export default Skills;
