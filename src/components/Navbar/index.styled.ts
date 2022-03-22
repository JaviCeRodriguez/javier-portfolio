import { Text } from "@nextui-org/react"
import { styled } from "@stitches/react"

export const ListItem = {
  margin: '0',
}

export const AnchorText = styled(Text, {
  display: 'block',
  position: 'relative',
  padding: '0.2rem 0',
  cursor: 'pointer',

  '&::after' : {
    content: '',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '110%',
    height: '0.2em',
    background: '#17c964',
    opacity: '1',
    transform: 'scale(0)',
    transformOrigin: 'center',
    transition: 'opacity 300ms, transform 300ms',
  },

  '&:hover::after' : {
    opacity: '1',
    transform: 'scale(1)'
  },

  '&:focus::after' : {
    opacity: '1',
    transform: 'scale(1)'
  }
})