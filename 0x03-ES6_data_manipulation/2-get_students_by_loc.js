const getStudentsByLocation = (students, city) => {
  const ans = students.filter((student) => student.location === city);
  return ans;
};

export default getStudentsByLocation;
