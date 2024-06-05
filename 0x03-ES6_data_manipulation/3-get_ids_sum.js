const getStudentIdsSum = (students) => {
  const ans = students.reduce((acc, cur) => acc + cur.id, 0);
  return ans;
};

export default getStudentIdsSum;
