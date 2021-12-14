import * as React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
  spacing: 8,
  palette: {
    primary: {
      light: '#4dabf5',
      main: '#2196f3',
      dark: '#1769aa',
      contrastText: '#fff',
    },
    secondary: {
      light: '#b22a00',
      main: '#ff3d00',
      dark: '#ff6333',
      contrastText: '#000',
    },
  },
  typography: {
    "fontFamily": `'Palanquin', "Helvetica", "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
});

export default function CustomStyles({children}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}