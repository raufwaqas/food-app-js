let form = document.getElementById('form');
let searchBar = document.getElementById('search-bar');

export let formSubmission = (input, clear) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(input());
    clear();
  });
};

export let inputValue = () => searchBar.value;

export let clearInput = () => (searchBar.value = '');
