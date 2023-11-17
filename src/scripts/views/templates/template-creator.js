const createRestaurantItemTemplate = (restaurants) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" loading="lazy" alt="${restaurants.name}"
           src="https://restaurant-api.dicoding.dev/images/large/${restaurants.pictureId}">
      <div class="restaurant-item__header__rating">
        <p><i class="fa fa-star" aria-hidden="true"></i><span class="restaurant-item__header__rating__score">${restaurants.rating}</span></p>
      </div>
      <div class="restaurant-item__header__city">
        <p>${restaurants.city}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant__title"><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h3>
      <p>${restaurants.description}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurants) => `
  <h2 class="restaurant__title underlined">${restaurants.name}</h2>
  <img class="restaurant__poster" src="https://restaurant-api.dicoding.dev/images/medium/${restaurants.pictureId}" alt="${restaurants.name}"/>
  <div class="restaurant__info">
    <h3>Restaurant Information</h3>
    <h4>Address</h4>
    <p>${restaurants.address}</p>
    <h4>City</h4>
    <p>${restaurants.city}</p>
    <h4>Rating</h4>
    <p>${restaurants.rating}/5</p>
    <h4>Categories</h4>
    <p class="block-text">${restaurants.categories[0].name}</p>
    <p class="block-text">${restaurants.categories[1].name}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${restaurants.description}</p>
  </div>
`;

const createMenuTemplate = (foods, drinks) => `
      <tr>
          <td>${foods.name}</td>
          <td>${drinks.name}</td>
      </tr>
      
`;

const createCommentTemplate = (comment) => `    
<div class="detail-review"> 
<h4 class="review_name">${comment.name}</h4> <p class="detail-date">${comment.date}</p>
<p class="review_comment">${comment.review}</p>
<hr>
</div>
`;

const createFormTemplate = () => ` 
<form id="form" method="post">
<div class="form-row">
   <div class="input-data">
      <input type="text" id="name" required>
        <div class="underline"></div>
        <label for="">First Name</label>
   </div>
    <div class="input-data">
      <input id="send" class="submit" type="submit" value="send">
    </div>
</div>
<div class="form-row">
   <div class="input-data textarea" >
      <textarea rows="8" cols="80" id="review" required></textarea>
      <br />
      <div class="underline"></div>
      <label for="">Write your message</label>
      <br />
</form>

`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-star-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-star" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createMenuTemplate,
  createCommentTemplate,
  createFormTemplate,
};
