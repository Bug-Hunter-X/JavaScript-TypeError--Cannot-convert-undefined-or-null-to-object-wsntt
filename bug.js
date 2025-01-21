function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; // This line could throw an error if a and b are not numbers
}