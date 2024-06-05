// Create and export the WeakMap instance
export const weakMap = new WeakMap();

// Create and export the queryAPI function
export function queryAPI(endpoint) {
  // Get the current count from the WeakMap
  const count = weakMap.get(endpoint) || 0;

  // Increment the count
  weakMap.set(endpoint, count + 1);

  // Check if the count is 5 or more
  if (count + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
