# Project Structure

The codebase is organized in alignment with the
[Next.js Project Structure](https://nextjs.org/docs/getting-started/project-structure) guide. It
adopts Next.js's
[unopinionated approach](https://nextjs.org/docs/app/building-your-application/routing/colocation)
approach towards project organization and file colocation.

## src Directory

[src/app](src/app)
[src/app/page.tsx](src/app/page.tsx)

The project's source code `/src` directory is divided into three main subdirectories: `/app`,
`/config`, and `/types`:

| **`/src`**     | **Source Code**                                                                                      |
| :------------- | :--------------------------------------------------------------------------------------------------- |
| **subfolders** |                                                                                                      |
| `/src/app`     | [Next.js App Router](https://nextjs.org/docs/app), containing routes, components, hooks, and styles. |
| `/src/config`  | Configuration files that define global settings and constants.                                       |
| `/src/types`   | TypeScript type definitions and interfaces.                                                          |

## app Directory

The `/app` directory within the `/src` directory organizes the central hub for the project, the Next.js
App Router. It organizes the application's primary routes and core functional elements:

| **`/app`**        | **Next.js App Router**                      |
| :---------------- | :------------------------------------------ |
| **subfolders**    |                                             |
| `/app/(routes)`   | Primary route group                         |
| `/app/components` | Reusable React components                   |
| `/app/hooks`      | Custom React hooks                          |
| `/app/styles`     | Global styles, colors, fonts, themes        |
| `/app/utils`      | Utility functions                           |
| `/app/working`    | Temp directory containing works in progress |

### Routing | app/(routes)

The `/(routes)` subdirectory within the `/app` directory organizes a collection of routes using the Next.js App Router, locating the application's pages into a structured and accessible hierarchy. It contains subdirectories for each primary view of the application. 

| **`/(routes)`**            | **Primary Route Group**                                  |
| :------------------------- | :------------------------------------------------------- |
| **subfolders**             |                                                          |
| `/(routes)/about`          | about page                                               |
| `/(routes)/examples`       | examples page                                            |
| `/(routes)/gallery`        | gallery page                                             |
| `/(routes)/mockup`         | mockup page                                              |
| `/(routes)/observation`    | observation page                                         |

### Components | app/components

The `/components` subdirectory within the `/app` directory organizes a collection of reusable React
components that form the building blocks of the application's user interface:

| **`/components`**       | **reusable React components**                        |
| :---------------------- | :--------------------------------------------------- |
| **subfolders**          |                                                      |
| `/components/forms`     | form elements and structures using `react-hook-form` |
| `/components/layout`    | structural layout of application                     |
| `/components/providers` | context providers                                    |
| `/components/ui`        | custom React components tailored using `nextui-org`  |

### Forms | app/components/forms

The `/forms` subdirectory within the `/app/components` directory contains form-related components, utilizing `react-hook-form` for form state management and validation:

| **`/components/forms`** | **Form Elements and Structures**                                  |
| :----------------------- | :--------------------------------------------------------------- |
| **files**                |                                                                  |
| `ObservationForm.tsx`   | Manages the creation of new Observations using `react-hook-form`. |

### Layout | app/components/layout

The `/layout` subdirectory within the `/app/components` directory holds components that are responsible for the structural layout of the application, which together form the common layout used across different pages of the application.

| **`/components/layout`** | **Structural Layout Components**                                 |
| :----------------------- | :--------------------------------------------------------------- |
| **files**                |                                                                  |
| `AppWrapper.tsx`         | Wraps the main application layout.                               |
| `Body.tsx`               | Represents the main body of a page layout.                       |
| `Footer.tsx`             | Contains the footer component used across the application.       |
| `Header.tsx`             | Contains the header component with navigation links.             |

### Providers | app/components/providers

The `/providers` subdirectory within the `/app/components` directory contains context providers that manage global application state. The `providers.tsx` file exports a Providers component that wraps the application with necessary context providers, such as theme providers from `next-themes` and `nextui-org`.

| **`/components/providers`** | **Context Providers**                                            |
| :-------------------------- | :--------------------------------------------------------------- |
| **files**                   |                                                                  |
| `providers.tsx`             | wraps application with necessary context providers.              |

### UI | app/components/ui

The `/ui` subdirectory within the `/app/components` directory is dedicated to custom React components that are styled using `nextui-org`.

| **`/components/ui`**        | **Custom UI Components**                                         |
| :-------------------------- | :--------------------------------------------------------------- |
| **files**                   |                                                                  |
| `LuciButton.tsx`            | Custom button component styled with `nextui-org`.                |
| `LuciCard.tsx`              | Card component for displaying Observations.                      |
| `LuciIcons.tsx`             | Collection of icon components.                                   |
| `LuciImage.tsx`             | Custom image component.                                          |
| `LuciModal.tsx`             | Modal component for overlays.                                    |
| `LuciNavbar.tsx`            | Navigation bar component.                                        |
| `LuciSpinner.tsx`           | Spinner component for loading states.                            |
| `LuciTextArea.tsx`          | Text area component for form inputs.                             |
| `LuciThemeSwitch.tsx`       | Theme switch component for toggling between light and dark modes.|

### Hooks | app/hooks

The `/hooks` subdirectory within the `/app` directory organizes the application’s custom React hooks:

| **`/hooks`**                   | **custom React hooks**                                           |
| :----------------------------- | :--------------------------------------------------------------- |
| **subfolders**                 |                                                                  |
| `/hooks/useObservationForm.ts` | managed observation form state, validation, and submission logic |

### Styles | app/styles

The `/styles` subdirectory within the `/app` directory organizes
the style-related files that define the visual aesthetics of the application:

| **`/styles`**           | **global styles, colors, fonts, themes**                        |
| :---------------------- | :-------------------------------------------------------------- |
| **subfolders**          |                                                                 |
| `/styles/colors`        | color definitions and utility classes for consistent theming    |
| `/styles/font`          | font files and typographic styles                               |
| `/styles/themes`        | theme configuration for light/dark modes and design consistency |
|                         |                                                                 |
| `/styles/globals.css`   | globals                                                         |
| `/styles/primitives.ts` | primitives                                                      |

### Utilities | app/util

The `/util` subdirectory within the `/app` directory organizes shared utility functions:

| **`/util`**                  | **Utility Functions**                |
| :--------------------------- | :----------------------------------- |
| **subfolders**               |                                      |
| `/util/submitObservation.ts` | File name description or explanation |

## config Directory

The `/config` directory within the `/src` directory organizes the project's configuration files:

| **`/config`**          | **Configuration files**             |
| :--------------------- | :---------------------------------- |
| **subfolders**         |                                     |
| `/config/constants.ts` | constant values used throughout app |
| `/config/metadata.ts`  | metadata for Next.js app            |
| `/config/site.ts`      | site configuration                  |

## types Directory

The `/types` directory within the `/src` directory organizes the project's type definitions:

| **`/types`**           | **Type definitions**                               |
| :--------------------- | :------------------------------------------------- |
| **subfolders**         |                                                    |
| `/types/interfaces.ts` | declares TypeScript interfaces used throughout app |
| `/types/types.ts`      | declares TypeScript types used throughout app      |

## public Directory

The `/public` directory at the root of the project is designated for static assets that are served
directly by Next.js:

| **/`public`**          | **Static assets to be served** |
| :--------------------- | :----------------------------- |
| **subfolders**         |                                |
| `/public/assets`       | global assets                  |
| `/public/mockup`       | mockups and design files       |
|                        |                                |
| `/public/icon.svg`     | SVG icon file                  |
| `/public/lucilogo.svg` | SVG logo file for Luci         |
| `/public/next.svg`     | SVG file related to Next.js    |
| `/public/TheMuck.jpg`  | The Muck art                   |
| `/public/vercel.svg`   | SVG logo file for Vercel       |
| `/public/wormfood.jpg` | Wormfood art                   |

## Root Directory

The structure of the project codebase is divided into two root-level directories: `/public` and
`/src`:

| **Root-Level Directories** |                      |
| :------------------------- | :------------------- |
| `/public`                  | static assets served |
| `/src`                     | source code          |

## Root Files

The root-level files in the project include configurations for the application's environment, coding
standards, dependencies, and metadata:

| **Root-Level Files**  |                                                     |
| :-------------------- | :-------------------------------------------------- |
| `/.eslintrc.json`     | Configuration for ESLint to enforce code quality    |
| `/.gitignore`         | Specifies files to ignore by Git                    |
| `/.prettierignore`    | Specifies files to ignore by Prettier               |
| `/.prettierrc`        | Configuration file for Prettier code formatter      |
| `/next.config.js`     | Configuration file for customizing Next.js behavior |
| `/package-lock.json`  | Locks versions of project dependencies              |
| `/package.json`       | Defines project dependencies and scripts            |
| `/postcss.config.js`  | Configuration file for PostCSS                      |
| `/README.md`          | Project description                                 |
| `/tailwind.config.js` | Configuration file for Tailwind CSS framework       |
| `/tsconfig.json`      | Configuration file for TypeScript compiler options  |

---
