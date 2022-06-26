import { errorLoaderFunction, loaderFunction } from "./loaderFunction.mjs";
let loader = document.getElementById('loader')
export let fetchFunction = async (search) => {
  loaderFunction()
  let base = 'https://api.edamam.com/api/food-database/v2/parser',
    app_id = 'b61825fd',
    app_key = 'a22263fad1918d103e8f6c6b4f8c97c2',
    type = "cooking",
    api = `${base}?app_id=${app_id}&app_key=${app_key}&ingr=${search}&nutrition-type=${type}`;

  return await fetch(api).then(res => {
    if (res.ok) {
      console.log(res)
      return res.json()
    }
    else {
      throw new Error(errorLoaderFunction())
    }
  }).then(res => {
    if (res.hints.length !== 0) {
      loader.innerHTML = `Results for ${search}`
      console.log(res)
    }
    else {
      throw new Error(errorLoaderFunction())
    }
  })
    .catch(err => err)
}

