const fs = require('fs');

module.exports = function countStudents(path) {
  return new Promise(((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, params) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      let data = params;
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
      const number = `Number of students: ${studentsObjects.length}`;

      let response = `${number}\n`;
      console.log(number);

      for (const item in groups) {
        if (groups[item]) {
          const list = groups[item];
          const num_of_students = `Number of students in ${item}: ${list.length}. List: ${list.join(', ')}`;
          response += `${num_of_students}\n`;
          console.log(num_of_students);
        }
      }
      resolve(response);
    });
  }));
};
