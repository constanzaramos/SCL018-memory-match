//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//
import Mononoke from '../data/Ghibli/Ghibli.js';
import shuffle from '../shuffle/shuffle.js';

console.log(Mononoke);
const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.textContent = '';

  return el;
};

let array=[];
for (let index = 0; index <Mononoke.items.length; index++) {
array.push(Mononoke.items[index]);

}
console.log(array);
const shuffleCards = shuffle(array);


export default App;
