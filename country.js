const queryName = new URLSearchParams(window.location.search).get("name");
console.log(queryName);

fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
  .then((res) => res.json())
  .then((response) => {
    console.log(response);
    response.data.forEach((item) => {
      const container = document.querySelector(".main");
      const countryDetail = document.createElement("div");
      countryDetail.classList.add("country-details");
      if (item.name == queryName) {
        countryDetail.innerHTML = `
            <img src=${item.flag}>
            <div class="text-container">
              <h1>${item.name}</h1>
              <div class="text">
              </div>
              <div class="states">
                <p><b>States : </b>&nbsp;</p>
              </div>
            </div>`;
        container.append(countryDetail);
      }
    });
  });

fetch("https://countriesnow.space/api/v0.1/countries/capital")
  .then((res) => res.json())
  .then((res) => {
    res.data.forEach((item) => {
      const text = document.querySelector(".text");
      const capital = document.createElement("p");

      if (item.name == queryName) {
        capital.innerHTML = `<b>Capital : </b>${item.capital}`;

        text.append(capital);
      }
    });
  });

fetch("https://countriesnow.space/api/v0.1/countries/population")
  .then((res) => res.json())
  .then((res) => {
    res.data.forEach((item) => {
      const text = document.querySelector(".text");
      const population = document.createElement("p");

      if (item.country == queryName) {
        population.innerHTML = `<b>Pupulation : </b>${item.populationCounts[58].value.toLocaleString(
          "en-IN"
        )}`;

        text.append(population);
      }
    });
  });

fetch("https://countriesnow.space/api/v0.1/countries/codes")
  .then((res) => res.json())
  .then((res) => {
    res.data.forEach((item) => {
      const text = document.querySelector(".text");
      const dialCode = document.createElement("p");

      if (item.name == queryName) {
        dialCode.innerHTML = `
      <b>Dial Code : </b>${item.dial_code}`;

        text.append(dialCode);
      }
    });
  });

fetch(
  "https://countriesnow.space/api/v0.1/countries/info?returns=currency,flag,unicodeFlag,dialCode"
)
  .then((res) => res.json())
  .then((res) => {
    res.data.forEach((item) => {
      const text = document.querySelector(".text");
      const currency = document.createElement("p");

      if (item.name == queryName) {
        currency.innerHTML = `
      <b>Currency : </b>${item.currency}`;

        text.append(currency);
      }
    });
  });

fetch("https://countriesnow.space/api/v0.1/countries/states")
  .then((res) => res.json())
  .then((res) => {
    res.data.forEach((item) => {
      if (item.name == queryName) {
        item.states.forEach((state) => {
          const text = document.querySelector(".states p");
          const states = document.createElement("span");

          states.innerHTML = ` 
          ${state.name}`;

          text.append(states);
        });
      }
    });
  });
