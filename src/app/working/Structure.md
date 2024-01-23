# Project Structure

The Call Of Luci project adheres to the Next.js framework's [unopinionated approach](https://nextjs.org/docs/app/building-your-application/routing/colocation) towards project organization and file colocation.

## Root Directory

The structure of Call Of Luci is divided into two root-level directories: `public` and `src`:

-   `public`: static assets for Call Of Luci.
-   `src`: source code for Call Of Luci.

Root-level files primarily consist of configuration and metadata files that define the environment, coding standards, dependencies, and build processes.

| **Root-Level Directories** |                                                     |
| :------------------------- | :-------------------------------------------------- |
|                            |                                                     |
| `/public`                  | static assets served                                |
| `/src`                     | source code for Call Of Luci                        |
|                            |                                                     |
| **Root-Level Files**       |                                                     |
|                            |                                                     |
| `/LICENSE`                 | License file for project                            |
| `/.env`                    | Environment variables                               |
| `/.eslintrc.json`          | Configuration for ESLint to enforce code quality    |
| `/.gitignore`              | Git files and folders to ignore                     |
| `/.prettierignore`         | Specifies files to ignore by Prettier               |
| `/.prettierrc`             | Configuration for Prettier code formatter           |
| `/next.config.js`          | Configuration file for customizing Next.js behavior |
| `/package-lock.json`       | Locks versions of project dependencies              |
| `/package.json`            | Defines project dependencies and scripts            |
| `/postcss.config.js`       | Configuration for PostCSS                           |
| `/README.md`               | Project description                                 |
| `/tailwind.config.js`      | Configuration for Tailwind CSS framework            |
| `/tsconfig.json`           | Configuration file for TypeScript compiler options  |

## Main Directories

The structure of Call Of Luci's source code `/src` directory is divided into three main directories: `app`, `config`, and `types`:

| **Main Directories** |                                                                                                      |
| :------------------- | :--------------------------------------------------------------------------------------------------- |
|                      |                                                                                                      |
| `/src/app`           | Next.js [App Router](https://nextjs.org/docs/app), containing routes, components, hooks, and styles. |
| `/src/config`        | Configuration files that define global settings and constants.                                       |
| `/src/types`         | TypeScript type definitions and interfaces.                                                          |

## app Directory

The `app` directory in the Call of Luci project is the central hub for the Next.js App Router, organizing the application's primary routes and housing the core functional elements of the application.

| **app Directory**     |                                             |
| :-------------------- | :------------------------------------------ |
|                       |                                             |
| `/src/app/`           | Next.js App Router                          |
| `/src/app/(routes)`   | primary route group                         |
| `/src/app/components` | reusable React components                   |
| `/src/app/hooks`      | custom React hooks                          |
| `/src/app/lib`        | shared library                              |
| `/src/app/styles`     | global styles, colors, fonts, themes        |
| `/src/app/utils`      | utility functions                           |
| `/src/app/working`    | temp directory containing works in progress |

### components

The `components` directory within the `app` folder organizes a collection of reusable React components that form the building blocks of the Call Of Luci application's user interface. It is organized into subdirectories that categorize components based on their functionality and usage within the application:

-   `forms`: Contains components related to form elements and structures, such as input fields, buttons, and form layouts, which are used to capture user input.
-   `layout`: Houses components that define the structural layout of the application, including headers, footers, and navigation bars, ensuring a consistent look and feel across different pages.
-   `ui`: Includes user interface components that are used across the application, such as modals, cards, and dropdowns, providing a uniform design language.
-   `providers`: Contains context providers that manage and distribute application state or functionality to components, enabling state management and data flow across the component tree.

| **components**              |                                                     |
| :-------------------------- | :-------------------------------------------------- |
|                             |                                                     |
| `/app/components`           | custom React components                             |
| `/app/components/forms`     | React form components using React Hook Form library |
| `/app/components/layout`    | root layout components                              |
| `/app/components/providers` | initializing and configuring global providers       |
| `/app/components/ui`        | custom React components tailored from NextUI        |

### hooks

The `hooks` directory within the `app` folder organizes the application’s custom React hooks.

| **hooks**                          |                                                                                        |
| :--------------------------------- | :------------------------------------------------------------------------------------- |
|                                    |                                                                                        |
| `/app/hooks/`                      | Custom React hooks                                                                     |
|                                    |                                                                                        |
| `/app/hooks/useObservationForm.ts` | Custom hook for managing the observation form state, validation, and submission logic. |

### lib

The `lib` directory within the `app` folder organizes the shared library.

| **lib**                                 |                                       |
| :-------------------------------------- | :------------------------------------ |
|                                         |                                       |
| `/app/lib/`                             | Shared library                        |
|                                         |                                       |
| `/app/lib/actions/`                     | File name description or explanation |
| `/app/lib/actions/submitObservation.ts` | File name description or explanation |

### styles

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

### utils

The `utils` directory within the `app` folder organizes utility functions used throughout the app.

| **utils**    |                          |
| :----------- | :----------------------- |
|              |                          |
| `/app/utils` | shared utility functions |

## config Directory

The `config` directory in the Call Of Luci project is designated for configuration files.

| **config Directory**      |                                     |
| :------------------------ | :---------------------------------- |
|                           |                                     |
| `/src/config/`            | Configuration Files                 |
|                           |                                     |
| `/src/config/constants.ts`| constant values used throughout app |
| `/src/config/metadata.ts` | metadata for Next.js app            |
| `/src/config/site.ts`     | site configuration                  |

## types Directory

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