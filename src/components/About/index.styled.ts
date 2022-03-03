import { styled } from "@nextui-org/react";

export const SectionContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const AboutHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  margin: '50px 0',
  width: '100%',
  maxWidth: "850px",
  '@smMax': {
    flexDirection: 'column',
    alignItems: 'center',
  },

  '.headers': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: '15px 0',
    textAlign: 'center',
  }
})

export const CustomAvatar = {
  width: "170px",
  height: "auto",
  border: "5px solid #17c964",
  '@xs': {
    width: "250px",
  },
  '@sm': {
    width: "300px",
    border: "7px solid #17c964",
  }
}

export const CustomCard = {
  backgroundColor: "#f0f0f0",
  width: "850px",
  '@smMax': {
    width: "90%",
  }
}