# tdhbackend
Backend for the. dining. hall. app at USC.
See admin for .env file configuration.

# With Yarn:

	To start: "yarn"
	Run Program: "yarn start"
	Run Tests: "yarn test"
	Debug with Live Reloading: "yarn watch"

# With npm
	To start: "npm install"
	Run Program: "npm start"
	Run Tests: "npm test"
	Debug with live reloading: "npm watch"

# Routes

There are two routes.  Both are GET endpoints. Both take an optional query of
month, day, and year.  If all three are not supplied, it defaults to today.   

	1.  GET / (Get All Dining Halls)
	This endpoint returns an array of dining hall objects.  It returns every
	dining hall on a particular day.  

	2. GET /:dhName (Get a Dining Hall by key)
	This endpoint returns a single dining hall object.  The key is one of the
	following:
		USC Village Dining Hall: village
		Everybody's Kitchen: evk
		Parkside Restaurant: parkside

# Dining Hall Object

Here is an example Dining Hall Object.  This is what is returned from endpoint 2,
and endpoint 1 returns an array of these.  

```

{
	"name": "Everybody's Kitchen",
	"key": "evk",
	"menus": [
		{
			"name" : "Breakfast",
			"dishes": [
				{
					"name": "Mac and Cheese",
					"kitchen": "Hot Line",
					"tags": [
						"vegetarian",
						"dairy",
						"gluten"
					]
				}
			]
		}
	]
}

```

# Running the App Locally

Docker must be installed to run the app locally.  Install docker, and then run:

	npm run docker:start
or
	yarn docker:start

# Release

To release a version of the app, simply run
	npm run docker:release
or
	yarn docker:release