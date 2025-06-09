const XLSX = require('xlsx');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// Path to your Excel file
const excelFile = './scripts/CNC_Machining_Questions_0215.xlsx';

// Read the workbook
const workbook = XLSX.readFile(excelFile);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert to JSON
const rows = XLSX.utils.sheet_to_json(worksheet);

// Helper to parse options (assumes ';' delimiter)
function parseOptions(optionsCell) {
    if (typeof optionsCell === 'string') {
        try {
            // Safely parse the string as an array
            const arr = JSON.parse(optionsCell.replace(/'/g, '"'));
            if (Array.isArray(arr)) {
                return arr.map(opt => opt.trim());
            }
        } catch (e) {
            // fallback: split by comma if parsing fails
            return optionsCell.split(',').map(opt => opt.trim());
        }
    }
    return [];
}

// Filter out unpublished questions and convert rows to question objects
const questions = rows
    .filter(row => row['P/UP'] !== 'Unpublished')
    .map(row => ({
        id: uuidv4(),
        section: row.Section || '',
        difficulty: row.Difficulty || '',
        type: row.type || 'multiple_choice',
        question: row.Question || '',
        options: parseOptions(row.Options),
        answer: row.Answer || ''
    }));

// Output as JS file (or JSON if you prefer)
const output = `const questions = ${JSON.stringify(questions, null, 2)};\n\nexport default questions;\n`;
fs.writeFileSync('./src/questions.js', output);

console.log('Questions exported to questions.js');