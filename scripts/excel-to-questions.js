const XLSX = require('xlsx');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// Path to your Excel file
const excelFile = './scripts/CNC_Machining_Questions 1.xlsx';

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

// Convert rows to question objects
const questions = rows.map(row => ({
  id: uuidv4(),
  section: row.section || '',
  difficulty: row.difficulty || '',
  type: row.type || 'multiple_choice',
  question: row.question || '',
  options: parseOptions(row.options),
  answer: row.answer || ''
}));

// Output as JS file (or JSON if you prefer)
const output = `const questions = ${JSON.stringify(questions, null, 2)};\n\nexport default questions;\n`;
fs.writeFileSync('./src/questions.js', output);

console.log('Questions exported to questions.js');