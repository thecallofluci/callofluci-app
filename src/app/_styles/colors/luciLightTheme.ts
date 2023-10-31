// luciLightTheme.ts
import { luci, luciCSSVariables } from './luciColors'
import { ThemeColors } from '../../../types';

export const luciLightTheme: ThemeColors = {
    extend: 'light', // Inherit default values from light theme
    colors: {
        background: luci['50'],
        foreground: luci['700'],
        primary: {
            // Define the color palette for the 'primary' color.
            50: luci['50'],
            100: luci['100'],
            200: luci['200'],
            300: luci['300'],
            400: luci['400'],
            500: luci['500'],
            600: luci['600'],
            700: luci['700'],
            800: luci['800'],
            900: luci['900'],
            950: luci['950'],
            DEFAULT: luci['500'],
            foreground: luci['50'],
        },
        secondary: {
            foreground: luci['600'],
            DEFAULT: luci['400'],
        },
        focus: {
            DEFAULT: luci['500'],
        },
        overlay: {
            DEFAULT: luci['200'],
        },
        divider: {
            DEFAULT: luci['700'],
        },
        content1: {
            DEFAULT: luci['300'],
            foreground: luci['800'],
        },
        content2: {
            DEFAULT: luci['400'],
            foreground: luci['700'],
        },
        content3: {
            DEFAULT: luci['500'],
            foreground: luci['200'],
        },
        content4: {
            DEFAULT: luci['600'],
            foreground: luci['100'],
        },
        success: {
            foreground: luci['500'],
            DEFAULT: luci['300'],
        },
        warning: {
            foreground: luci['600'],
            DEFAULT: luci['400'],
        },
        danger: {
            foreground: luci['500'],
            DEFAULT: luci['300'],
        },
        error: {
            foreground: luci['500'],
            DEFAULT: luci['300'],
        },
    },
    layout: {
        disabledOpacity: '0.3',
        radius: {
            small: '4px',
            medium: '6px',
            large: '8px',
        },
        borderWidth: {
            small: '1px',
            medium: '2px',
            large: '3px',
        },
    },
}
