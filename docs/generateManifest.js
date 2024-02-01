"use strict";
// generateManifest.ts
// markdown script that parses JSON to create a markdown table in .md output file
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var jsonFilePath = (0, path_1.join)(__dirname, 'manifest.json'); // source data
var markdownFilePath = (0, path_1.join)(__dirname, 'manifest.md'); // output file
// Read the JSON file
(0, fs_1.readFile)(jsonFilePath, 'utf8', function (err, data) {
    if (err) {
        console.error('Error reading the JSON file:', err);
        return;
    }
    // Parse the JSON data
    var jsonData = JSON.parse(data);
    // Start the markdown content with a Heading 1
    var markdownContent = "# Manifest\n\n";
    // Start the markdown table with headers
    markdownContent += "| Filename | Long Description |\n";
    markdownContent += "| :------- | :--------------- |\n";
    // Iterate over the JSON "file" array and add each file to the markdown table
    jsonData.file.forEach(function (file) {
        // Replace newlines in longDescription with spaces for better markdown formatting
        var formattedLongDescription = file.longDescription.replace(/\n/g, ' ');
        // Wrap the fileName with backticks for code formatting
        // Add the long description to the second column
        markdownContent += "| `".concat(file.fileName, "` | ").concat(formattedLongDescription, " |\n");
    });
    // Write the markdown content to a file
    (0, fs_1.writeFile)(markdownFilePath, markdownContent, function (err) {
        if (err) {
            console.error('Error writing the Markdown file:', err);
            return;
        }
        console.log('Markdown documentation has been generated successfully!');
    });
});
