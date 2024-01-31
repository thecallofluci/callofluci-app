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

| **Directory**      | **Description**                                                |
| :----------------- | :------------------------------------------------------------- |
| `/config`          | Configuration files that define global settings and constants. |
| **subdirectories** | None                                                           |

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

--

# Source Files

| **Filename**            | **Parent**                | **Description**                                                                                                                                          |
| :---------------------- | :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.env`                  | /                         | Environment variables for configuring Next.js application.                                                                                               |
| `.eslintrc.json`        | /                         | ESLint configuration for enforcing code quality standards.                                                                                               |
| `.gitignore`            | /                         | Lists files for Git to ignore.                                                                                                                           |
| `.LICENSE`              | /                         | Specifies terms under which project can be used.                                                                                                         |
| `.prettierignore`       | /                         | Lists files for Prettier to ignore.                                                                                                                      |
| `.prettierrc`           | /                         | Configuration for Prettier code formatter.                                                                                                               |
| `next.config.js`        | /                         | Customizes Next.js behavior and configurations.                                                                                                          |
| `package-lock.json`     | /                         | Generates locked down versions of installed packages.                                                                                                    |
| `package.json`          | /                         | Manages project's dependencies, scripts, and version information.                                                                                        |
| `postcss.config.js`     | /                         | Configuration for PostCSS for transforming CSS with JavaScript.                                                                                          |
| `README.md`             | /                         | Provides an overview and documentation for project.                                                                                                      |
| `tailwind.config.js`    | /                         | Configuration for Tailwind CSS framework.                                                                                                                |
| `tsconfig.json`         | /                         | Specifies root files and compiler options required to compile application.                                                                               |
| ----------------------- | ------------------------  | ---------------------------------------------------------                                                                                                |
| `error.tsx`             | /app                      | Provides a user-friendly error interface.                                                                                                                |
| `loading.tsx`           | /app                      | Handles loading states using React's Suspense feature.                                                                                                   |
| `layout.tsx`            | /app                      | Serves as the root layout for the entire application.                                                                                                    |
| `page.tsx`              | /app                      | The entry point for the home page of the application.                                                                                                    |
| ----------------------- | ------------------------  | ---------------------------------------------------------                                                                                                |
| `Header.tsx`            | /app/components/layout    | Header.tsx is a dedicated layout component for the application's header section.                                                                         |
| `Footer.tsx`            | /app/components/layout    | Footer.tsx is the layout component for the application's footer.                                                                                         |
| `Body.tsx`              | /app/components/layout    | Body.tsx is a Server Component which acts as the main content container for the application.                                                             |
| `AppWrapper.tsx`        | /app/components/layout    | AppWrapper.tsx serves as the primary layout structure for the application.                                                                               |
| ----------------------- | ------------------------  | ---------------------------------------------------------                                                                                                |
| `providers.tsx`         | /app/components/providers | Wraps the UI with necessary context providers.                                                                                                           |
| ----------------------- | ------------------------  | ---------------------------------------------------------                                                                                                |
| `ObservationForm.tsx`   | /app/components/forms     | ObservationForm.tsx is a React functional component that serves as the user interface for creating and submitting Observations.                          |
| ----------------------- | ------------------------  | ---------------------------------------------------------                                                                                                |
| `LuciButton.tsx`        | /app/components/ui        | LuciButton.tsx is a custom Button component used throughout the application.                                                                             |
| `LuciCard.tsx`          | /app/components/ui        | LuciCard.tsx is used to display Observations that users create.                                                                                          |
| `LuciImage.tsx`         | /app/components/ui        | LuciImage.tsx wraps the Next.js Image component, providing additional styling and layout features.                                                       |
| `LuciModal.tsx`         | /app/components/ui        | LuciModal.tsx is a custom Modal component suite used throughout the application.                                                                         |
| `LuciNavbar.tsx`        | /app/components/ui        | LuciNavbar.tsx is a comprehensive navigation bar component used throughout the application.                                                              |
| `LuciSpinner.tsx`       | /app/components/ui        | LuciSpinner.tsx provides a visual indicator for loading or processing states within the application.                                                     |
| `LuciTextArea.tsx`      | /app/components/ui        | LuciTextArea.tsx is a customizable text area component.                                                                                                  |
| `LuciThemeSwitch.tsx`   | /app/components/ui        | LuciThemeSwitch.tsx is a theme toggle switch for the application.                                                                                        |
| ----------------------- | ------------------------  | ---------------------------------------------------------                                                                                                |
| `useObservationForm.ts` | /app/hooks                | useObservationForm.ts is a custom React hook that encapsulates the form handling logic for creating Observations.                                        |
| ----------------------- | ------------------------  | ---------------------------------------------------------                                                                                                |
| `globals.css`           | /app/styles               | globals.css is a foundational stylesheet for the application that integrates Tailwind CSS's base, components, and utilities layers.                      |
| `primitives.ts`         | /app/styles               | primitives.ts is a custom utility file that leverages tailwind-variants to define a set of design primitives for the application.                        |
| ----------------------- | ------------------------  | ---------------------------------------------------------                                                                                                |
| `luciColors.ts`         | /app/styles/colors        | luciColors.ts defines a custom color palette for the application.                                                                                        |
| `luciSemantic.ts`       | /app/styles/colors        | luciSemantic.ts builds upon the color definitions in luciColors.ts to establish semantic color themes for light and dark modes.                          |
| ----------------------- | ------------------------  | ---------------------------------------------------------                                                                                                |
| `fonts.ts`              | /app/styles/fonts         | fonts.ts imports and configures global fonts for the application using the Next.js font optimization feature.                                            |
| `typewriter.css`        | /app/styles/fonts         | typewriter.css contains a CSS animation that simulates a typewriter effect.                                                                              |
| ----------------------- | ------------------------  | ---------------------------------------------------------                                                                                                |
| `luciDarkTheme.ts`      | /app/styles/themes        | luciDarkTheme.ts is a custom theme configuration file that defines the dark theme for the application.                                                   |
| `luciLightTheme.ts`     | /app/styles/themes        | luciLightTheme.ts is a custom theme configuration file that defines the light theme for the application.                                                 |
| ----------------------- | ------------------------  | ---------------------------------------------------------                                                                                                |
| `submitObservation.ts`  | /app/utils                | submitObservation.ts contains the submitObservation function, a server-side utility for processing Observation submissions within the Next.js framework. |
| ----------------------- | ------------------------  | ---------------------------------------------------------                                                                                                |
| `constants.ts`          | /config                   | Central configuration module outlining site structure and external resources.                                                                            |
| `metadata.ts`           | /config                   | Defines application-wide metadata, aligning with site configuration.                                                                                     |
| `site.ts`               | /config                   | Central store for constants used throughout application.                                                                                                 |
| ----------------------- | ------------------------  | ---------------------------------------------------------                                                                                                |
| `interfaces.ts`         | /types                    | Defines TypeScript interfaces for structured data objects and UI components.                                                                             |
| `types.ts`              | /types                    | Defines custom TypeScript types for consistent typing across application.                                                                                |

