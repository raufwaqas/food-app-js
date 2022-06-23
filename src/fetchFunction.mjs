export let fetchFunction = async (search) => {
  let base = 'https://api.edamam.com/api/food-database/v2/parser',
    app_id = 'b61825fd',
    app_key = 'a22263fad1918d103e8f6c6b4f8c97c2',
    type = "cooking",
    api = `${base}?app_id=${app_id}&app_key=${app_key}&ingr=${search}&nutrition-type=${type}`;

  return await fetch(api).then(res => {
    if (res.ok) {
      res.json()
    }
    else {
      throw new Error("custom message here")
    }
  }).then(res => console.log(res))
    .catch(err => console.log('Result Not Found'))
}

