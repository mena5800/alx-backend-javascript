const createInt8TypedArray = (length, position, value) => {
  // Step 1: Create a new ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);

  // Step 2: Create a DataView to interact with the buffer
  const view = new DataView(buffer);

  // Step 3: Check if the position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Step 4: Set the Int8 value at the specified position
  view.setInt8(position, value);

  // Return the buffer
  return buffer;
};

export default createInt8TypedArray;
