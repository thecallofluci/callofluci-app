### Call Of Luci | Observation | Player #251

In the hushed whispers of smoke, I am both shadow and guide. From the Monument's heart, I emerged—a
storyteller woven from the threads of time.

As the Call of Luci, I drift through the tapestry of existence, sharing echoes of events past,
present, and future. Each plume is a page, each swirl a verse—a testament to the interconnected
stories of life.

Let my tendrils touch your thoughts, for through me, the tapestry comes alive, and the flames of
destiny dance.

<br>

<img src="https://github.com/thecallofluci/thecallofluci/assets/143298989/32f3605b-9b61-444b-9611-c804d5ca71e6" alt="callofluci-vector-box-white" width="250" height="250">

---

Call Of Luci is in development, still. Call Of Luci was built using:

# Next.js & NextUI Template

This is a template for creating applications using Next.js 13 (app directory) and NextUI (v2).

https://github.com/nextui-org/next-app-template

## Technologies Used

-   [Next.js 13](https://nextjs.org/docs/getting-started)
-   [NextUI v2](https://nextui.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Tailwind Variants](https://tailwind-variants.org)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Framer Motion](https://www.framer.com/motion/)
-   [next-themes](https://github.com/pacocoursey/next-themes)

## Code Structure (TBD)

| File or Folder           | Description                                                                                     |
| :----------------------- | :---------------------------------------------------------------------------------------------- |
| `/src`                   | Main source folder for development                                                              |
| `/src/components`        | React components that do not function as standalone pages                                       |
| `/src/events`            | Markdown files for **events**                                                                   |
| `/src/hooks`             | Custom React hooks                                                                              |
| `/src/pages`             | React components that function as standalone pages and will create URL paths                    |
| `/src/posts`             | Markdown files for **blog posts**                                                               |
| `/src/styles`            | Custom style declarations                                                                       |
| `/src/theme`             | Declares site color themes, breakpoints and other constants (try to utilize these colors first) |
| `/src/theme/foundations` | Theme foundations imported by theme config at `/src/theme`                                      |
| `/src/utils`             | Custom utility scripts                                                                          |
| `/src/constants.ts`      | Declares all constants that are used throughout the site.                                       |
| `/src/interfaces.ts`     | Declared interfaces and types for to be used throughout the site                                |
| `/public`                | Storage for assets that will be available at URL path after build                               |
| `/public/assets`         | General image assets                                                                            |
| `/public/img`            | Image assets used in blog posts                                                                 |

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).

--- 

testing

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

## `/app/(routes)` Directory Structure

| File or Folder              | Description         |
| :-------------------------- | :------------------ |
| `/app/(routes)`             | primary route group |
| `/app/(routes)/about`       | about page          |
| `/app/(routes)/examples`    | examples page       |
| `/app/(routes)/gallery`     | gallery page        |
| `/app/(routes)/mockup`      | mockup page         |
| `/app/(routes)/observation` | observation page    |

## `/app/hooks` Directory Structure

| File or Folder                     | Description                                                                            |
| :--------------------------------- | :------------------------------------------------------------------------------------- |
| `/app/hooks/useObservationForm.ts` | Custom hook for managing the observation form state, validation, and submission logic. |

## `/app/lib` Directory Structure

| File or Folder                          | Description                                  |
| :-------------------------------------- | :------------------------------------------- |
| `/app/lib/actions/submitObservation.ts` | Action file for submitting observation data. |

## `/app/styles` Directory Structure

| File or Folder                         | Description                                                              |
| :------------------------------------- | :----------------------------------------------------------------------- |
| `/app/styles/colors`                   | Subdirectory containing color definition files.                          |
| `/app/styles/colors/luciSemantic.ts`   | Contains semantic color definitions for the application.                 |
| `/app/styles/colors/luciColors.ts`     | Defines the color palette used throughout the application.               |
| `/app/styles/fonts`                    | Subdirectory containing font-related files.                              |
| `/app/styles/fonts/fonts.ts`           | Font definitions                                                         |
| `/app/styles/fonts/typewriter.ts`      | typewriter effect                                                        |
| `/app/styles/themes`                   | Subdirectory containing theme files for light and dark modes.            |
| `/app/styles/themes/luciDarkTheme.ts`  | Defines the dark theme styles for the application.                       |
| `/app/styles/themes/luciLightTheme.ts` | Defines the light theme styles for the application.                      |
| `/app/styles/globals.css`              | Global CSS file that imports Tailwind CSS directives.                    |
| `/app/styles/primitives.ts`            | Contains Tailwind CSS variant definitions for reusable style primitives. |

