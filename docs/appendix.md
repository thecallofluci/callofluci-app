# Appendix

## Directories

### src Directory

| **Directory**      | **Description**                                                                              |
| :----------------- | :------------------------------------------------------------------------------------------- |
| `/src`             | Root of project's source code.                                                               |
| **subdirectories** |                                                                                              |
| `/app`             | Central hub for Next.js App Router, containing routes, components, hooks, styles, utilities. |
| `/config`          | Global settings and constants.                                                               |
| `/types`           | TypeScript type definitions and interfaces.                                                  |

### app Directory

| **Directory**      | **Description**                                                                              |
| :----------------- | :------------------------------------------------------------------------------------------- |
| `/app`             | Central hub for Next.js App Router, containing routes, components, hooks, styles, utilities. |
| **subdirectories** |                                                                                              |
| `(routes)`         | Organizes page routes using Next.js App Router.                                              |
| `/components`      | Organizes reusable React components for user interface.                                      |
| `/hooks`           | Organizes custom React hooks.                                                                |
| `/styles`          | Organizes style-related files for visual aesthetics.                                         |
| `/utils`           | Organizes shared utility functions.                                                          |
| `/working`         | Stores works-in-progress as temp directory.                                                  |

### config Directory

| **Directory**      | **Description**                                                  |
| :----------------- | :--------------------------------------------------------------- |
| `/config`          | Configuration files that define global settings and constants.   |
| **subdirectories** | None                                                             |

### config Directory Files

| **File**       | **Description**                                                               |
| :------------- | :---------------------------------------------------------------------------- |
| `constants.ts` | Central store for constants used throughout application.                      |
| `metadata.ts`  | Defines application-wide metadata, aligning with site configuration.          |
| `site.ts`      | Central configuration module outlining site structure and external resources. |

### types Directory

| **Directory**      | **Description**                             |
| :----------------- | :------------------------------------------ |
| `/types`           | TypeScript type definitions and interfaces. |
| **subdirectories** | None                                        |

### types Directory Files

| **File**        | **Description**                                                              |
| :-------------- | :--------------------------------------------------------------------------- |
| `types.ts`      | Defines custom TypeScript types for consistent typing across application.    |
| `interfaces.ts` | Defines TypeScript interfaces for structured data objects and UI components. |

## Files

### app Directory Files

| **File**     | **Description**                                                    |
| :----------- | :----------------------------------------------------------------- |
| `layout.tsx` | Defines the root layout structure for the application.             |
| `page.tsx`   | Represents the home page rendered at the application's root (`/`). |

### app/(routes) Subdirectory Files

| **File**      | **Description**                                     |
| :------------ | :-------------------------------------------------- |
| `[route].tsx` | Represents a specific route within the application. |

### app/components Subdirectory Files

| **File**          | **Description**                                |
| :---------------- | :--------------------------------------------- |
| `[Component].tsx` | Defines a reusable React component for the UI. |

### app/hooks Subdirectory Files

| **File**       | **Description**                 |
| :------------- | :------------------------------ |
| `use[Hook].ts` | Implements a custom React hook. |

### app/styles Subdirectory Files

| **File**      | **Description**                          |
| :------------ | :--------------------------------------- |
| `[style].css` | Contains CSS styles for the application. |

### app/utils Subdirectory Files

| **File**       | **Description**                     |
| :------------- | :---------------------------------- |
| `[utility].ts` | Provides a shared utility function. |

### app/working Subdirectory Files

| **File**               | **Description**                         |
| :--------------------- | :-------------------------------------- |
| `[WorkInProgress].tsx` | Temporary file for ongoing development. |

### root Directory Files

| **File**             | **Description**                                                            |
| :------------------- | :------------------------------------------------------------------------- |
| `.eslintrc.json`     | ESLint configuration for enforcing code quality standards.                 |
| `.gitignore`         | Lists files for Git to ignore.                                             |
| `.prettierignore`    | Lists files for Prettier to ignore.                                        |
| `.prettierrc`        | Configuration for Prettier code formatter.                                 |
| `next.config.js`     | Customizes Next.js behavior and configurations.                            |
| `package-lock.json`  | Generates locked down versions of installed packages.                      |
| `package.json`       | Manages project's dependencies, scripts, and version information.          |
| `postcss.config.js`  | Configuration for PostCSS for transforming CSS with JavaScript.            |
| `README.md`          | Provides an overview and documentation for project.                        |
| `tailwind.config.js` | Configuration for Tailwind CSS framework.                                  |
| `tsconfig.json`      | Specifies root files and compiler options required to compile application. |
| `LICENSE`            | Specifies terms under which project can be used.                           |
| `.env`               | Environment variables for configuring Next.js application.                 |