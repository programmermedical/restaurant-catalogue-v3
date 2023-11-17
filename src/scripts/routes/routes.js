import RestaurantList from '../views/pages/restaurant-list';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';
import Hero from '../views/pages/hero';

const routes = {
  '/': Hero, // default page
  '/restaurant-list': RestaurantList,
  '/detail/:id': Detail,
  '/favorite': Like,
};

export default routes;
