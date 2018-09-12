const createAndAppend = require('../helpers/create_apend.js');
//You can get rid of pub_sub

const ContinentView = function (container, continent) {
  this.continentsContainer = container;
  this.continent = continent;
};

ContinentView.prototype.render = function () {
  //create continent container
  const continentContainer = createAndAppend('div', 'continent', '', this.continentsContainer);

  //create name
  let text = this.continent.name
  if (!text) { text = "Misc"}
  const name = createAndAppend('h2', 'continent-name', text, continentContainer);

  //create list
  const countriesList = createAndAppend('ul', 'countries', '', continentContainer);

  // create items
  const countryListItem = this.continent.countries.forEach((country) => {
    createAndAppend('li', null, country.name, countriesList)
  })
};

module.exports = ContinentView;
