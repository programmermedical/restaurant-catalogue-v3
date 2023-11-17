/* eslint-disable no-undef */
Feature('Unliking Restaurants');
const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('You haven\'t added a restaurant!!', '.restaurant-item__not__found');

  I.amOnPage('/');
  I.waitForElement('.restaurant__title a', 10);

  I.retry(3).seeElement('.restaurant__title a');

  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.retry(3).seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.retry(3).seeElement('.restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click('.restaurant__title a');

  I.waitForElement('#likeButton');
  I.retry(3).seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('You haven\'t added a restaurant!!', '.restaurant-item__not__found');
});
