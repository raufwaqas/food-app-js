let loader = document.getElementById('loader')

export let loaderFunction = () => loader.innerHTML = 'loading, please wait.......'

export let errorLoaderFunction = () => loader.innerHTML = 'Sorry, result not found..'

