import { styled } from "@nextui-org/react";

export const StyledCard = {
  width: "300px",
  height: "auto",
  marginBottom: "20px",
  backgroundColor: "transparent",
  border: "3px solid #17c964"
}

export const StyledSkills = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@xs': {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    margin: '0 40px'
  },
  '@sm': {
    margin: '0 70px'
  }
})

export const StyledBody = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
}

export const TitleSection = {
  margin: '40px 10px 0 10px',
  padding: "20px 10px",
  color: "white",
  textAlign: "left",
  width: "100%",
}

export const SkillWrapper = {
  margin: "0 3px",
  WebkitTransition: "1s ease-in-out",
  MozTransition: "1s ease-in-out",
  OTransition: "1s ease-in-out",
  transition: "1s ease-in-out",
  "&:hover": {
    WebkitTransform: "translate(3em,0)",
    MozTransform: "translate(3em,0)",
    OTransform: "translate(3em,0)",
    transform: "translate(3em,0)",
  }
}