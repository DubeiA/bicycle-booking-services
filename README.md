## First

On the backend side use Express and MongoDB to store data

You'll need DB_HOST = mongodb+srv://`myusername`:`mypassword`@myserver.mongodb.com/`mydatabase`?retryWrites=true&w=majority

In order to start working with this repository, you must first install the dependencies
using `npm ci`.
Then go to the `backend-part` folder and start the server.
Command to start if you are in the main folder `cd backend-part` + `npm run start:dev`.
The server is running on port `http://localhost:8080`

## Second

On the frontend side React app

When the server is up and running, you need to go to the main folder `cd ..` and run the react app through the `npm start` command.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# bicycle-booking-services

The functionality is quite simple:

1. user can add a bicycle with fields (ID, name, type, color, wheel size, price, description)
2. added bicycle is displayed on the list of bicycles
3. user can change the status of the bicycle (available/busy/unavailable)
4. user can remove a bicycle
5. user can check stats on bicycles (number of bicycles, number of available bicycles, number of booked bicycles, average price of a bicycle)

## Routes:

# GET /api/bike

Request to retrieve a list of all bicycles.

# POST /api/bike/add

Request to add a new bicycle to the database. Requires a valid JSON object with bicycle data.

# PATCH /api/bike/:\_id/stats

Request to update the status (stats) of a specific bicycle by its identifier. Requires a valid JSON object with the updated status.

# DELETE /api/bike/:\_id

Request to delete a bicycle by its identifier.

`example request`
{
"name": "Bike Name",
"type": "Bike Type",
"color": "Bike Color",
"wheel_size": 20,  
 "price": 100,  
 "id": "Bike-2024-001", // Must match the pattern /^Bike-2024-\d{3}$/
"description": "Bike description",
"stats": "available" // Should be one of: 'available', 'busy', 'unavailable' (optional, defaults to 'available')
}

