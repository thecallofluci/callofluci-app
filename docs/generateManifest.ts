// generateManifest.ts
// markdown script that parses JSON to create a markdown table in .md output file

import { readFile, writeFile } from 'fs';
import { join } from 'path';

// Define the interface for the file structure
interface FileDescription {
    fileName: string;
    shortDescription: string; // Ensure this is included in the interface
    longDescription: string;
}

interface ProjectManifest {
    file: FileDescription[];
}

const jsonFilePath = join(__dirname, 'manifest.json'); // source data
const markdownFilePath = join(__dirname, 'manifest.md'); // output file

// Read the JSON file
readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the JSON file:', err);
        return;
    }

    // Parse the JSON data
    const jsonData: ProjectManifest = JSON.parse(data);

    // Start the markdown content with a Heading 1
    let markdownContent = `# Manifest\n\n`;

    // Start the markdown table with headers
    markdownContent += `| Filename | Description |\n`;
    markdownContent += `| :------- | :---------- |\n`;

    // Iterate over the JSON "file" array and add each file to the markdown table
    jsonData.file.forEach((file) => {
        // Combine short and long descriptions with an HTML line break
        const combinedDescription = `${file.shortDescription}<br><br>${file.longDescription.replace(/\n/g, ' ')}`;
        // Wrap the fileName with backticks for code formatting
        // Add the combined description to the second column
        markdownContent += `| \`${file.fileName}\` | ${combinedDescription} |\n`;
    });

    // Write the markdown content to a file
    writeFile(markdownFilePath, markdownContent, (err) => {
        if (err) {
            console.error('Error writing the Markdown file:', err);
            return;
        }
        console.log('Markdown documentation has been generated successfully!');
    });
});