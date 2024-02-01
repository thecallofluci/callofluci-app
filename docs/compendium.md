# Compendium

Compendium provides an overview of the file and folder structure of Call Of Luci. The codebase for Call Of Luci is organized following Next.js's
[unopinionated approach](https://nextjs.org/docs/app/building-your-application/routing/colocation)
approach towards project structure and file colocation.

Compendium
├── app
│   ├── route 1
│   ├── route 2
│   └── route 3
├── components
│   ├── providers
│   ├── layout
│   ├── ui
│   └── forms
├── utilities
│   ├── utils
│   └── hooks
├── styling
│   ├── styles
│   ├── colors
│   ├── fonts
│   └── themes
├── root
│   ├── root
│   ├── config
│   ├── types
│   └── misc.

## app Directory

The `/app` directory organizes the central hub for the project, the App Router. Next.js uses a file-system based router called the App Router, where folders are used to define routes and files are used to create UI that is shown for a route segment.

### Routes

Routes in the Call Of Luci application are organized starting from a master Next.js Route Group, `(routes)`, located inside of the `/app` directory . This `(routes)` directory is then split into the following subdirectories: 

| **`/(routes)`**      | **Next.js App Router**                                                               |
| :------------------- | :----------------------------------------------------------------------------------- |
| **subdirectories**   |                                                                                      |
| `/create`            | A static route directory where users can create new Observations.                    |
| `/gallery`           | A static route directory that aggregates and displays Observations created by users. |
| `/observations`      | A dynamic route directory which generates unique routes for each Observation.        |
| `/about`             | A static page detailing the background and purpose of the project.                   |
| `/(temporary)`       | A collection of temporary pages for mockups and examples during app development.     |

- `create`: A static route directory where users can create new Observations. This route is accessible to all users and serves as the entry point for creating content. 
- `gallery`: A static route directory that aggregates and displays Observations created by users. It fetches existing Observations and presents them to the user, supporting functionalities like browsing and searching.
- `observations`: A dynamic route directory which generates unique routes for each Observation. The `page.tsx` file within the [id] directory is responsible for rendering the UI of each individual Observation based on its unique identifiers.
- `about`: A static page detailing the background and purpose of the Call Of Luci project. This route is straightforward and serves as an informational resource for users.
- `(temporary)`: A collection of temporary pages for mockups and examples during app development. These routes are useful for testing and demonstration purposes but are not intended for the final application structure.

```markdown
Call Of Luci Routing

├── app                        # Next.js App Router
│   ├── (routing)
│   │   ├── create             # Static route for creating Observations
│   │   │   └── page.tsx       # Page for creating Observations
│   │   ├── observations       # Dynamic route for individual Observations
│   │   │   └── [id]
│   │   │       └── page.tsx   # Pages for each unique Observation
│   │   └── gallery            # Static route for viewing existing Observations
│   │       ├── page.tsx       # Main Gallery page
│   │       ├── browse
│   │       │   └── page.tsx   # Gallery browsing functionality
│   │       └── search
│   │           └── page.tsx   # Gallery search functionality
│   └── ...
│   └── ...
│   └── ...
└── ...  
```

## Components

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

The `/forms` subdirectory within the `/app/components` directory contains form-related components, utilizing `react-hook-form` for form state management and validation.

This project uses [`react-hook-form`](https://react-hook-form.com/) for form state management and validation.

| **`/components/forms`** | **Form Elements and Structures**                                  |
| :----------------------- | :--------------------------------------------------------------- |
| **files**                |                                                                  |
| [`ObservationForm.tsx`](../src/app/components/forms/ObservationForm.tsx)   | Manages the creation of new Observations using `react-hook-form`. |

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

| **Directory**      | **Description**                                                |
| :----------------- | :------------------------------------------------------------- |
| `/config`          | Configuration files that define global settings and constants. |
| **subdirectories** | None                                                           |

| **File**       | **Description**                                                               |
| :------------- | :---------------------------------------------------------------------------- |
| `constants.ts` | Central store for constants used throughout application.                      |
| `metadata.ts`  | Defines application-wide metadata, aligning with site configuration.          |
| `site.ts`      | Central configuration module outlining site structure and external resources. |

## types Directory

The `/types` directory within the `/src` directory organizes the project's type definitions:

| **Directory**      | **Description**                             |
| :----------------- | :------------------------------------------ |
| `/types`           | TypeScript type definitions and interfaces. |
| **subdirectories** | None                                        |

| **File**        | **Description**                                                              |
| :-------------- | :--------------------------------------------------------------------------- |
| `types.ts`      | Defines custom TypeScript types for consistent typing across application.    |
| `interfaces.ts` | Defines TypeScript interfaces for structured data objects and UI components. |

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

-- print markdown table for root-level fileName, short description.

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
Here are the "directory" key names from Manifest:

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

# Routing

This page details the routing strategy for the application from both user and developer perspectives. 

## Overview

Call Of Luci leverages Next.js's powerful routing system to create a seamless and dynamic user experience. Routes for the application are organized starting from a master Next.js Route Group, `(routes)`, located inside of the `/app` directory . This `(routes)` directory is then split into the following subdirectories:

```markdown
| **`/(routes)`**      | **Next.js App Router**                                                               |
| :------------------- | :----------------------------------------------------------------------------------- |
| **subdirectories**   |                                                                                      |
| `/create`            | A static route directory where users can create new Observations.                    |
| `/gallery`           | A static route directory that aggregates and displays Observations created by users. |
| `/observations`      | A dynamic route directory which generates unique routes for each Observation.        |
| `/about`             | A static page detailing the background and purpose of the project.                   |
| `/(temporary)`       | A collection of temporary pages for mockups and examples during app development.     |
```

## Primary Routes

The user experience for the application is structured around three primary routes: `/create`, `/observations`, and `/gallery`.

```markdown
Call Of Luci Routing

├── app                        # Next.js App Router
│   ├── (routing)
│   │   ├── create             # Static route for creating Observations
│   │   │   └── page.tsx       # Page for creating Observations
│   │   ├── observations       # Dynamic route for individual Observations
│   │   │   └── [id]
│   │   │       └── page.tsx   # Pages for each unique Observation
│   │   └── gallery            # Static route for viewing existing Observations
│   │       ├── page.tsx       # Main Gallery page
│   │       ├── browse
│   │       │   └── page.tsx   # Gallery browsing functionality
│   │       └── search
│   │           └── page.tsx   # Gallery search functionality
│   └── ...
│   └── ...
│   └── ...
└── ...  
```

## 1. **Creating Content (Observations)**

### Purpose

The `create` route directory contains a static page (`page.tsx`) where users can create new Observations. This static route is accessible to all users and serves as the entry point for creating content. When a user creates a new Observation via the `create` route, the application captures the input data (text, images, etc.) and processes it to create a new Observation entity. This entity is then stored in a database or a similar persistent storage system (TBD). Each Observation should have a unique identifier (ID) that allows it to be referenced individually.

### **User Perspective**:

- Users are presented with a form on a static route to input data for creating a new Observation.
- After submission, the application processes the data and redirects users to a dynamically generated route that displays the newly created Observation.

### **Developer Perspective**:

- **Static Route for Creation**: Utilize a static route (e.g., /app/observation/create) for the Observation creation form. This simplifies the initial user interaction and focuses on data input.
- **Dynamic Route for Viewing**: Implement dynamic routes (e.g., /app/observation/[id]) for displaying individual Observations. Use Next.js's dynamic routing with [id] as a dynamic segment to fetch and display the Observation based on its unique identifier.

### **Developer Decisions Needed**:

- Decide on the schema for Observation identifiers (numeric ID, slug, etc.) and the data structure for storing Observations.

### URL Segment

This static route is shared by all users who wish to create a new Observation. It's a straightforward, user-friendly URL that clearly indicates its purpose.

- [callofluci.art/create](http://callofluci.art/create)

## 2. Individual Observations via Dynamic Routing

### Purpose

The `observations` route directory uses a dynamic segment (`[id]`) to generate unique routes for each Observation. The `page.tsx` file within the `[id]` directory is responsible for rendering the UI of individual Observations based on their unique identifiers.

### **User Perspective**:

- Each Observation is accessible through a unique, shareable URL, enhancing the ability to revisit and share specific Observations.

### **Developer Perspective**:

- **Dynamic Routes Implementation**: Use `[id]` folders within the `/observation` directory to create dynamic routes. This allows Next.js to match any path like `/observation/123` to the corresponding Observation.
- **Data Fetching**: Leverage `getStaticPaths` and `getStaticProps` for pre-rendering Observations at build time or `getServerSideProps` for server-side rendering, depending on the application's dynamic content needs.

### **Developer Decisions Needed**:

- Determine the balance between static generation and server-side rendering based on content update frequency and user experience requirements.

### URL Segment

For individual Observations, the app’s URL pattern uses a dynamic segment (`[id]`) to represent each unique Observation. This dynamic segment allows Next.js to generate pages for Observations on-demand, based on their unique identifiers. The correct syntax in the URL should include a slash `/` before the dynamic segment, like `/observation/[id]`, to denote it as a path parameter.

- callofluci.art/observation/[id]

## 3. Streaming Content (Gallery)

### Purpose

The `gallery` route directory aggregates and displays Observations created by users. It fetches existing Observations and presents them to the user, supporting functionalities like browsing and searching. This structure allows for a centralized Gallery experience with specific features accessible through nested routes.

The gallery route directory is structured to include the main Gallery page (`page.tsx`) and additional functionalities like browsing (`browse/page.tsx`) and searching (`search/page.tsx`). 

### **User Perspective**:

- The Gallery serves as a central hub for users to browse, search, and interact with existing Observations. It provides various views (e.g., carousel, search) to explore Observations.

### **Developer Perspective**:

- **Static Route for Gallery**: The Gallery route is implemented as a static route. This route fetches and displays a list of Observations, offering features like search and filtering.
- **Linking to Dynamic Routes**: From the Gallery, link to individual Observations using dynamic routes. This involves utilizing Next.js's Link component to navigate to `/observation/[id]` based on each Observation's unique identifier.

### **Developer Decisions Needed**:

- Design the search and filtering functionality within the Gallery. Choose the optimal method for fetching and displaying Observations, considering performance and scalability.

### URL Segments

The Gallery's base URL is static, serving as an entry point to various Gallery functionalities. The nested paths for browsing and searching within the Gallery are also static, indicating specific actions or views within the Gallery. These URLs are intuitive and descriptive, enhancing user navigation and SEO.

- callofluci.art/gallery
- callofluci.art/gallery/browse
- callofluci.art/gallery/search

---