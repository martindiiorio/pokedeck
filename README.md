This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Pokemon Api Request

## Todo's:

### Build and style the main list

You have to implement the main list like in this image:
<img align="center" src="https://imgur.com/HNu1wmq.png" style="border: 1px solid black" />

Notice that:

- The url is **/pokemon**.
- When user hovers a pokemon, its background becomes gray.

### Pokemon detail page

Add the possibility to click on a pokemon and go to the detail page, like in this image:
<img align="center" src="https://imgur.com/1Mbh6mK.png" style="border: 1px solid black" />

Notice that the pokemon detail url is different. It is `/pokemon/:name`. In the **charizard** example is `/pokemon/charizard`.

### Images

The images url is `http://pokestadium.com/sprites/xy/{name}.gif`

For example:

- **Charizard** <img align="center" src="http://pokestadium.com/sprites/xy/charizard.gif"/>
- **Bulbasaur** <img align="center" src="http://pokestadium.com/sprites/xy/bulbasaur.gif" />

_You will realize that there are two pokemon which image is not loaded properly. Put in practice your skills to solve it._

### Api Endpoints

The api base url is `https://pokeapi.co/api/v2`.

- **List**: `/pokemon` (maybe you have to add the limit parameter on the request to fetch the first generation in only one request).
- **Detail**: `/pokemon/:name`.

For example:

- **Charizard**: `https://pokeapi.co/api/v2/pokemon/charizard`
- **Bulbasaur**: `https://pokeapi.co/api/v2/pokemon/bulbasaur`

## Demo

You can watch/download the video showing how the app finally should work: <a href="https://mega.nz/#!2JNVlIzb!kmmubCQEUQV0RgZ9dExTC64P_9eDNBPE8zgNNS-b0do" target="_blank">demo</a>.

## 🧐 We want to see 🧐

- React knowledge
- Project architecture
- Css skills
- ECMAScript6 skills
- Clean code

## ✅ You should ✅

- Use the **axios** package for http requests.
- **Prevent unknown urls** while redirecting to the list page.
- Style with **responsiveness**. As the video shows, the pokemon list should adapt to the screen size and show three pokemons per row on large width screen size, two pokemon per row on medium width screen size and one pokemon per row on mobile width sizes. (You have a file named mixins.scss, in which you can use the existing medias in order to configure the responsiveness).

## 🚫 You should not 🚫

- Use bootstrap.

## 🌟 Bonus 🌟

- Use **redux**.
- Add **tests**.
- Use **prop types**.
- Show a **loading indicator** while an api request is in process.
- Follow a **linter**.
- **Dockerize**
- Dockerize **hotreload** mode
