// luciDarkTheme.ts
import { luci, luciCSSVariables } from './luciColors';
import { ThemeColors } from '../../../types';

export const luciDarkTheme: ThemeColors = {
    extend: 'dark', // Inherit default values from dark theme
    colors: {
        background: luci['500'],
        foreground: luci['50'],
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
            DEFAULT: luci['100'],
            foreground: luci['950'],
        },
        secondary: {
            foreground: luci['300'],
            DEFAULT: luci['500'],
        },
        focus: {
            DEFAULT: luci['400'],
        },
        overlay: {
            DEFAULT: luci['700'],
        },
        divider: {
            DEFAULT: luci['800'],
        },
        content1: {
            DEFAULT: luci['600'],
            foreground: luci['100'],
        },
        content2: {
            DEFAULT: luci['500'],
            foreground: luci['200'],
        },
        content3: {
            DEFAULT: luci['300'],
            foreground: luci['50'],
        },
        content4: {
            DEFAULT: luci['400'],
            foreground: luci['100'],
        },
        success: {
            foreground: luci['400'],
            DEFAULT: luci['100'],
        },
        warning: {
            foreground: luci['300'],
            DEFAULT: luci['500'],
        },
        danger: {
            foreground: luci['400'],
            DEFAULT: luci['100'],
        },
        error: {
            foreground: luci['400'],
            DEFAULT: luci['100'],
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