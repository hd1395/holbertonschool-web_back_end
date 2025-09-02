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

  data.forEach((item) => {
    if (item) {
      const student = item.split(',');
      const studentObject = {};

      headers.forEach((header, index) => {
        studentObject[header] = student[index];
        if (header === 'field') {
          if (groups[student[index]]) {
            groups[student[index]].push(studentObject.firstname);
          } else {
            groups[student[index]] = [studentObject.firstname];
          }
        }
      });
      studentsObjects.push(studentObject);
    }
  });

  console.log(`Number of students: ${studentsObjects.length}`);

  for (const item in groups) {
    if (groups[item]) {
      const listStudents = groups[item];
      console.log(`Number of students in ${item}: ${listStudents.length}. List: ${listStudents.join(', ')}`);
    }
  }
};
