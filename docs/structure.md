# Project Structure

The project adopts Next.js's [unopinionated approach](https://nextjs.org/docs/app/building-your-application/routing/colocation) towards project organization and file colocation. The codebase for Call Of Luci is organized as follows.

## Main Directories

The project's source code `/src` directory is divided into three main subdirectories: `/app`, `/config`, and `/types`:

| **`/src`**            | **Source Code**                                                                                      |
| :-------------------- | :--------------------------------------------------------------------------------------------------- |
| **subfolders**        |                                                                                                      |
| `/src/app`            | [Next.js App Router](https://nextjs.org/docs/app), containing routes, components, hooks, and styles. |
| `/src/config`         | Configuration files that define global settings and constants.                                       |
| `/src/types`          | TypeScript type definitions and interfaces.                                                          |

## app Directory

The `/app` folder within the `/src` directory organizes the central hub for the project, the Next.js App Router. It organizes the application's primary routes and core functional elements:

| **`/app`**            | **Next.js App Router**                        |
| :-------------------- | :-------------------------------------------- |
| **subfolders**        |                                               |
| `/app/(routes)`       | Primary route group                           |
| `/app/components`     | Reusable React components                     |
| `/app/hooks`          | Custom React hooks                            |
| `/app/lib`            | Shared library                                |
| `/app/styles`         | Global styles, colors, fonts, themes          |
| `/app/utils`          | Utility functions                             |
| `/app/working`        | Temp directory containing works in progress   |

### app/(routes)

The `/(routes)` folder within the `/app` directory organizes a collection of routes ...

### app/components

The `/components` folder within the `/app` directory organizes a collection of reusable React components that form the building blocks of the application's user interface:

| **`/components`**              | **reusable React components**                          |
| :------------------------------| :----------------------------------------------------- |
| **subfolders**                 |                                                        |
| `/components/forms`            | form elements and structures using `react-hook-form`   |
| `/components/layout`           | structural layout of application                       |
| `/components/providers`        | context providers                                      |
| `/components/ui`               | custom React components tailored using `nextui-org`    |

### app/hooks

The `/hooks` directory within the `/app` folder organizes the application’s custom React hooks:

| **`/hooks`**                   | **custom React hooks**                                             |
| :------------------------------| :----------------------------------------------------------------- |
| **subfolders**                 |                                                                    |
| `/hooks/useObservationForm.ts` | managed observation form state, validation, and submission logic   |
| `/hooks/xxxxxxx.ts`            | file description                                                   |

### app/lib

The `/lib` directory within the `/app` folder organizes the shared library:

| **`/lib`**                     | **Shared library**                                                 |
| :------------------------------| :----------------------------------------------------------------- |
| **subfolders**                 |                                                                    |
| `/lib/submitObservation.ts`    | File name description or explanation                               |

### app/styles

The `/styles` directory within the `/app` folder organizes the style-related files that define the visual aesthetics of the application:

| **`/styles`**                  | **global styles, colors, fonts, themes**                           |
| :------------------------------| :----------------------------------------------------------------- |
| **subfolders**                 |                                                                    |
| `/styles/colors`               | color definitions and utility classes for consistent theming       |
| `/styles/font`                 | font files and typographic styles                                  |
| `/styles/themes`               | theme configuration for light/dark modes and design consistency    |
|                                |                                                                    |
| `/styles/globals.css`          | globals                                                            |
| `/styles/primitives.ts`        | primitives                                                         |

## config Directory

The `/config` folder within the `/src` directory organizes the project's configuration files.

| **`/config`**              | **Configuration files**                      |
| :------------------------ | :------------------------------------------- |
| **subfolders**            |                                              |
| `/config/constants.ts`| constant values used throughout app          |
| `/config/metadata.ts` | metadata for Next.js app                     |
| `/config/site.ts`     | site configuration                           |

## types Directory

The `/types` folder within the `/type` directory organizes the project's type definitions.

| **`/types`**               | **Type definitions**                               |
| :------------------------ | :------------------------------------------------- |
| **subfolders**            |                                                    |
| `/types/interfaces.ts`| declares TypeScript interfaces used throughout app |
| `/types/types.ts`     | declares TypeScript types used throughout app      |

## public Directory

The `/public` directory at the root of the project is designated for static assets that are served directly by Next.js without the need for additional import statements.

| **/`public`**              | **Static assets to be served**  |
| :------------------------- | :------------------------------ |
| **subfolders**             |                                 |
| `/public/assets`           | global assets                   |
| `/public/mockup`           | mockups and design files        |
|                            |                                 |
| `/public/icon.svg`         | SVG icon file                   |
| `/public/lucilogo.svg`     | SVG logo file for Luci          |
| `/public/next.svg`         | SVG file related to Next.js     |
| `/public/TheMuck.jpg`      | The Muck art                    |
| `/public/vercel.svg`       | SVG logo file for Vercel        |
| `/public/wormfood.jpg`     | Wormfood art                    |

## Root Directory

The structure of the project codebase is divided into two root-level directories: `public` and `src`:

| **Root-Level Directories** |                                                     |
| :------------------------- | :-------------------------------------------------- |
| `/public`                  | static assets served                                |
| `/src`                     | source code                                         |

## Root Files

The root-level files in the project include configurations for the application's environment, coding standards, dependencies, and metadata:

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

### app/components/forms

The `forms` folder within the `components` directory organizes ...

### 1.2.2 components/layout

The `layout` folder within the `components` directory organizes ...

### 1.2.3 components/providers

The `providers` folder within the `components` directory organizes ...

### 1.2.4 components/ui

The `ui` folder within the `components` directory organizes ...

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