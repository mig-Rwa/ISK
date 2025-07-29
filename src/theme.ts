// src/theme.ts
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: { main: '#003e9c' },   // Sekolah‑blue
    secondary: { main: '#ffc700' }, // Sekolah‑yellow
  },
  typography: {
    button: {
      textTransform: 'none',       // keep button text as-is
    },
  },
})
