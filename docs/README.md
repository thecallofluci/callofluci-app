# Documentation

## Overview

This README.md discusses how simple Documentation is created and maintained for the development of Call Of Luci. It includes three primary documents:

1. **The Compendium** (`compendium.md`) serves as a detailed exploration of the project's codebase, detailing its structure and the organization of its components. 

2. **The Manifest** (`manifest.md`) acts as a meticulous inventory, cataloging every file within the project's codebase.

3. **The Tree** (`tree.md`) offers a graphical index of the project's directory structure, serving as a visual guide to its layout.

## Automation and Maintenance

The Manifest (`manifest.md`) is generated from a JSON object formatted as a markdown table and created from `projectStructure.json` using the `generateMarkdown.ts` script.

Supporting files:

1. `projectStructure.json`: master file manifest in JSON format
2. `generateMarkdown.ts`: a utility script for generating markdown