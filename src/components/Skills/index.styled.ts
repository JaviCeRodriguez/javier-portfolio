import { styled, Card } from "@nextui-org/react";

export const StyledCard = styled(Card, {
  width: "300px",
  height: "auto",
  marginBottom: "20px",
})

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

export const TitleSection = {
  margin: '40px 10px 0 10px',
  padding: "20px 10px",
  color: "white",
  textAlign: "left",
  width: "100%",
}