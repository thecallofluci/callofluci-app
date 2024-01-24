# Project Structure

The project adopts Next.js's [unopinionated approach](https://nextjs.org/docs/app/building-your-application/routing/colocation) towards project organization and file colocation. The codebase for Call Of Luci is organized as follows.

## Root Directory

The structure of the project codebase is divided into two root-level directories: `public` and `src`:

| **Root-Level Directories** |                                                     |
| :------------------------- | :-------------------------------------------------- |
| `/public`                  | static assets served                                |
| `/src`                     | source code                                         |

## Root Files

The root-level files in the project include essential configurations for the application's environment, coding standards, dependencies, and metadata:

| **Root-Level Files**       |                                                     |
| :------------------------- | :-------------------------------------------------- |
| `/.eslintrc.json`          | Configuration for ESLint to enforce code quality    |
| `/.gitignore`              | Specifies files to ignore by Git                    |
| `/.prettierignore`         | Specifies files to ignore by Prettier               |
| `/.prettierrc`             | Configuration file for Prettier code formatter      |
| `/next.config.js`          | Configuration file for customizing Next.js behavior |
| `/package-lock.json`       | Locks versions of project dependencies              |
| `/package.json`            | Defines project dependencies and scripts            |
| `/postcss.config.js`       | Configuration file for PostCSS                      |
| `/README.md`               | Project description                                 |
| `/tailwind.config.js`      | Configuration file for Tailwind CSS framework       |
| `/tsconfig.json`           | Configuration file for TypeScript compiler options  |

## Main Directories

The project's source code `/src` directory is divided into three main directories: `app`, `config`, and `types`:

