import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

export const MainButton = styled(MuiButton)(() => ({
  color: 'white',
  background: '#FF4C60',
  padding: '12px 32px',
  height: '42px',
  verticalAlign: 'middle',
  borderRadius: '60px',
  transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
  outline: 'none',
  '&:focus': {
    outline: 'none',
  },
  fontWeight: '600',
  fontSize: 16,
  textTransform: 'none',
  '&:hover': {
    background: '#FF4C60',
    opacity: 0.8,
  }
}));