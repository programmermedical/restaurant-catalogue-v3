/* eslint-disable max-len */
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
      <div class="content">
        <search-bar></search-bar>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.RestaurantLists();
    const restaurantsContainer = document.querySelector('#restaurants');
    const searchElement = document.querySelector('search-bar');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    const onButtonSearchClicked = () => {
      // eslint-disable-next-line no-use-before-define
      RestaurantDbSource.searchRestaurants(searchElement.value).then(renderResult).catch(fallbackResult);
    };

    const renderResult = (restaurant) => {
      restaurantsContainer.innerHTML = '';
      restaurant.forEach((results) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(results);
      });
    };

    const fallbackResult = (message) => {
      restaurantsContainer.innerHTML = '';
      restaurantsContainer.innerHTML += `<h2 class="message">${message}</h2>`;
    };

    searchElement.clickEvent = onButtonSearchClicked;
  },
};

export default RestaurantList;
