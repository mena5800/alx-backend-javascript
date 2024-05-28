export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  for (let word of array) {
    array[idx] = appendString + word;
    idx += 1;
  }

  return array;
}
