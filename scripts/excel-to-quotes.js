// scripts/excel-to-quotes.js
const XLSX = require('xlsx');
const fs = require('fs');

// Path to your Excel file containing quotes
// Update this path to point to your quotes Excel file
const excelFile = './scripts/QuoteDatabase.xlsx';

// Read the workbook
const workbook = XLSX.readFile(excelFile);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert to JSON
const rows = XLSX.utils.sheet_to_json(worksheet);

// Convert rows to quote objects
// Note: Update 'Quote' and 'Author' to match your Excel column names
const quotes = rows.map(row => ({
    quote: row.Quote || '',
    author: row.Author || 'Unknown'
}));

// Output as JS file
const output = `// Auto-generated from Excel file
const quotes = ${JSON.stringify(quotes, null, 2)};

/**
 * Get a random quote from the database
 * @returns {Object} quote object containing the quote text and author
 */
export const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

/**
 * Get a specific quote by index
 * @param {number} index - The index of the quote to retrieve
 * @returns {Object} quote object containing the quote text and author
 */
export const getQuoteByIndex = (index) => {
  if (index >= 0 && index < quotes.length) {
    return quotes[index];
  }
  return getRandomQuote(); // Fallback to a random quote if index is invalid
};

/**
 * Get a quote related to a specific section
 * This returns a random quote for now, but could be enhanced to return quotes relevant to specific topics
 * @param {string} section - The section name
 * @returns {Object} quote object containing the quote text and author
 */
export const getQuoteForSection = (section) => {
  // For now, just return a random quote
  return getRandomQuote();
};

export default quotes;
`;

fs.writeFileSync('./src/components/gameifiedtest/QuoteDatabase.js', output);

console.log('Quotes exported to QuoteDatabase.js');