const fs = require('fs');

module.exports = function countStudents(path) {
  let data = [];

  try {
    data = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
  } catch (err) {
    throw Error('Cannot load the database');
  }
  data = data.split('\n');
  const headers = data.shift().split(',');

  const groups = {};
  const studentsObjects = [];

  data.forEach((row) => {
    if (row) {
      const student = row.split(',');
      const studentObject = {};

      headers.forEach((header, index) => {
        studentObject[header] = student[index];
        if (header === 'field') {
          if (groups[info[index]]) {
            groups[info[index]].push(studentObject.firstname);
          } else {
            groups[info[index]] = [studentObject.firstname];
          }
        }
      });
      studentsObjects.push(studentObject);
    }
  });

  console.log(`Number of students: ${studentsObjects.length}`);

  for (const group in groups) {
    if (groups[group]) {
      const listStudents = groups[group];
      console.log(`Number of students in ${group}: ${listStudents.length}. List: ${listStudents.join(', ')}`);
    }
  }
};
