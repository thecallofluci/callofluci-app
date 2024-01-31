// generateManifest.ts
// markdown script that parses JSON to create a markdown table in .md output file

import { readFile, writeFile } from 'fs'
import { join } from 'path'

// Define the interface for the file structure
interface FileDescription {
	fileName: string
	shortDescription: string
	longDescription: string
}

interface ProjectManifest {
	file: FileDescription[]
}

const jsonFilePath = join(__dirname, 'manifest.json') // Corrected path
const markdownFilePath = join(__dirname, 'manifest.md') // Corrected path

// Read the JSON file
readFile(jsonFilePath, 'utf8', (err, data) => {
	if (err) {
		console.error('Error reading the JSON file:', err)
		return
	}

	// Parse the JSON data
	const jsonData: ProjectManifest = JSON.parse(data)

	// Start the markdown content with a Heading 1
	let markdownContent = `# Manifest\n\n`

	// Start the markdown table with headers
	// Adjust the separator row for left alignment and increase the width of the second column by approximately 30%
	markdownContent += `| Filename | Short Description               | Long Description |\n`
	markdownContent += `| :------- | :-------------------------------- | :--------------- |\n`

	// Iterate over the JSON "file" array and add each file to the markdown table
	jsonData.file.forEach((file) => {
		// Wrap the fileName with backticks for code formatting
		markdownContent += `| \`${file.fileName}\` | ${
			file.shortDescription
		} | ${file.longDescription.replace(/\n/g, ' ')} |\n`
	})

	// Write the markdown content to a file
	writeFile(markdownFilePath, markdownContent, (err) => {
		if (err) {
			console.error('Error writing the Markdown file:', err)
			return
		}
		console.log('Markdown documentation has been generated successfully!')
	})
})
