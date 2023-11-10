import type { ThemeColors, SemanticBaseColors } from '../../../../types/index'
import {commonColors as common} from "./luciColors";

const base: SemanticBaseColors = {
  light: {
    background: {
      DEFAULT: common.bone[50],
    },
    foreground: {
      DEFAULT: common.shadow[900],
    },
    divider: {
      DEFAULT: common.shadow[500],
    },
    focus: {
      DEFAULT: common.luci[700],
    },
    overlay: {
      DEFAULT: common.shadow[300],
      foreground: common.bone[50],
    },
    content1: {
      DEFAULT: common.bone[50],
      foreground: common.shadow[800],
    },
    content2: {
      DEFAULT: common.shadow[100],
      foreground: common.shadow[800],
    },
    content3: {
      DEFAULT: common.shadow[200],
      foreground: common.shadow[700],
    },
    content4: {
      DEFAULT: common.shadow[300],
      foreground: common.shadow[600],
    },
  },
dark: {
  background: {
    DEFAULT: common.luci[500],
  },
  foreground: {
    DEFAULT: common.bone[50],
  },
  focus: {
    DEFAULT: common.bone[300],
  },
  overlay: {
    DEFAULT: common.shadow[900],
  },
  divider: {
    DEFAULT: common.shadow[800],
  },
  content1: {
    DEFAULT: common.shadow[900],
    foreground: common.shadow[50],
  },
  content2: {
    DEFAULT: common.shadow[800],
    foreground: common.shadow[100],
  },
  content3: {
    DEFAULT: common.shadow[700],
    foreground: common.shadow[200],
  },
  content4: {
    DEFAULT: common.shadow[600],
    foreground: common.shadow[300],
  },
},
};

  export const themeColorsLight: ThemeColors = {
    ...base.light,
    default: {
      ...common.luci,
      foreground: common.luci[500],
      DEFAULT: common.luci[500],
    },
    primary: {
      ...common.luci,
      foreground: 'black', // black
      DEFAULT: common.luci[500],
    },
    secondary: {
      ...common.luci,
      foreground: 'black', // black
      DEFAULT: common.luci[500],
    },
    success: {
      ...common.tendril,
      foreground: 'black', // black
      DEFAULT: common.tendril[500],
    },
    warning: {
      ...common.sulfuric,
      foreground: 'black', // black
      DEFAULT: common.sulfuric[500],
    },
    danger: {
      ...common.flame,
      foreground: 'black', // black
      DEFAULT: common.flame[500],
    },
  };
  
  export const themeColorsDark: ThemeColors = {
    ...base.dark,
    default: {
      ...common.shadow,
      foreground: 'white', // white
      DEFAULT: common.shadow[700],
    },
    primary: {
      ...common.bone,
      foreground: 'black', // white
      DEFAULT: common.bone[100],
    },
    secondary: {
      ...common.bone,
      foreground: 'white', // white
      DEFAULT: common.bone[200],
    },
    success: {
      ...common.tendril,
      foreground: 'white', // white
      DEFAULT: common.tendril[500],
    },
    warning: {
      ...common.sulfuric,
      foreground: 'white', // white
      DEFAULT: common.sulfuric[500],
    },
    danger: {
      ...common.flame,
      foreground: 'white', // white
      DEFAULT: common.flame[500],
    },
  };

export const semanticColors = {
  light: themeColorsLight,
  dark: themeColorsDark,
};