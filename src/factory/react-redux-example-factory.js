import * as storeFactory from './store/store-factory';
import * as routeFactory from './route/route-factory'

export function getFactories() {
    const store = storeFactory.getStore();
    const routes = routeFactory.getRoutes();

    return {
      routes,
      store
    };
}