let cardContainer = document.getElementById('card-container')

export let cardComponents = (data) => {
  cardContainer.innerHTML = ''
  let { hints, text, parsed, _links } = data
  console.log(hints);

  if (hints === undefined) return
  else {
    cardContainer.innerHTML = hints.map((x) => {

      let { food, measures } = x
      let { category, categoryLabel, foodId, image, label } = food
      return `<div id=${foodId} class="card">
      <img src="${image ? image : "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rqxf0714ejt6odlln3no.png"}" class="card-img-top" alt="${label}">
      <div class="card-body">
        <h5 class="card-title">${label}</h5>
      </div>
    </div>`
    }).join('')
  }

}