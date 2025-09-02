const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();
    if (!data) {
      throw new Error('Cannot load the database');
    }

    // Split into lines and remove the header
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const header = lines.shift().split(',');

    // Find indexes for relevant fields
    const firstNameIndex = header.indexOf('firstname');
    const fieldIndex = header.indexOf('field');

    if (firstNameIndex === -1 || fieldIndex === -1) {
      throw new Error('Cannot load the database');
    }

    console.log(`Number of students: ${lines.length}`);

    const fields = {};

    for (const line of lines) {
      const record = line.split(',');
      const field = record[fieldIndex];
      const firstName = record[firstNameIndex];

      if (field && firstName) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
    }

    for (const [field, students] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
