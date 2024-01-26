# Appendix

## Directories

### src Directory

| **Directory**      | **Description**                                                                              |
| :----------------- | :------------------------------------------------------------------------------------------- |
| `/src`             | Root of project's source code.                                                               |
| **subdirectories** |                                                                                              |
| `/app`             | Central hub for Next.js App Router, containing routes, components, hooks, styles, utilities. |
| `/config`          | Organizes project's configuration files.                                                     |
| `/types`           | Organizes project's type definitions.                                                        |

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

| **Directory**      | **Description**                          |
| :----------------- | :--------------------------------------- |
| `/config`          | Organizes project's configuration files. |
| **subdirectories** | None                                     |

### types Directory

| **Directory**      | **Description**                       |
| :----------------- | :------------------------------------ |
| `/types`           | Organizes project's type definitions. |
| **subdirectories** | None                                  |

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

### config Directory Files

| **File**       | **Description**                                                               |
| :------------- | :---------------------------------------------------------------------------- |
| `constants.ts` | Central store for constants used throughout application.                      |
| `metadata.ts`  | Defines application-wide metadata, aligning with site configuration.          |
| `site.ts`      | Central configuration module outlining site structure and external resources. |

### types Directory Files

| **File**        | **Description**                                                              |
| :-------------- | :--------------------------------------------------------------------------- |
| `types.ts`      | Defines custom TypeScript types for consistent typing across application.    |
| `interfaces.ts` | Defines TypeScript interfaces for structured data objects and UI components. |

