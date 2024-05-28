export default function iterateThroughObject(reportWithIterator) {
  let ans = '';
  // eslint-disable-next-line guard-for-in
  for (const val of reportWithIterator) {
    ans += `${val} | `;
  }
  return ans.substring(0, ans.length - 3);
}
