const createAndAppend = require('../helpers/create_apend.js');
//You can get rid of this because you don't use pub, sub

const ContinentView = function (container, continent) {
  this.continentsContainer = container;
  this.continent = continent;
};

ContinentView.prototype.render = function () {
  // const continentContainer = document.createElement('div');
  // continentContainer.classList.add('continent');

  console.log(this.continentsContainer);

  const continentContainer = createAndAppend('div', '', this.continentsContainer);

  const name = this.createContinentHeading();
  continentContainer.appendChild(name);

  const countriesList = this.createCountriesList();
  continentContainer.appendChild(countriesList);

  this.continentsContainer.appendChild(continentContainer);
};

ContinentView.prototype.createContinentHeading = function () {
  const name = document.createElement('h2');
  name.classList.add('continent-name');
  if (!this.continent.name) {
    name.textContent = "Misc";
  } else {
    name.textContent = this.continent.name;
  }
  return name;
};

ContinentView.prototype.createCountriesList = function () {
  const countriesList = document.createElement('ul');
  countriesList.classList.add('countries');
  this.populateList(countriesList);
  return countriesList;
};

ContinentView.prototype.populateList = function (list) {
  this.continent.countries.forEach((country) => {
    const countryListItem = document.createElement('li');
    countryListItem.textContent = country.name;
    list.appendChild(countryListItem);
  });
};

module.exports = ContinentView;
