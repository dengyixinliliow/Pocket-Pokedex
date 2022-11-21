# Pocket Pokedex

Pocket Pokedex is a website to help you keep track of your caught pokemon and build your own Pokedex while playing a pokemon game. You can browse all pokemons, search by their name, and add them to your Pokedex. Besides, the website also provides stats on pokemons in your Pokedex to provide you with a better understanding of your own pokemon team!


The website is deployed by Netlify and hosted on https://637b378e850b2c03d30cc490--pocketpokedexdemo.netlify.app/

## Run the App on your local machine

In the project directory, run:

### `npm install`

Install all required packages to run the app.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Features

The app is composed of two major parts, a general pokemon page that displays all pokemons. And my Pokedex page, which displays the pokemons your added to your personal pokedex. These two web page can be switched by clicking on the yellow button at the bottom right corner.

On the general pokemon page, you can browse all pokemons, search pokemons by their name, and read their detailed information. Besides, you can also add the pokemon you caught in the game to your personal pokedex. 

When you go to the personal pokedex page, you can see all the added pokemons displayed there, and you are free to remove them. Besides, on the top of the screen, there is a bar chart showing how your strong team is against the pokemon with different types. If the number is above zero, it indicates that your team has an advantage while playing against that type. If the number is under zero, it means that your team may lose while playing against that type. And zero indicates that your team has neither advantages nor disadvantages over that type of pokemons.

## Tech Stack

React is used for displaying information and the frontend framework.

Redux is used for managing global states.

MaterialUI is used for styling the app.

GraphQL and Apollo are used for fetching data from the pokemon api https://wayfair.github.io/dociql/ ; a api that fetches all pokemon data is triggered when the web rendered, and another api that fetches a particular pokemon’s attacking moves is triggered each time when a user click ‘Learn More’ to read more information about a pokemon.

ChartJS is used for creating the bar chart.

## Future Improvements

To optimize our team stats features, we can add more graphs to show complex analytics on pokemons based on not only their weaknesses and resistances but also their HP, MP, and even skills. Another feature that can be added to this web application is allowing users to filter and sort pokemons based on their types, classification, and HP, etc. 
