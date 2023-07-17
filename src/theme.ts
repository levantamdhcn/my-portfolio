import {
  createTheme,
} from "@mui/material/styles";
import { orange } from '@mui/material/colors';

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
    breakpoints: {
      values: {
        xs: number,
        sm: number,
        md: number,
        lg: number,
        xl: number,
      },
    },
    color: {
      mainColor: string,
      yellow: string,
      white: string,
      danger: string,
      textDark: string,
      lightGrey: string,
      blueColor: string,
      lightComet: string,
      blue: string,
    },
    shadow: {
      main: string;
    }
  }
}

const globaltheme = createTheme({
  typography: {
    "fontFamily": `"Rubik", sans-serif;`,
  },
  status: {
    danger: orange[500],
  },
  breakpoints: {
    values: {
      xs: 720,
      sm: 960,
      md: 1140,
      lg: 1080,
      xl: 1080,
    },
  },
  color: {
    mainColor: '#353353',
    yellow: '#FFD15C',
    white: '#FFFFFF',
    danger: '#FF4C60',
    textDark: '#454360',
    lightGrey: '#DEDEEA',
    blueColor: '#6C6CE5',
    lightComet: '#5E5C7F',
    blue: '#7a7ae7',
  },
  shadow: {
    main: '0px 5px 20px 0px rgba(69, 67, 96, 0.1)'
  }
});

export default globaltheme;