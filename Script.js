// JavaScript code to handle search form submission
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get the search query from the input field
    const query = document.getElementById("searchInput").value.trim();
    
    if (query !== "") {
      // Perform actions with the search query, such as redirecting to a search results page
      // For example, you can redirect to a search_results.html page with the search query as a URL parameter
      window.location.href = "search_results.html?q=" + encodeURIComponent(query);
    } else {
      // Handle empty search query if needed
      alert("Please enter a search query.");
    }
  });
  