//your code here
// Input array of tourist spots
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Function to sort tourist spots without articles
function sortTouristSpots(spots) {
  // Define the articles to exclude from sorting
  const articles = ['a', 'an', 'the'];

  // Custom sorting function
  function compareSpots(a, b) {
    // Remove the articles from the tourist spots
    const spotA = removeArticles(a);
    const spotB = removeArticles(b);

    // Compare the modified tourist spots
    return spotA.localeCompare(spotB);
  }

  // Function to remove articles from a tourist spot
  function removeArticles(spot) {
    // Split the spot name into individual words
    const words = spot.split(' ');

    // Filter out the articles
    const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));

    // Join the filtered words back into a string
    return filteredWords.join(' ');
  }

  // Sort the tourist spots using the custom sorting function
  spots.sort(compareSpots);

  // Return the sorted tourist spots
  return spots;
}

// Sort the tourist spots without articles
const sortedTouristSpots = sortTouristSpots(touristSpots);

// Display the sorted tourist spots inside the <ul> element with id 'band'
const ulElement = document.getElementById('band');
sortedTouristSpots.forEach(spot => {
  const liElement = document.createElement('li');
  liElement.textContent = spot;
  ulElement.appendChild(liElement);
});
