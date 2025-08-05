fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
.then(res => res.json())
.then(response => {
    console.log(response)
    response.data.forEach(item => {
        console.log(item.name)
        const countryContiner = document.querySelector('.country-container')

        const countryCard = document.createElement('a')
        countryCard.classList.add('country-card')
        countryCard.href = `/country.html?name=${item.name}`

        countryCard.innerHTML = `
            <img src=${item.flag}>
            <div class="card-text">
            <h2><b>${item.name}</b></h2>
            </div>
            `
        countryContiner.append(countryCard)
    })
  })


