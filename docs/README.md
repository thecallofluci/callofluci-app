# Documentation

## Overview

This README.md discusses how core Documentation is created and maintained during the development of Call Of Luci.

It includes three core documents:

1. **Compendium** (`compendium.md`) serves as an exploration of the project's codebase,
   detailing its structure and the organization of its components. This document is generated manually.

2. **Manifest** (`manifest.md`) acts as a meticulous inventory, cataloging every file within the
   project's codebase. This document is automatically generated from a master JSON file
(`manifest.json`) and markdown utility script (`generateManifest.ts`).

3. **Tree** (`tree.md`) offers a graphical index of the project's directory structure, serving as a
   visual guide to its layout. This document is generated manually.

## Updates

Manifest is dynamically generated from `manifest.json`, a master file containing names and descriptions of all project files. A markdown script defined in `generateManifest.ts` transforms `manifest.json` into a markdown table in `manifest.md`. This script reads the JSON file, iterating over its contents, and formatting them into a markdown table.

## Generating Manifest

Use the `generateManifest.ts` script to generate `manifest.md` from `manifest.json`. First, ensure that `manifest.json` is up-to-date with the latest file names and descriptions. Next, navigate to the directory containing `generateManifest.ts` and compile the TypeScript file to JavaScript by running:

```ts
tsc generateManifest.ts
```

This command generates a `generateManifest.js` file in the same directory. Lastly, execute the compiled JavaScript file with Node.js to generate `manifest.md` by running the following command:

```ts
node generateManifest.js
```

After running the script, `manifest.md` will be updated with a markdown table reflecting the contents of `manifest.json`. Verify that the document accurately represents your project's files.

## Manifest Key Values

The `manifest.json` file serves as a comprehensive catalog of the project's files, outlining their purpose and organization. Below is a description of each key used in the manifest:

- **`fileName`**: Specifies the name of the file, including its extension. It uniquely identifies the file within the project.

- **`shortDescription`**: Provides a concise summary of the file's purpose or its primary functionality, offering a quick overview without the need to open the file.

- **`longDescription`**: Offers a detailed explanation of the file's role within the application, including its interactions with other parts of the project and any specific functionalities it provides.

- **`directory`**: Indicates the directory or logical grouping within the project to which the file belongs, helping to understand the file's placement in the project's architecture.

This documentation aims to clarify the structure and purpose of the `manifest.json` file, ensuring that team members can easily navigate and understand the project's organization.

