export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    arrayEnd.push(`${appendString}${idx}`);
  }

  return array;
}
