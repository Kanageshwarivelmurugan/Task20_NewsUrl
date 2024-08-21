document.addEventListener('DOMContentLoaded', () => {
    // Define API endpoints and keys
    const weatherApiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
  
    const newsUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_NEWS_API_KEY';
    

    // Fetch and display news data
    function fetchNews() {
        fetch(newsUrl)
            .then(response => response.json())
            .then(data => {
                const newsDataContainer = document.getElementById('news-data');
                newsDataContainer.innerHTML = data.articles.map(article => `
                    <div class="news-item mb-3">
                        <h4><a href="${article.url}" target="_blank">${article.title}</a></h4>
                        <p>${article.description}</p>
                    </div>
                `).join('');
            })
            .catch(error => {
                console.error('Error fetching news data:', error);
                document.getElementById('news-data').innerHTML = '<p>Failed to load news data.</p>';
            });
    }

    

    
    fetchNews();
    
});
