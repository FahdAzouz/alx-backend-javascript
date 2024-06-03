export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  const newBuffer = ArrayBuffer(length);
  const int8 = Int8Array(newBuffer, 0, length);
  int8.set([value], position);
  return new DataView(newBuffer);
}
