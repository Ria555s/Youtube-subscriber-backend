
async function fetchData(endpoint, queryParams = {}) {
      let url = endpoint;
      const query = new URLSearchParams(queryParams);
      if (query.toString()) {
          url += '?' + query.toString();
      }
      try {
          const response = await fetch(url);
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          return data;
      } catch (error) {
          console.error('Error fetching data:', error);
          displayArea.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
          return null;
      }
  }

  // Example fetch call
  subscribersButton.addEventListener('click', async function() {
      //change localhost:3000 to your backend url.
      const subscribers = await fetchData('http://localhost:3000/subscribers');
      if (subscribers) {
          displaySubscribers(subscribers, 'all');
      }
  });

  // ... (Rest of your JavaScript code)
  // Start Server
