const fs = require('fs');

const countStudents = (path) => {
  const options = {
    encoding: 'utf-8',
  };
  const data = fs.readFile(path, options, (err, data) => {
    if (err) {
      throw Error('Cannot load the database');


    }
  };
};

module.exports = countStudents;
