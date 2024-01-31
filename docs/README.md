# Documentation

## Overview

This README.md discusses how simple Documentation is created and maintained for the development of
Call Of Luci. It includes three primary documents:

1. **Compendium** (`compendium.md`) serves as a detailed exploration of the project's codebase,
   detailing its structure and the organization of its components. This document is generated manually.

2. **Manifest** (`manifest.md`) acts as a meticulous inventory, cataloging every file within the
   project's codebase. This document is automatically generated from a master JSON file
(`manifest.json`) and markdown utility script (`generateManifest.ts`).

3. **Tree** (`tree.md`) offers a graphical index of the project's directory structure, serving as a
   visual guide to its layout. This document is generated manually.

## Automation and Maintenance

Manifest is dynamically generated from `manifest.json`, a master file containing names and descriptions of all project files. 

The `generateManifest.ts` script is responsible for converting `manifest.json` into the markdown
table found in `manifest.md`. This script reads the JSON file, iterates over its contents, and
formats them into a markdown table, which is then written to `manifest.md`.

The `generateManifest.ts` script transforms `manifest.json` into a markdown table in `manifest.md`. This script is the linchpin in our documentation automation, reading the JSON file, iterating over its contents, and formatting them into a markdown table.

--

## Generating Manifest with `generateManifest.ts`

To generate the Manifest (`manifest.md`) from `manifest.json` using the `generateManifest.ts` script, follow these steps:

1. **Ensure Node.js and TypeScript are Installed** 
This process requires both Node.js and TypeScript. Verify Node.js installation by running `node -v` and TypeScript by running `tsc -v` in your terminal. If either is not installed, download and install Node.js from [the official Node.js website](https://nodejs.org/) and TypeScript via npm (`npm install -g typescript`).

2. **Prepare `manifest.json`** 
Make sure that `manifest.json` is up-to-date with the latest file names and descriptions. 

3. **Compile TypeScript to JavaScript**
Navigate to the directory containing `generateManifest.ts` and compile the TypeScript file to JavaScript by running:

```bash
tsc generateManifest.ts
```

This command generates a `generateManifest.js` file in the same directory.

4. **Run the Generated JavaScript File**
Execute the compiled JavaScript file with Node.js to generate `manifest.md`:

```bash
node generateManifest.js
```

5. **Check `manifest.md`** 
After running the script, `manifest.md` will be updated with a markdown table reflecting the contents of `manifest.json`. Verify that the document accurately represents your project's files.



