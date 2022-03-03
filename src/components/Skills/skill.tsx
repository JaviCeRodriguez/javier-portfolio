import React from "react";
import { Avatar, Tooltip } from "@nextui-org/react";

interface SkillProps {
  color: "primary" | "secondary" | "success" | "error" | "warning";
  skill: string;
  src: string;
}

export const Skill: React.FC<SkillProps> = ({ color, skill, src }) => {
  return (
    <Tooltip content={skill} placement="bottom" color="invert">
      <Avatar
        bordered
        color={color}
        size="lg"
        src={src}
        style={{ margin: "0 1px" }}
      />
    </Tooltip>
  );
};
