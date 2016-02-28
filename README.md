# StockIt
**TLDR**: Financial analysis and stock recommendation tool based on natural language processing on data scraped from the most recent month's Bloomberg Business news.

## What it Does
All Bloomberg Business news within a month regarding the inputted company is scraped and sent to a sentiment analysis API to compute a sentiment score representing whether the news article is indicating a positive, negative, or neutral change. Then we aggregate this data to give one global score to determine buy or sell.

### Modules Built and Used
- [News Scraper]( https://github.com/xheffy/newsscraper)
- [Natural Language Processing](https://github.com/muntashir/SeNLP)

### Tools
- [Node.js](https://nodejs.org/en/)
- [Express](http://expressjs.com/)
- [Socket.io](http://socket.io/)

### How to Use
URL Coming Soon™ 

    npm install
    node server.js

1. Navigate to http://localhost:3000/
2. Submit company name stocks