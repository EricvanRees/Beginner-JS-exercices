/* 
Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.
*/

/* 
AbortController gives you a signal that you pass to fetch.

If you call controller.abort(), the request is canceled.

We set a timer (setTimeout) to call abort() after the given milliseconds.

finally(() => clearTimeout(id)) ensures we don’t leave the timeout running.
*/

// if no timeout value is given, it will use 5000 milliseconds as default value
function fetchWithTimeout(url, options = {}, timeout = 5000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  return fetch(url, { ...options, signal: controller.signal })
    .finally(() => clearTimeout(id));
}

// Usage. Set timeout to a very low number so it will cancel out almost immediately
fetchWithTimeout('./JSON/movies.json', {})
  .then(response => response.json())
  .then(data => console.log("Data:", data))
  .catch(err => {
    if (err.name === "AbortError") {
      console.error("❌ Request timed out");
    } else {
      console.error("❌ Fetch error:", err);
    }
  });




