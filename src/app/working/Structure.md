# Project Structure

## Overview

The Call Of Luci project adheres to the Next.js framework's [unopinionated approach](https://nextjs.org/docs/app/building-your-application/routing/colocation) towards project organization and file colocation. The
structure is divided into three top-level directories: `app`, `config`, and `types`. The `app`
directory is the core of the Next.js [App Router](https://nextjs.org/docs/app), containing routes,
components, hooks, and styles. The `config` directory holds configuration files that define global
settings and constants, while the `types` directory contains TypeScript type definitions and
interfaces. This organization facilitates easy navigation and management of the project's codebase.

| File or Folder            | Description                  |
| :------------------------ | :--------------------------- |
| **Top-Level Directories** |                              |
| `/public`                 | static assets served         |
| `/src`                    | source code for Call Of Luci |
|                           |                              |
| **Main Directories**      |                              |
| `/src/app`                | Next.js App Router           |
| `/src/config`             | Configuration Files          |
| `/src/types`              | Type Definitions             |


## Root-Level Files

Root-level files in the Call of Luci project primarily consist of configuration and metadata files that define the environment, coding standards, dependencies, and build processes.

| Root-Level Files           |                                                          |
| :------------------------  | :------------------------------------------------------- |
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


## app Directory

The `app` directory in the Call of Luci project is the central hub for the Next.js App Router,
organizing the application's primary routes and housing the core functional elements of the
application.

| **app Directory** | | | `/src/app/` | Next.js App Router | | `/src/app/(routes)` | primary route
group | | `/src/app/components` | reusable React components | | `/src/app/hooks` | custom React
hooks | | `/src/app/lib` | shared library | | `/src/app/styles` | global styles, colors, fonts,
themes | | `/src/app/utils` | utility functions | | `/src/app/working` | temp directory containing
works in progress |


## config Directory

[The app-level explanation].

[OVERVIEW TABLE]

## types Directory

[The app-level explanation].

[OVERVIEW TABLE]

## public Directory

[The app-level explanation].

[OVERVIEW TABLE]

