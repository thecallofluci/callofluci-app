"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
// Correct the paths to not include an extra 'docs' since __dirname already points to the current directory of the script
var jsonFilePath = (0, path_1.join)(__dirname, 'projectStructure.json'); // Corrected path
var markdownFilePath = (0, path_1.join)(__dirname, 'Documentation.md'); // Corrected path
// Read the JSON file
(0, fs_1.readFile)(jsonFilePath, 'utf8', function (err, data) {
    if (err) {
        console.error('Error reading the JSON file:', err);
        return;
    }
    // Parse the JSON data
    var jsonData = JSON.parse(data);
    // Start the markdown table with headers
    var markdownTable = "| Filename | Short Description | Long Description |\n";
    markdownTable += "| -------- | ----------------- | ---------------- |\n";
    // Iterate over the JSON "file" array and add each file to the markdown table
    jsonData.file.forEach(function (file) {
        markdownTable += "| ".concat(file.fileName, " | ").concat(file.shortDescription, " | ").concat(file.longDescription.replace(/\n/g, ' '), " |\n");
    });
    // Write the markdown table to a file
    (0, fs_1.writeFile)(markdownFilePath, markdownTable, function (err) {
        if (err) {
            console.error('Error writing the Markdown file:', err);
            return;
        }
        console.log('Markdown documentation has been generated successfully!');
    });
});
