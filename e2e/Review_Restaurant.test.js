/* eslint-disable no-undef */
/* eslint-disable max-len */
const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
  I.click(locate('.restaurant__title a').at(7));
});

Scenario('Reviewing a Restaurant', async ({ I }) => {
  const timeStamp = Date.now();
  const nameOfReviewer = `Reviewer ${timeStamp}`;
  const reviewContent = `My review ${timeStamp}`;

  I.seeElement('#form');

  I.fillField('#name', nameOfReviewer);
  I.fillField('#review', reviewContent);
  I.click('#send');

  const submittedNameOfReviewer = await I
    .grabTextFrom(locate('.review_name').last());
  const submittedReviewContent = await I
    .grabTextFrom(locate('.review_comment').last());

  assert.strictEqual(nameOfReviewer, submittedNameOfReviewer);
  assert.strictEqual(reviewContent, submittedReviewContent);
});
