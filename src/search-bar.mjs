export let formSubmission = (fn) => {
  let form = document.getElementById('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(e.key);
    fn()
  })
}

export let inputValue = () => {
  let searchBar = document.getElementById('search-bar')
  // console.log(searchBar.target.value);
  console.log(searchBar.value);
  searchBar.value = ""
}
