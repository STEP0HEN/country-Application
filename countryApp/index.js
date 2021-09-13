const input = document.createElement("input");
input.placeholder = "Enter country to search";
const searchButton = document.createElement("button");
const countryName = document.createElement("h1");
const countryCapital = document.createElement("h2");
const countryPopulation = document.createElement("h3");
const citizenName = document.createElement("h4");
const Countrycurrency = document.createElement("p");
const countryFlag = document.createElement("img");
searchButton.innerHTML = "Search";
const body = document.querySelector("body");
body.appendChild(input);
body.appendChild(searchButton);
const div = document.createElement("div");
body.appendChild(div);

const getCountryData = async () => {
  const inputValue = input.value;
  if (!inputValue) {
    countryPopulation.innerHTML = `Please enter country to search for information`;
    div.appendChild(countryPopulation);
  } else {
    const url = `https://restcountries.eu/rest/v2/name/${inputValue}`;
    const res = await fetch(url);
    const data = await res.json();
    data.map(
      ({ name, flag, capital, population, demonym, currencies } = data) => {
        const { currencyName = name, symbol } = currencies[0];
        countryFlag.src = flag;
        countryPopulation.innerHTML = `Population : ${population}`;
        countryCapital.innerHTML = `Capital : ${capital}`;
        countryName.innerHTML = name;
        citizenName.innerHTML = `A citizen of ${name} is ${demonym}`;
        Countrycurrency.innerHTML = `Currency : ${currencyName}. Currency symbol : ${symbol}`;
        div.appendChild(countryFlag);
        div.appendChild(countryName);
        div.appendChild(countryCapital);
        div.appendChild(countryPopulation);
        div.appendChild(citizenName);
        div.appendChild(Countrycurrency);
      }
    );
  }
};
searchButton.addEventListener("click", getCountryData);
