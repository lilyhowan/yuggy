# yuggy
![Kuriboh](https://static.wikia.nocookie.net/yugioh/images/1/1d/Icon-DULI-Kuriboh.png/revision/latest/scale-to-width-down/150?cb=20180305005352)

Yu-Gi-Oh! TCG card search web app

* Built with Node, Express, MongoDB, React and TailwindCSS
* Uses the [YGOPRODECK Yu-Gi-Oh! API](https://db.ygoprodeck.com/api-guide/) for card information

Allows users to filter cards by name, type, archetype, attribute, etc. Cards can be opened individually from the search page to view more information; in order to minimise calls to the API, when a card is opened its details are stored in a MongoDB database and fetched from there for subsequent requests.