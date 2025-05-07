// Create and append the textarea and button elements
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

// Function to convert underscore_case to camelCase
function underscoreToCamelCase(str) {
  return str
    .toLowerCase() // Convert the whole string to lowercase
    .replace(/_([a-z])/g, (match, letter) => letter.toUpperCase()); // Replace underscores and capitalize the next letter
}

// Event listener for button click
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const camelCaseText = underscoreToCamelCase(text); // Convert the text to camelCase
  console.log(camelCaseText); // Log the camelCase version
});
