/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable prefer-promise-reject-errors */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async RestaurantLists() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async searchRestaurants(keyword) {
    return fetch(API_ENDPOINT.SEARCH(keyword)).then((response) => response.json()).then((responseJson) => {
      if (responseJson.restaurants.length === 0 && keyword !== '') {
        return Promise.reject(`${keyword} is not found!!`);
      } if (responseJson.restaurants) {
        return Promise.resolve(responseJson.restaurants);
      }
    });
  }

  static async reviewRestaurant(id) {
    const review = {
      id: id.toString(),
      name: document.querySelector('#name').value,
      review: document.querySelector('#review').value,
    };

    fetch(API_ENDPOINT.REVIEW(), {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then(window.alert('Comment added successfully'))
      .catch((err) => window.alert(`Comment added failed ${err}`));
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantDbSource;
