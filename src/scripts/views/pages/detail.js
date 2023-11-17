/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable no-self-assign */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
/* eslint-disable no-array-constructor */
import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import {
  createRestaurantDetailTemplate, createFormTemplate, createCommentTemplate, createMenuTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return ` 
      <div class="detail-container">
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
      <h3 class="detail-title">Menu</h3>
      <table class="table">
      <thead>
          <tr>
              <th>Food</th>
              <th>Drink</th>
          </tr>
      </thead>
      <tbody>
      </tbody>
      </table>
      <h3 class="detail-title underlined">Review</h3>
      <div id="comment"></div>
      <h3 class="detail-title underlined"> Add comment</h3>
      <div id="form"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    const commentContainer = document.querySelector('#comment');
    const formContainer = document.querySelector('#form');
    const rowMenus = document.querySelector('tbody');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    let indexValue = 0;
    if (restaurant.menus.foods.length < restaurant.menus.drinks.length) {
      indexValue = restaurant.menus.foods.length;
    } else {
      indexValue = restaurant.menus.drinks.length;
    }

    for (let i = 0; i < indexValue; i++) {
      const foods = restaurant.menus.foods[i];
      const drinks = restaurant.menus.drinks[i];

      rowMenus.innerHTML += createMenuTemplate(foods, drinks);
    }

    document.querySelector('#form').addEventListener('submit', (e) => {
      e.preventDefault();
      RestaurantDbSource.reviewRestaurant(url.id);
      location.reload();
    });

    for (let i = 0; i < restaurant.customerReviews.length; i++) {
      const comments = restaurant.customerReviews[i];
      commentContainer.innerHTML += createCommentTemplate(comments);
    }

    formContainer.innerHTML = createFormTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        city: restaurant.city,
        description: restaurant.description,
      },
    });
  },
};

export default Detail;
