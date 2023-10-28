// theme.ts
import { createTheme } from '@nextui-org/react'

// Define your custom orange colorway
const orangeColorway = {
  orange50: '#FFF8F1',
  orange100: '#FFE0B2',
  orange200: '#FFCC80',
  orange300: '#FFB74D',
  orange400: '#FFA726',
  orange500: '#FF9800',
  orange600: '#FB8C00',
  orange700: '#F57C00',
  orange800: '#EF6C00',
  orange900: '#E65100',
};

export const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      ...orangeColorway,
      // Override primary color
      primary: orangeColorway.orange500,
      // ...  more colors
    },
  }
});

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      ...orangeColorway,
      // Override primary color
      primary: orangeColorway.orange500,
      // ...  more colors
    },
  }
});