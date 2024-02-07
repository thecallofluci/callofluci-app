// import colors from './colors';
// import typography from './typography';

import { testThemes } from '../colors/semantic'

/* 
//  const theme = {
//    colors,
//    typography,
  // You can also define other theme-related settings here
//  };

//  export default theme;
//  */

// Assuming testThemes has been imported correctly

export const NEWluciLightTheme = {
    extend: "light", // Inherit default values from the light theme
    colors: {
        ...testThemes.lightTest, // Use the light theme colors from testThemes
        // Add any additional color definitions here if necessary
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
};

// Assuming testThemes has been imported correctly

export const NEWluciDarkTheme = {
    extend: "dark", // Inherit default values from the dark theme
    colors: {
        ...testThemes.darkTest, // Use the dark theme colors from testThemes
        // Add any additional color definitions here if necessary
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
};

