// Export this function so it can be imported
// in a different file in the following format:
//   import parser from './parser';

const parser = (string) => {
  if (string === "value") {
    return "Hello, world!";
  } else {
    return "Not sure what to do.";
  }
}

