## Directory Structure

| File or Folder             | Description                                              |
| :------------------------- | :------------------------------------------------------- |
| **Top-Level Directories**  |                                                          |
| `/public`                  | static assets served                                     |
| `/src`                     | source code for Call of Luci                             |
|                            |                                                          |
| **Main Directories**       |                                                          |
| `/src/app`                 | Next.js App Router                                       |
| `/src/config`              | Configuration files                                      |
| `/src/types`               | Type definitions                                         |
|                            |                                                          |
| **Application Files**      |                                                          |
| `/src/app/`                | Next.js App Router                                       |
| `/src/app/(routes)`        | primary route group                                      |
| `/src/app/components`      | reusable React components                                |
| `/src/app/hooks`           | custom React hooks                                       |
| `/src/app/lib`             | shared library                                           |
| `/src/app/styles`          | global styles, colors, fonts, themes                     |
| `/src/app/utils`           | utility functions                                        |
| `/src/app/working`         | temp directory containing works in progress              |
|                            |                                                          |
| **Configuration Files**    |                                                          |
| `/src/config`              | Configuration files                                      |
| `/src/config/constants.ts` | Reusable React components that are not standalone pages. |
| `/src/config/metadata.ts`  | Reusable React components that are not standalone pages. |
| `/src/config/site.ts`      | Reusable React components that are not standalone pages. |
|                            |                                                          |
| **Type Definitions**       |                                                          |
| `/src/types`               | Type definitions                                         |
| `/src/types/interfaces.ts` | declares TypeScript interfaces used throughout app       |
| `/src/types/types.ts`      | declares TypeScript types used throughout app            |
|                            |                                                          |
| **Root-Level Files**       |                                                          |
| `/LICENSE`                 | License file for project                                 |
| `/.env`                    | Environment variables                                    |
| `/.eslintrc.json`          | Configuration for ESLint to enforce code quality         |
| `/.gitignore`              | Git files and folders to ignore                          |
| `/.prettierignore`         | Specifies files to ignore by Prettier                    |
| `/.prettierrc`             | Configuration for Prettier code formatter                |
| `/next.config.js`          | Configuration file for customizing Next.js behavior      |
| `/package-lock.json`       | Locks versions of project dependencies                   |
| `/package.json`            | Defines project dependencies and scripts                 |
| `/postcss.config.js`       | Configuration for PostCSS                                |
| `/README.md`               | Project description                                      |
| `/tailwind.config.js`      | Configuration for Tailwind CSS framework                 |
| `/tsconfig.json`           | Configuration file for TypeScript compiler options       |

---

### `/app/(routes)` Directory Structure

| File or Folder              | Description         |
| :-------------------------- | :------------------ |
| `/app/(routes)`             | primary route group |
| `/app/(routes)/about`       | about page          |
| `/app/(routes)/examples`    | examples page       |
| `/app/(routes)/gallery`     | gallery page        |
| `/app/(routes)/mockup`      | mockup page         |
| `/app/(routes)/observation` | observation page    |

### `/app/hooks` Directory Structure

| File or Folder                     | Description                                                                            |
| :--------------------------------- | :------------------------------------------------------------------------------------- |
| `/app/hooks/useObservationForm.ts` | Custom hook for managing the observation form state, validation, and submission logic. |

### `/app/lib` Directory Structure

| File or Folder                          | Description                                  |
| :-------------------------------------- | :------------------------------------------- |
| `/app/lib/actions/`                     | TBD.                                         |
| `/app/lib/actions/submitObservation.ts` | Action file for submitting observation data. |

### `/app/styles` Directory Structure

| File or Folder                     | Description                                                              |
| :--------------------------------- | :----------------------------------------------------------------------- |
| `/styles/colors`                   | Subdirectory containing color definition files.                          |
| `/styles/colors/luciSemantic.ts`   | Contains semantic color definitions for the application.                 |
| `/styles/colors/luciColors.ts`     | Defines the color palette used throughout the application.               |
| `/styles/fonts`                    | Subdirectory containing font-related files.                              |
| `/styles/fonts/fonts.ts`           | Font definitions                                                         |
| `/styles/fonts/typewriter.ts`      | typewriter effect                                                        |
| `/styles/themes`                   | Subdirectory containing theme files for light and dark modes.            |
| `/styles/themes/luciDarkTheme.ts`  | Defines the dark theme styles for the application.                       |
| `/styles/themes/luciLightTheme.ts` | Defines the light theme styles for the application.                      |
| `/styles/globals.css`              | Global CSS file that imports Tailwind CSS directives.                    |
| `/styles/primitives.ts`            | Contains Tailwind CSS variant definitions for reusable style primitives. |

# Project Structure

## Overview

The Call Of Luci project adheres to the Next.js framework's [unopinionated approach](https://nextjs.org/docs/app/building-your-application/routing/colocation) towards project organization and file colocation. The structure is divided into three top-level directories: `app`, `config`, and `types`. The `app` directory is the core of the Next.js [App Router](https://nextjs.org/docs/app), containing routes, components, hooks, and styles. The `config` directory holds configuration files that define global settings and constants, while the `types` directory contains TypeScript type definitions and interfaces. This organization facilitates easy navigation and management of the project's codebase.

```markdown
| File or Folder             | Description                                              |
| :------------------------- | :------------------------------------------------------- |
| **Top-Level Directories**  |                                                          |
| `/public`                  | static assets served                                     |
| `/src`                     | source code for Call Of Luci                             |
|                            |                                                          |
| **Main Directories**       |                                                          |
| `/src/app`                 | Next.js App Router                                       |
| `/src/config`              | Configuration Files                                      |
| `/src/types`               | Type Definitions                                         |
```

## Root-Level Files

Root-level files in the Call of Luci project primarily consist of configuration and metadata files that define the environment, coding standards, dependencies, and build processes.

```markdown
| **Root-Level Files**       |                                                          |
| `/LICENSE`                 | License file for project                                 |
| `/.env`                    | Environment variables                                    |
| `/.eslintrc.json`          | Configuration for ESLint to enforce code quality         |
| `/.gitignore`              | Git files and folders to ignore                          |
| `/.prettierignore`         | Specifies files to ignore by Prettier                    |
| `/.prettierrc`             | Configuration for Prettier code formatter                |
| `/next.config.js`          | Configuration file for customizing Next.js behavior      |
| `/package-lock.json`       | Locks versions of project dependencies                   |
| `/package.json`            | Defines project dependencies and scripts                 |
| `/postcss.config.js`       | Configuration for PostCSS                                |
| `/README.md`               | Project description                                      |
| `/tailwind.config.js`      | Configuration for Tailwind CSS framework                 |
| `/tsconfig.json`           | Configuration file for TypeScript compiler options       |
```

## app Directory

The `app` directory in the Call of Luci project is the central hub for the Next.js App Router, organizing the application's primary routes and housing the core functional elements of the application.

```markdown
| **app Directory**          |                                                          |
| `/src/app/`                | Next.js App Router                                       |
| `/src/app/(routes)`        | primary route group                                      |
| `/src/app/components`      | reusable React components                                |
| `/src/app/hooks`           | custom React hooks                                       |
| `/src/app/lib`             | shared library                                           |
| `/src/app/styles`          | global styles, colors, fonts, themes                     |
| `/src/app/utils`           | utility functions                                        |
| `/src/app/working`         | temp directory containing works in progress              |
```

## config Directory

[The app-level explanation].

[OVERVIEW TABLE]

## types Directory

[The app-level explanation].

[OVERVIEW TABLE]

## public Directory

[The app-level explanation].

[OVERVIEW TABLE]