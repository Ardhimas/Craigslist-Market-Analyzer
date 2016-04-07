# Craigslist-Market-Analyzer by Ardhimas Kamdani
MEAN stack web application that parses, saves, and analyzes market prices for select vehicles on Craigslist.

MongoDB and Mongoose used for database model and schema.
Express.js used for app routers.
AngularJS used for front end.
Node.js used for back end.

Sample screenshots:
Listing
![Listing Screenshot](https://cloud.githubusercontent.com/assets/5238654/14359783/b5378316-fcb8-11e5-9fc6-7f3ea94528d7.png)
The listing fetches data from the MongoDB database currently allows filtering by make and model. The Delete button performs a DELETE request on the database using the API.

Parser
![Parser Screenshot](https://cloud.githubusercontent.com/assets/5238654/14359868/2a0efef8-fcb9-11e5-9ea0-71e54cc9c8b7.png)
The parser searches for used cars by owner on craigslist for a chosen make and model, and goes through every page. At the moment the parser ignores listings from nearby cities but soon I will be adding a city attribute to the schema so I can save data on vehicles in different regions. The Save buttons use the API to perform POST requests on the database.

Analyzer
![Analyzer Screenshot 1](https://cloud.githubusercontent.com/assets/5238654/14359843/1102322c-fcb9-11e5-87f1-184c00c8bc87.png)
![Analyzer Screenshot 2](https://cloud.githubusercontent.com/assets/5238654/14359844/1104746a-fcb9-11e5-99d5-15add6fdb15b.png)
The analyzer performs a GET request on the database using the API filtered by make and model, and displays the quantity of listings for each year by a selected make and model and the price distribution for each year. Filters allow the graphs to be adjusted to display only a range of years.