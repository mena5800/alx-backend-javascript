const cleanSet = (set, startString) => {
  let ans = '';
  if (startString === '') {
    return ans;
  }
  for (const val of set) {
    if (val.startsWith(startString)) {
      ans += val.substring(startString.length);
      ans += '-';
    }
  }

  return (ans.substring(0, ans.length - 1));
};

export default cleanSet;
