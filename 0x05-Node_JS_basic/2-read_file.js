const fs = require('fs');

const countStudents = (path) => {
  try {
    const options = {
      encoding: 'utf-8',
    };
    const data = fs.readFileSync(path, options);
    const lines = data.split('\n');
    const students = lines.slice(1).map((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      return {
        firstname, lastname, age, field,
      };
    });
    const fieldStudents = {};
    students.forEach((val) => {
      const { field } = val;
      if (fieldStudents[field] === undefined) {
        fieldStudents[field] = [val.firstname];
      } else {
        fieldStudents[field].push(val.firstname);
      }
    });
    console.log(`Number of students: ${students.length}`);
    for (const field in fieldStudents) {
      if (Object.prototype.hasOwnProperty.call(fieldStudents, field)) {
        console.log(`Number of students in ${field}: ${fieldStudents[field].join(', ')}`);
      }
    }
  } catch (e) {
    throw Error('Cannot load the database');
  }
};

module.exports = countStudents;
