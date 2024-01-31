# Manifest

| Filename | Description |
| :------- | :---------- |
| `.env` | Short Description: |
|  | Configures environment variables. |
|  | Long Description: |
|  | This file contains environment variables essential for configuring the Next.js application, including API keys, database URLs, and other sensitive information that should not be hardcoded into the application's source code. |
| `.eslintrc.json` | Short Description: |
|  | Enforces code quality standards. |
|  | Long Description: |
|  | ESLint configuration file that defines rules and standards for code quality and consistency across the project helping developers avoid common mistakes and maintain a unified coding style. |
| `.gitignore` | Short Description: |
|  | Specifies files for Git to ignore. |
|  | Long Description: |
|  | Lists files and directories that Git should ignore, preventing them from being tracked or uploaded to the repository. This includes node_modules, environment variables, and other non-source code files. |
| `.LICENSE` | Short Description: |
|  | Defines usage terms. |
|  | Long Description: |
|  | Contains the license under which the project is released, specifying the terms under which others can use, modify, and distribute the project. |
| `.prettierignore` | Short Description: |
|  | Lists files for Prettier to ignore. |
|  | Long Description: |
|  | Specifies files and directories that the Prettier code formatter should not format. This is used to exclude files that either do not need formatting or where formatting could cause issues. |
| `.prettierrc` | Short Description: |
|  | Configures Prettier formatter. |
|  | Long Description: |
|  | Configuration file for Prettier, a code formatter that enforces a consistent style by parsing code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary. |
| `AppWrapper.tsx` | Short Description: |
|  | Primary layout structure. |
|  | Long Description: |
|  | Serves as the overarching layout component that wraps around the entire application, providing a consistent structure. |
| `Body.tsx` | Short Description: |
|  | Main content container. |
|  | Long Description: |
|  | Server Component acting as the primary container for the main content of the application, facilitating server-side rendering. |
| `constants.ts` | Short Description: |
|  | Outlines site structure. |
|  | Long Description: |
|  | Central configuration module that defines the site structure and external resources, serving as a repository for constants used throughout the application. |
| `error.tsx` | Short Description: |
|  | Handles client-side errors. |
|  | Long Description: |
|  | A custom error page component that catches client-side exceptions and renders user-friendly error messages. It enhances the user experience by providing clear information on errors and potential resolutions. |
| `fonts.ts` | Short Description: |
|  | Configures global fonts. |
|  | Long Description: |
|  | Imports and configures global fonts for the application, utilizing Next.js's font optimization feature for improved performance. |
| `Footer.tsx` | Short Description: |
|  | Layout component for the footer. |
|  | Long Description: |
|  | Responsible for rendering the application's footer, containing copyright and other relevant information. |
| `globals.css` | Short Description: |
|  | Global stylesheet. |
|  | Long Description: |
|  | Foundational stylesheet for the application integrating Tailwind CSS's base, components, and utilities layers for a consistent styling across the application. |
| `Header.tsx` | Short Description: |
|  | Layout component for the header. |
|  | Long Description: |
|  | Dedicated layout component for rendering the application's header section, including navigation and branding. |
| `interfaces.ts` | Short Description: |
|  | TypeScript interfaces for data and UI. |
|  | Long Description: |
|  | Defines TypeScript interfaces for structured data objects and UI components, promoting type safety and consistency across the application's codebase. |
| `layout.tsx` | Short Description: |
|  | Defines the app's root layout. |
|  | Long Description: |
|  | Serves as the foundational layout component for the entire application, establishing the HTML structure and incorporating global styles, context providers, and the main layout components like headers and footers. |
| `loading.tsx` | Short Description: |
|  | Manages loading states. |
|  | Long Description: |
|  | A custom component that handles loading states across the application, utilizing React's Suspense feature. It displays a loading indicator during data fetching or component lazy loading, improving the user's perception of the app's responsiveness. |
| `LuciButton.tsx` | Short Description: |
|  | Custom NextUI Button component. |
|  | Long Description: |
|  | LuciButton.tsx delivers a custom Button component, built on the NextUI Button. It facilitates user interaction, allowing for actions to be performed with a single tap, and is a staple across the application. |
| `LuciCard.tsx` | Short Description: |
|  | Custom NextUI Card component. |
|  | Long Description: |
|  | LuciCard.tsx is deployed to showcase Observations created by users, utilizing the NextUI Card component. This component serves as a versatile container for text, photos, and actions related to a single subject. |
| `luciColors.ts` | Short Description: |
|  | Defines custom color palette. |
|  | Long Description: |
|  | Custom color palette definition for the application, establishing a unique and consistent visual theme. |
| `luciDarkTheme.ts` | Short Description: |
|  | Defines the dark theme. |
|  | Long Description: |
|  | A custom theme configuration file that outlines the dark theme settings for the application, ensuring a consistent and visually appealing dark mode experience. |
| `LuciIcons.tsx` | Short Description: |
|  | Custom React components for SVG icons. |
|  | Long Description: |
|  | LuciIcons.tsx compiles a set of React components dedicated to rendering SVG icons, offering a diverse iconography palette for the application. This collection enhances the visual language and user interface. |
| `LuciImage.tsx` | Short Description: |
|  | Custom Next.js Image component. |
|  | Long Description: |
|  | LuciImage.tsx wraps the Next.js Image component, enriching it with additional styling and layout options. It ensures images are consistently styled with borders, rounded corners, and shadows across the application. |
| `luciLightTheme.ts` | Short Description: |
|  | Defines the light theme. |
|  | Long Description: |
|  | Custom theme configuration file that specifies the light theme settings for the application, providing a bright and clear visual experience for users. |
| `LuciModal.tsx` | Short Description: |
|  | Custom NextUI Modal component. |
|  | Long Description: |
|  | LuciModal.tsx crafts a bespoke Modal component suite, employing the NextUI Modal for displaying dialogs that demand attention or convey additional information, seamlessly integrating with the application's design. |
| `LuciNavbar.tsx` | Short Description: |
|  | Custom NextUI Navbar component. |
|  | Long Description: |
|  | LuciNavbar.tsx establishes a comprehensive navigation bar, leveraging the NextUI Navbar component. It supports branding, navigation links, a collapse menu, and more, ensuring a responsive navigation experience. |
| `luciSemantic.ts` | Short Description: |
|  | Establishes semantic color themes. |
|  | Long Description: |
|  | Builds upon luciColors.ts to define semantic color themes for light and dark modes, enhancing accessibility and user experience. |
| `LuciSpinner.tsx` | Short Description: |
|  | Custom NextUI Spinner component. |
|  | Long Description: |
|  | LuciSpinner.tsx introduces a visual loading or processing state indicator, utilizing the NextUI Spinner element. This component is adept at signaling unspecified wait times or the duration of processes. |
| `LuciTextArea.tsx` | Short Description: |
|  | Custom NextUI TextArea component. |
|  | Long Description: |
|  | LuciTextArea.tsx enhances the NextUI Textarea component into a customizable text area, designed for writing extensive texts. It leverages the multi-line input capability of NextUI to facilitate user text input. |
| `LuciThemeSwitch.tsx` | Short Description: |
|  | Custom NextUI Switch component. |
|  | Long Description: |
|  | LuciThemeSwitch.tsx offers a theme toggle switch, enabling users to alternate between light and dark themes. It is constructed using the NextUI Switch component, providing a clear choice between two states. |
| `metadata.ts` | Short Description: |
|  | Defines app-wide metadata. |
|  | Long Description: |
|  | Aligns with site configuration to define application-wide metadata, ensuring consistent metadata usage across the application for SEO and usability enhancements. |
| `next.config.js` | Short Description: |
|  | Customizes Next.js configurations. |
|  | Long Description: |
|  | Provides custom configurations for the Next.js application, including optimizations, redirects, rewrites, and other advanced configurations to enhance the app's performance and functionality. |
| `ObservationForm.tsx` | Short Description: |
|  | UI for creating Observations. |
|  | Long Description: |
|  | Functional component serving as the user interface for users to create and submit Observations. |
| `package-lock.json` | Short Description: |
|  | Locks package versions. |
|  | Long Description: |
|  | Automatically generated file that locks down the versions of installed packages, ensuring that the same versions are installed in all environments to avoid discrepancies in dependencies. |
| `package.json` | Short Description: |
|  | Manages dependencies and scripts. |
|  | Long Description: |
|  | Central file for managing project dependencies, scripts, and version information. It includes scripts for building, testing, and starting the application, as well as listing all npm packages the project depends on. |
| `page.tsx` | Short Description: |
|  | Entry point for the home page. |
|  | Long Description: |
|  | Acts as the main component for the application's home page, integrating various UI components and custom styles to create an engaging and informative landing page for users. |
| `postcss.config.js` | Short Description: |
|  | Configures PostCSS. |
|  | Long Description: |
|  | Configuration file for PostCSS, a tool for transforming CSS with JavaScript plugins. This file specifies plugins used to autoprefix CSS, optimize performance, and support future CSS features. |
| `primitives.ts` | Short Description: |
|  | Design primitives utility. |
|  | Long Description: |
|  | Custom utility file leveraging tailwind-variants to define a cohesive set of design primitives for the application. |
| `providers.tsx` | Short Description: |
|  | Context providers wrapper. |
|  | Long Description: |
|  | Wraps the application's UI components with necessary context providers for state management and theming. |
| `README.md` | Short Description: |
|  | Provides project overview. |
|  | Long Description: |
|  | The main documentation file that offers an overview of the project, including its purpose, features, installation instructions, usage examples, and contribution guidelines. |
| `site.ts` | Short Description: |
|  | Stores constants used throughout the app. |
|  | Long Description: |
|  | Acts as a central store for constants, facilitating consistent access to key configuration values across the application, enhancing maintainability and scalability. |
| `submitObservation.ts` | Short Description: |
|  | Handles Observation submissions. |
|  | Long Description: |
|  | Contains the submitObservation function, a server-side utility for processing Observation submissions. It exemplifies server-side functionality within the Next.js framework, showcasing how to handle data submissions securely and efficiently. |
| `tailwind.config.js` | Short Description: |
|  | Configures Tailwind CSS. |
|  | Long Description: |
|  | Customizes the Tailwind CSS framework for the project, defining themes, breakpoints, and custom utilities to ensure a consistent design system across the application. |
| `tsconfig.json` | Short Description: |
|  | Specifies TypeScript compiler options. |
|  | Long Description: |
|  | Configuration file for TypeScript, specifying the root files and the compiler options required to compile the project. It includes settings for JSX, module resolution, and output directories. |
| `types.ts` | Short Description: |
|  | Custom TypeScript types. |
|  | Long Description: |
|  | Specifies custom TypeScript types, aiding in maintaining a consistent and type-safe codebase by defining common types used across the application. |
| `typewriter.css` | Short Description: |
|  | Simulates typewriter effect. |
|  | Long Description: |
|  | Contains CSS animations designed to simulate a typewriter effect, adding a unique stylistic element to text presentations within the application. |
| `useObservationForm.ts` | Short Description: |
|  | Handles Observation form logic. |
|  | Long Description: |
|  | Custom React hook encapsulating the logic for handling the creation and submission of Observations. |
