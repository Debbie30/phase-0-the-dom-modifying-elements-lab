// Find the main#main element
const mainElement = document.getElementById('main');

// Check if the main element exists
if (mainElement) {
    // Remove the main element from the DOM
    mainElement.remove();
} else {
    console.log("main#main element not found.");
}
// Create a new <h1> element
const newHeader = document.createElement('h1');

// Optionally, add some text content to the new <h1> element
newHeader.textContent = "This is a new header";

// Set the id attribute of the new <h1> element to 'victory'
newHeader.setAttribute('id', 'victory');

// Now, newHeader variable points to the newly created <h1> element with the id 'victory'
newHeader.setAttribute('id', 'victory');

const yourName = 'Your Name'; // Replace 'Your Name' with your actual name

// Set the text content of the <h1> element to include your name
newHeader.textContent = `${yourName} is the champion`;