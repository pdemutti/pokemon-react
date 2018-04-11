<p align="center">
    <img width="100" src="http://static.pokemonpets.com/images/monsters-images-800-800/94-Gengar.png" alt="pokemon">
    <img width="100" src="https://laracasts.com/images/series/circles/do-you-react.png" alt="react logo">
</p>

# Pokemon Challange

## The challange

Create a page to list all pokemons <br />
Create a page to list details of selected pokemon
> **API Documentation:**  [Pokeapi](https://pokeapi.co/)


Quick install
-------------

The first thing you should do, is install the Node.js dependencies. To install Node.js dependencies you're going to use npm. In your application folder run this in the **command-line**:

> $ npm install:

## Building project

Before start Pokedex application, we need to build .scss files

To build css

    > $ npm run build-css or yarn build-css

To build css and keep watching for changed files

    > $ npm run watch-css or yarn watch-css

To run in dev mode

    > $ npm run dev or yarn dev

## Deploying in heroku

To build to production

    > $ npm run prod or yarn prod
	> $ git push heroku master
	Avaliable at https://arcane-woodland-81813.herokuapp.com/#/search

## Running tests with Jest

    > $ npm run test or yarn test

## Endpoints Documentation 

### Ability endpoint

> Search pokemon by ability

Endpoint: http://pokeapi.co/api/v2/ability/{ability} <br />

method: GET <br />
response : 
body:

```

{
	"effect_changes": [],
	"name": "battle-armor",
	"generation": {
		"url": "https://pokeapi.co/api/v2/generation/3/",
		"name": "generation-iii"
	},
	"pokemon": [
		{
			"slot": 3,
			"is_hidden": true,
			"pokemon": {
				"url": "https://pokeapi.co/api/v2/pokemon/104/",
				"name": "cubone"
			}
		},
		{
			"slot": 3,
			"is_hidden": true,
			"pokemon": {
				"url": "https://pokeapi.co/api/v2/pokemon/105/",
				"name": "marowak"
			}
		},
		{
			"slot": 2,
			"is_hidden": false,
			"pokemon": {
				"url": "https://pokeapi.co/api/v2/pokemon/140/",
				"name": "kabuto"
			}
		}
	],
	"is_main_series": true,
	{...}
}
  
```

### Search Pokemon endpoint

> Search pokemon by name or id

  

Endpoint: http://pokeapi.co/api/v2/pokemon/{idPokemon} <br />

method: GET <br />
response : 
body:

```

{
    "id": 1,
    "name": "bulbasaur",
    "base_experience": 64,
    "height": 7,
    "is_default": true,
    "order": 1,
    "weight": 69,
    "abilities": [
        {
            "is_hidden": true,
            "slot": 3,
            "ability": {
                "name": "chlorophyll",
                "url": "http://pokeapi.co/api/v2/ability/34/"
            }
        }
    ]...},
  
```
## Structure


The basic structure of this challenge is given in the following way:

*  `pokemon-react/` Contains the source code of the front-end challenge.

*  `node_modules/` Contains all dependencies fetched via \[NPM\](https://www.npmjs.org/). However, this directory is unnecessary for versioning, so it is ignored.

*  `public/` Contains all the static files you use in your application, this is where you store your front-end files.

*  `.gitignore` The .gitignore file specifies intentionally untracked files that Git should ignore.

*  `LICENSE` A software license tells others what they can and can't do with your source code.
*  `Procfile` You can use to declare various process types.

* `.babelrc` All Babel API options except the callbacks are allowed

*  `package.json` Lists all \[Node.js\](http://nodejs.org/) dependencies

*  `README.md` Explains how application works.
