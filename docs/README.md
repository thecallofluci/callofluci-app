# Maintaining Technical Documentation

This README.md discusses how Documentation is created and maintained for Call Of Luci. It includes three primary documents:

1. Repository Structure (`repository.md`): explains the organization of the codebase, how the project is structured and how its various parts interact. 

2. File Manifest (`manifest.md`): comprehensive list of all files with descriptions (short and long). It is a markdown table created from `projectStructure.json` using the `generateMarkdown.ts` script.

3. Directory Tree (`tree.md`): a graphical index of the project, providing a quick and intuitive way to grasp the project's layout.

Supporting files:

1. `projectStructure.json`: master file manifest in JSON format
2. `generateMarkdown.ts`: a utility script for generating markdown