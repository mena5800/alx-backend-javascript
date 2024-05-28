export default function createIteratorObject(report) {
  const allEmployees = [];
  // eslint-disable-next-line guard-for-in
  for (const key in report.allEmployees) {
    allEmployees.push(...report.allEmployees[key]);
  }
  return allEmployees;
}
