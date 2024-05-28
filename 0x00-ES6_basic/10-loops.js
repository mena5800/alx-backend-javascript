export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  for (const word of array) {
    // eslint-disable-next-line no-param-reassign
    array[idx] = appendString + word;
    idx += 1;
  }

  return array;
}
