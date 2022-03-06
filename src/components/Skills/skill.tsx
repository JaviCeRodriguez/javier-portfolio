import React from "react";
import { Tooltip } from "@nextui-org/react";
import Image from "next/image";
import { SkillWrapper } from "./index.styled";

interface SkillProps {
  skill: string;
  src: string;
}

export const Skill: React.FC<SkillProps> = ({ skill, src }) => {
  return (
    <Tooltip content={skill} placement="top">
      <div style={SkillWrapper}>
        <Image src={src} width="45px" height="45px" />
      </div>
    </Tooltip>
  );
};
