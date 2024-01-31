# Manifest

| Filename | Description |
| :------- | :---------- |
| `.env` | This file contains environment variables essential for configuring the Next.js application, including API keys, database URLs, and other sensitive information that should not be hardcoded into the application's source code. |
| `.eslintrc.json` | ESLint configuration file that defines rules and standards for code quality and consistency across the project helping developers avoid common mistakes and maintain a unified coding style. |
| `.gitignore` | Lists files and directories that Git should ignore, preventing them from being tracked or uploaded to the repository. This includes node_modules, environment variables, and other non-source code files. |
| `.LICENSE` | Contains the license under which the project is released, specifying the terms under which others can use, modify, and distribute the project. |
| `.prettierignore` | Specifies files and directories that the Prettier code formatter should not format. This is used to exclude files that either do not need formatting or where formatting could cause issues. |
| `.prettierrc` | Configuration file for Prettier, a code formatter that enforces a consistent style by parsing code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary. |
| `next.config.js` | Provides custom configurations for the Next.js application, including optimizations, redirects, rewrites, and other advanced configurations to enhance the app's performance and functionality. |
| `package-lock.json` | Automatically generated file that locks down the versions of installed packages, ensuring that the same versions are installed in all environments to avoid discrepancies in dependencies. |
| `package.json` | Central file for managing project dependencies, scripts, and version information. It includes scripts for building, testing, and starting the application, as well as listing all npm packages the project depends on. |
| `postcss.config.js` | Configuration file for PostCSS, a tool for transforming CSS with JavaScript plugins. This file specifies plugins used to autoprefix CSS, optimize performance, and support future CSS features. |
| `README.md` | The main documentation file that offers an overview of the project, including its purpose, features, installation instructions, usage examples, and contribution guidelines. |
| `tailwind.config.js` | Customizes the Tailwind CSS framework for the project, defining themes, breakpoints, and custom utilities to ensure a consistent design system across the application. |
| `tsconfig.json` | Configuration file for TypeScript, specifying the root files and the compiler options required to compile the project. It includes settings for JSX, module resolution, and output directories. |
| `error.tsx` | A custom error page component that catches client-side exceptions and renders user-friendly error messages. It enhances the user experience by providing clear information on errors and potential resolutions. |
| `layout.tsx` | Serves as the foundational layout component for the entire application, establishing the HTML structure and incorporating global styles, context providers, and the main layout components like headers and footers. |
| `loading.tsx` | A custom component that handles loading states across the application, utilizing React's Suspense feature. It displays a loading indicator during data fetching or component lazy loading, improving the user's perception of the app's responsiveness. |
| `page.tsx` | Acts as the main component for the application's home page, integrating various UI components and custom styles to create an engaging and informative landing page for users. |
| `luciColors.ts` | Custom color palette definition for the application, establishing a unique and consistent visual theme. |
| `luciSemantic.ts` | Builds upon luciColors.ts to define semantic color themes for light and dark modes, enhancing accessibility and user experience. |
| `fonts.ts` | Imports and configures global fonts for the application, utilizing Next.js's font optimization feature for improved performance. |
| `typewriter.css` | Contains CSS animations designed to simulate a typewriter effect, adding a unique stylistic element to text presentations within the application. |
| `ObservationForm.tsx` | Functional component serving as the user interface for users to create and submit Observations. |
| `useObservationForm.ts` | Custom React hook encapsulating the logic for handling the creation and submission of Observations. |
| `AppWrapper.tsx` | Serves as the overarching layout component that wraps around the entire application, providing a consistent structure. |
| `Body.tsx` | Server Component acting as the primary container for the main content of the application, facilitating server-side rendering. |
| `Footer.tsx` | Responsible for rendering the application's footer, containing copyright and other relevant information. |
| `Header.tsx` | Dedicated layout component for rendering the application's header section, including navigation and branding. |
| `providers.tsx` | Wraps the application's UI components with necessary context providers for state management and theming. |
| `globals.css` | Foundational stylesheet for the application integrating Tailwind CSS's base, components, and utilities layers for a consistent styling across the application. |
| `primitives.ts` | Custom utility file leveraging tailwind-variants to define a cohesive set of design primitives for the application. |
| `luciDarkTheme.ts` | A custom theme configuration file that outlines the dark theme settings for the application, ensuring a consistent and visually appealing dark mode experience. |
| `luciLightTheme.ts` | Custom theme configuration file that specifies the light theme settings for the application, providing a bright and clear visual experience for users. |
| `LuciButton.tsx` | LuciButton.tsx delivers a custom Button component, built on the NextUI Button. It facilitates user interaction, allowing for actions to be performed with a single tap, and is a staple across the application. |
| `LuciCard.tsx` | LuciCard.tsx is deployed to showcase Observations created by users, utilizing the NextUI Card component. This component serves as a versatile container for text, photos, and actions related to a single subject. |
| `LuciIcons.tsx` | LuciIcons.tsx compiles a set of React components dedicated to rendering SVG icons, offering a diverse iconography palette for the application. This collection enhances the visual language and user interface. |
| `LuciImage.tsx` | LuciImage.tsx wraps the Next.js Image component, enriching it with additional styling and layout options. It ensures images are consistently styled with borders, rounded corners, and shadows across the application. |
| `LuciModal.tsx` | LuciModal.tsx crafts a bespoke Modal component suite, employing the NextUI Modal for displaying dialogs that demand attention or convey additional information, seamlessly integrating with the application's design. |
| `LuciNavbar.tsx` | LuciNavbar.tsx establishes a comprehensive navigation bar, leveraging the NextUI Navbar component. It supports branding, navigation links, a collapse menu, and more, ensuring a responsive navigation experience. |
| `LuciSpinner.tsx` | LuciSpinner.tsx introduces a visual loading or processing state indicator, utilizing the NextUI Spinner element. This component is adept at signaling unspecified wait times or the duration of processes. |
| `LuciTextArea.tsx` | LuciTextArea.tsx enhances the NextUI Textarea component into a customizable text area, designed for writing extensive texts. It leverages the multi-line input capability of NextUI to facilitate user text input. |
| `LuciThemeSwitch.tsx` | LuciThemeSwitch.tsx offers a theme toggle switch, enabling users to alternate between light and dark themes. It is constructed using the NextUI Switch component, providing a clear choice between two states. |
| `submitObservation.ts` | Contains the submitObservation function, a server-side utility for processing Observation submissions. It exemplifies server-side functionality within the Next.js framework, showcasing how to handle data submissions securely and efficiently. |
| `constants.ts` | Central configuration module that defines the site structure and external resources, serving as a repository for constants used throughout the application. |
| `metadata.ts` | Aligns with site configuration to define application-wide metadata, ensuring consistent metadata usage across the application for SEO and usability enhancements. |
| `site.ts` | Acts as a central store for constants, facilitating consistent access to key configuration values across the application, enhancing maintainability and scalability. |
| `interfaces.ts` | Defines TypeScript interfaces for structured data objects and UI components, promoting type safety and consistency across the application's codebase. |
| `types.ts` | Specifies custom TypeScript types, aiding in maintaining a consistent and type-safe codebase by defining common types used across the application. |
