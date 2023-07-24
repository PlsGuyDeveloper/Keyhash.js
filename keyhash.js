
// Function to generate a random key
function generateKey(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    key += characters[randomIndex];
  }
  return key;
}

// Exporting the function to make it accessible to other modules
exports.generateKey = generateKey;

// Storing generated keys in an array for demonstration purposes
const generatedKeys = [];

// Function to get a generated key by index
function getKey(index) {
  if (index >= 0 && index < generatedKeys.length) {
    return generatedKeys[index];
  } else {
    return null;
  }
}

// Function to get all generated keys
function getAllKeys() {
  return generatedKeys;
}

// Exporting the functions to make them accessible to other modules
exports.getKey = getKey;
exports.getAllKeys = getAllKeys;