| #  | **Main Directories** |                                                                                                      |
| -- | :------------------- | :--------------------------------------------------------------------------------------------------- |
| 1  | `/src/app`           | Next.js [App Router](https://nextjs.org/docs/app), containing routes, components, hooks, and styles. |
| 2  | `/src/config`        | Configuration files that define global settings and constants.                                       |
| 3  | `/src/types`         | TypeScript type definitions and interfaces.                                                          |

## 1. app Directory

The `app` directory in the Call of Luci project is the central hub for the Next.js App Router, organizing the application's primary routes and housing the core functional elements of the application.

| #    | **app Directory**     | Description                                   |
| ---- | :-------------------- | :-------------------------------------------- |
| 1    | `/app`                | Next.js App Router                            |
| 1.1  | `/app/(routes)`       | Primary route group                           |
| 1.2  | `/app/components`     | Reusable React components                     |
| 1.3  | `/app/hooks`          | Custom React hooks                            |
| 1.4  | `/app/lib`            | Shared library                                |
| 1.5  | `/app/styles`         | Global styles, colors, fonts, themes          |
| 1.6  | `/app/utils`          | Utility functions                             |
| 1.7  | `/app/working`        | Temp directory containing works in progress   |

### 1.1 (routes)

The `(routes)` folder within the `app` directory organizes a collection of routes ...

### 1.2 components

The `components` folder within the `app` directory organizes a collection of reusable React components that form the building blocks of the application's user interface. It is organized into subdirectories that categorize components based on their functionality and usage within the application:

-   `forms`: components related to form elements and structures.
-   `layout`: components that define the structural layout of the application.
-   `ui`: user interface components that are used across the application.
-   `providers`: context providers that manage and distribute application state or functionality to components.

| **components**              |                                                     |
| :-------------------------- | :-------------------------------------------------- |
| `/app/components`           | reusable React components                           |
|                             |                                                     |
| `/components/forms`         | React form components using React Hook Form library |
| `/components/layout`        | root layout components                              |
| `/components/providers`     | initializing and configuring global providers       |
| `/components/ui`            | custom React components tailored from NextUI        |

| **`/app/components`**       | **reusable React components**                       |
| :-------------------------- | :-------------------------------------------------- |
|                             |                                                     |
| ( )( )`/forms`                  | React form components using React Hook Form library |
| ( )( )`/layout`                 | root layout components                              |
| ( )( )`/providers`              | initializing and configuring global providers       |
| ( )( )`/ui`                     | custom React components tailored from NextUI        |

### 1.2.1 components/forms

The `forms` folder within the `components` directory organizes ...

### 1.2.2 components/layout

The `layout` folder within the `components` directory organizes ...

### 1.2.3 components/providers

The `providers` folder within the `components` directory organizes ...

### 1.2.4 components/ui

The `ui` folder within the `components` directory organizes ...

### 1.3 hooks

The `hooks` directory within the `app` folder organizes the application’s custom React hooks.

| **hooks**                          |                                                                                        |
| :--------------------------------- | :------------------------------------------------------------------------------------- |
|                                    |                                                                                        |
| `/app/hooks/`                      | Custom React hooks                                                                     |
|                                    |                                                                                        |
| `/app/hooks/useObservationForm.ts` | Custom hook for managing the observation form state, validation, and submission logic. |

### 1.4 lib

The `lib` directory within the `app` folder organizes the shared library.

| **lib**                                 |                                       |
| :-------------------------------------- | :------------------------------------ |
|                                         |                                       |
| `/app/lib/`                             | Shared library                        |
|                                         |                                       |
| `/app/lib/actions/`                     | File name description or explanation |
| `/app/lib/actions/submitObservation.ts` | File name description or explanation |

### 1.6 styles

The `styles` directory within the `app` folder organizes the style-related files that define the visual aesthetics of the Call Of Luci application.
It is organized into subdirectories for a clear separation of concerns:

-   `colors`: color variables and utility classes.
-   `fonts`: font files and associated styling.
-   `themes`: theme configuration files.

| **styles**                  |                                                                 |
| :-------------------------- | :-------------------------------------------------------------- |
|                             |                                                                 |
| `/app/styles`               | global styles, colors, fonts, themes                            |
| `/app/styles/colors`        | color definitions and utility classes for consistent theming    |
| `/app/styles/font`          | font files and typographic styles                               |
| `/app/styles/themes`        | theme configuration for light/dark modes and design consistency |
|                             |                                                                 |
| `/app/styles/globals.css`   | globals                                                         |
| `/app/styles/primitives.ts` | primitives                                                      |

### 1.6 utils

The `utils` directory within the `app` folder organizes utility functions used throughout the app.

| **utils**    |                          |
| :----------- | :----------------------- |
|              |                          |
| `/app/utils` | shared utility functions |

## 2. config Directory

The `config` directory in the Call Of Luci project is designated for configuration files.

| **config Directory**      |                                     |
| :------------------------ | :---------------------------------- |
|                           |                                     |
| `/src/config/`            | Configuration Files                 |
|                           |                                     |
| `/src/config/constants.ts`| constant values used throughout app |
| `/src/config/metadata.ts` | metadata for Next.js app            |
| `/src/config/site.ts`     | site configuration                  |

## 3. types Directory

The `types` directory in the Call Of Luci project is designated for type definitions.

| **types Directory**       |                                                    |
| :------------------------ | :------------------------------------------------- |
|                           |                                                    |
| `/src/types/`             | Type definitions                                   |
|                           |                                                    |
| `/src/types/interfaces.ts`| declares TypeScript interfaces used throughout app |
| `/src/types/types.ts`     | declares TypeScript types used throughout app      |

## public Directory

The `public` directory in the Call Of Luci project is designated for static assets that are served directly by Next.js without the need for additional import statements.

| **public Directory**       |                                 |
| :------------------------- | :------------------------------ |
|                            |                                 |
| **`/src/public/`**         | **Static assets to be served**  |
| `/src/public/assets`       | global assets                   |
| `/src/public/mockup`       | mockups and design files        |
|                            |                                 |
| `/src/public/icon.svg`     | SVG icon file                   |
| `/src/public/lucilogo.svg` | SVG logo file for Luci          |
| `/src/public/next.svg`     | SVG file related to Next.js     |
| `/src/public/TheMuck.jpg`  | The Muck art                    |
| `/src/public/vercel.svg`   | SVG logo file for Vercel        |
| `/src/public/wormfood.jpg` | Wormfood art                    |

| **`/src/public/`**         | **Static assets to be served**  |
| :------------------------- | :------------------------------ |
|                            |                                 |
| `/src/public/assets`       | global assets                   |
| `/src/public/mockup`       | mockups and design files        |
| `/src/public/icon.svg`     | SVG icon file                   |
| `/src/public/lucilogo.svg` | SVG logo file for Luci          |
| `/src/public/next.svg`     | SVG file related to Next.js     |
| `/src/public/TheMuck.jpg`  | The Muck art                    |
| `/src/public/vercel.svg`   | SVG logo file for Vercel        |
| `/src/public/wormfood.jpg` | Wormfood art                    |

# Project Structure Documentation

## Introduction

This document provides an overview of the Call Of Luci project structure, adhering to Next.js framework's conventions.

## Root Directory

The highest level of the project structure, providing context for the organization of the project.

### Root-Level Files

Describes the files at the root level, crucial for understanding the project setup.

## Main Directories

Enumerates the main directories within the `src` folder and their significance in the project.

## Detailed Directory Breakdown

For each main directory listed in the previous section, provide a detailed breakdown.

### 1. app Directory

Outlines the structure and contents of the `app` directory.

### 2. config Directory

Details the configuration files and their purposes.

### 3. types Directory

Explains the type definitions and their role in the project.

## Subdirectory Details

Delve into the subdirectories within each main directory section.

### components

Organizes reusable React components that form the building blocks of the user interface.

### hooks

Organizes the application’s custom React hooks.

### lib

Organizes the shared library.

### styles

Organizes the style-related files that define the visual aesthetics of the application.

### utils

Organizes utility functions used throughout the app.

## Public Directory

Details the `public` directory for static assets served directly by Next.js.

## Appendices

Includes additional information such as a glossary of terms, reference links, or a changelog.

## Conclusion

Summarizes the document and provides final remarks or pointers for navigating the project.