let form = document.getElementById('form');
let searchBar = document.getElementById('search-bar');

export let formSubmission = (input,fetchFn, clear) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchFn(input());
    clear();
  });
};

export let inputValue = () => searchBar.value;

export let clearInput = () => (searchBar.value = '');
