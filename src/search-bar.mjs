import { cardComponents } from './cardComponent.mjs'

let form = document.getElementById('form');
let searchBar = document.getElementById('search-bar');

export let formSubmission = (input, fetchFn, clear) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let data = await fetchFn(input());
    // console.log(data)  
    cardComponents(data)
    clear();
  });
};

export let inputValue = () => searchBar.value;

export let clearInput = () => (searchBar.value = '');
