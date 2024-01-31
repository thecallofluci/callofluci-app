# Documentation

## Overview

This README.md discusses how simple Documentation is created and maintained for the development of
Call Of Luci. 

It includes three primary documents:

1. **Compendium** (`compendium.md`) serves as an exploration of the project's codebase,
   detailing its structure and the organization of its components. This document is generated manually.

2. **Manifest** (`manifest.md`) acts as a meticulous inventory, cataloging every file within the
   project's codebase. This document is automatically generated from a master JSON file
(`manifest.json`) and markdown utility script (`generateManifest.ts`).

3. **Tree** (`tree.md`) offers a graphical index of the project's directory structure, serving as a
   visual guide to its layout. This document is generated manually.

## Updates

Manifest is dynamically generated from `manifest.json`, a master file containing names and descriptions of all project files. 

The `generateManifest.ts` script transforms `manifest.json` into a markdown table in `manifest.md`. This script is the linchpin in our documentation automation, reading the JSON file, iterating over its contents, and formatting them into a markdown table.

--

## Generating Manifest

Use the `generateManifest.ts` script to generate `manifest.md` from `manifest.json`.

First, ensure that `manifest.json` is up-to-date with the latest file names and descriptions. 

Next, navigate to the directory containing `generateManifest.ts` and compile the TypeScript file to JavaScript by running:

```ts
tsc generateManifest.ts
```

This command generates a `generateManifest.js` file in the same directory.

Next, execute the compiled JavaScript file with Node.js to generate `manifest.md` by running the following command:

```ts
node generateManifest.js
```

After running the script, `manifest.md` will be updated with a markdown table reflecting the contents of `manifest.json`. Verify that the document accurately represents your project's files.



