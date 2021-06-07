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
  const keyboardValue = input.value;
  if (!keyboardValue) {
    countryPopulation.innerHTML = `Please enter country to search for information`;
    div.appendChild(countryPopulation);
  } else {
    const url = `https://restcountries.eu/rest/v2/name/${keyboardValue}`;
    const res = await fetch(url);
    const data = await res.json();
    countryFlag.src = data[0].flag;
    countryPopulation.innerHTML = `Population : ${data[0].population}`;
    countryCapital.innerHTML = `Capital : ${data[0].capital}`;
    countryName.innerHTML = data[0].name;
    citizenName.innerHTML = `A citizen of ${data[0].name} is ${data[0].demonym}`;
    Countrycurrency.innerHTML = `Currency : ${data[0].currencies[0].name}. Currency symbol : ${data[0].currencies[0].symbol}`;
    div.appendChild(countryName);
    div.appendChild(countryCapital);
    div.appendChild(countryPopulation);
    div.appendChild(citizenName);
    div.appendChild(Countrycurrency);
    div.appendChild(countryFlag);
  }
};
searchButton.addEventListener("click", getCountryData);
