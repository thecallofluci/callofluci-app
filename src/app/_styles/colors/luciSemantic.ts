import type { ThemeColors, SemanticBaseColors } from '../../../../types/index'
import {commonColors as common} from "./luciColors";
import { readableColor } from 'color2k'

const base: SemanticBaseColors = {
  light: {
    background: {
      DEFAULT: common.bone[50],
    },
    foreground: {
      DEFAULT: common.shadow[500],
    },
    divider: {
      DEFAULT: common.shadow[500],
    },
    focus: {
      DEFAULT: common.echo[500],
    },
    overlay: {
      DEFAULT: common.shadow[950],
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
      DEFAULT: common.shadow[950],
    },
    foreground: {
      DEFAULT: common.bone[50],
    },
    focus: {
      DEFAULT: common.echo[500],
    },
    overlay: {
      DEFAULT: common.shadow[950],
    },
    divider: {
      DEFAULT: common.bone[500],
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
      ...common.shadow,
      foreground: '#000000', // black
      DEFAULT: common.shadow[300],
    },
    primary: {
      ...common.luci,
      foreground: '#000000', // black
      DEFAULT: common.luci[500],
    },
    secondary: {
      ...common.echo,
      foreground: '#000000', // black
      DEFAULT: common.echo[500],
    },
    success: {
      ...common.tendril,
      foreground: '#000000', // black
      DEFAULT: common.tendril[500],
    },
    warning: {
      ...common.sulfuric,
      foreground: '#000000', // black
      DEFAULT: common.sulfuric[500],
    },
    danger: {
      ...common.flame,
      foreground: '#000000', // black
      DEFAULT: common.flame[500],
    },
  };
  
  export const themeColorsDark: ThemeColors = {
    ...base.dark,
    default: {
      ...common.bone,
      foreground: '#FFFFFF', // white
      DEFAULT: common.bone[700],
    },
    primary: {
      ...common.luci,
      foreground: '#FFFFFF', // white
      DEFAULT: common.luci[500],
    },
    secondary: {
      ...common.echo,
      foreground: '#FFFFFF', // white
      DEFAULT: common.echo[400],
    },
    success: {
      ...common.tendril,
      foreground: '#FFFFFF', // white
      DEFAULT: common.tendril[500],
    },
    warning: {
      ...common.sulfuric,
      foreground: '#FFFFFF', // white
      DEFAULT: common.sulfuric[500],
    },
    danger: {
      ...common.flame,
      foreground: '#FFFFFF', // white
      DEFAULT: common.flame[500],
    },
  };

export const semanticColors = {
  light: themeColorsLight,
  dark: themeColorsDark,
};