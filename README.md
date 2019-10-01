
#Craigslist Clone
An MVP Craigslist clone that allows users to view items on sale, post new items and add them to their favorites (using localStorage).

See the website [here](https://craigslist-clone-mern.herokuapp.com/).

##Technology used
###Frontend
- React 
- React Router
- SCSS
- GoogleMaps API

###Backend
- NodeJS
- Express
- MongoDB
- Cloudinary

###How to run
```
npm install
npm start
```

###Functional specifications
- User can add new item
    - Add multiple images (hosted on Cloudinary)
    - Choose a neighborhood
    - Select condition, category, if delivery is possible
    - Add title, price, email, and description
- User can add a post to their likes list (keeps a record of likes between sessions with localStorage)
- User can see listed items, see a map where the seller is located
- User can select categories

###Todo
- Advanced search filters (by price, neighborhood, etc.)
- Pagination

