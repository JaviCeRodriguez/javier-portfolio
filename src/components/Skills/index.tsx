import React from "react";
import { Card, Text } from "@nextui-org/react";
import { Skill } from "./skill";
import { StyledCard, StyledSkills, TitleSection } from "./index.styled";

const Skills: React.FC = () => {
  return (
    <StyledSkills>
      <Text h2 css={TitleSection}>
        Tengo conocimientos en:
      </Text>

      <StyledCard color="primary" style={{ width: "300px" }}>
        <Card.Header>
          <Text h4 style={{ fontWeight: "bold" }}>
            Lenguajes
          </Text>
        </Card.Header>
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Skill
            color="primary"
            skill="Typescript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          />
          <Skill
            color="primary"
            skill="Python"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          />
        </Card.Body>
      </StyledCard>

      <StyledCard color="secondary" style={{ width: "300px" }}>
        <Card.Header>
          <Text h4 style={{ fontWeight: "bold" }}>
            Bases de datos
          </Text>
        </Card.Header>
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Skill
            color="secondary"
            skill="PostgreSQL"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
          />
          <Skill
            color="secondary"
            skill="Firebase"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
          />
          <Skill
            color="secondary"
            skill="MongoDB"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          />
        </Card.Body>
      </StyledCard>

      <StyledCard color="success" style={{ width: "300px" }}>
        <Card.Header>
          <Text h4 style={{ fontWeight: "bold" }}>
            Frontend
          </Text>
        </Card.Header>
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Skill
            color="success"
            skill="React.js"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          />
          <Skill
            color="success"
            skill="Next.js"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          />
          <Skill
            color="success"
            skill="Gatsby"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg"
          />
          <Skill
            color="success"
            skill="Tailwind CSS"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          />
          <Skill
            color="success"
            skill="Styled Components"
            src="https://emoji.aranja.com/static/emoji-data/img-apple-160/1f485.png"
          />
        </Card.Body>
      </StyledCard>

      <StyledCard color="error" style={{ width: "300px" }}>
        <Card.Header>
          <Text h4 style={{ fontWeight: "bold" }}>
            Backend
          </Text>
        </Card.Header>
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Skill
            color="error"
            skill="Django"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg"
          />
          <Skill
            color="error"
            skill="Node.js"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
        </Card.Body>
      </StyledCard>

      <StyledCard color="warning" style={{ width: "300px" }}>
        <Card.Header>
          <Text h4 style={{ fontWeight: "bold" }}>
            Utilidades
          </Text>
        </Card.Header>
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Skill
            color="warning"
            skill="Storybook"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg"
          />
          <Skill
            color="warning"
            skill="Trello"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg"
          />
          <Skill
            color="warning"
            skill="Jira"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
          />
        </Card.Body>
      </StyledCard>
    </StyledSkills>
  );
};

export default Skills;
