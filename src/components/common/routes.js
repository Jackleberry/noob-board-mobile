import * as routeNames from './routeNames';
import first from 'lodash/first';
import uuid from 'uuid';

export const getRouteById = (id) => {
  return first(routes.filter(route => route.id == id));
};

export const getPushRoute = (route) => {
  return {
    ...route,
    index: uuid.v4()
  };
};

const routes = [
  {
    id: routeNames.DASHBOARD,
    title: "Noob Board",
    index: 0
  },
  {
    id: routeNames.NOOB_SCREEN,
    title: "Noob",
    index: 1
  }
];

export default routes;
