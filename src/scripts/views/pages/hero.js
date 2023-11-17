import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Hero = {
  render() {
    return `
    <div class="hero" id="hero">
      <div class="hero-inner">
        <h1 class="hero-title">Welcome Foodies!!</h1>
        <p class="text">Restaurant Catalogue is a platform that provides the latest and trusted restaurant information that is systematically designed to make it easier for you</p>
        <p>Find your best restaurant in here</p>
        <a href="/#/restaurant-list">Search Restaurant</a>
      </div>
    </div>
    <div class="content">
        <div id="restaurants" class="restaurants">
        </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.RestaurantLists();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Hero;
