let loader = document.getElementById('loader')

export let loaderFunction = () => loader.innerHTML = 'loading, please wait.......'

export let errorLoaderFunction = () => loader.innerHTML = 'Sorry, result not found..'


export let fun = (val) => {
  switch (val) {
    case 200:
      return "success"
    case 500: 
      return "internals erver error"
    
  }
}