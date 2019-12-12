import * as storeFactory from './store/store-factory';

export function getFactories() {
    const store = storeFactory.getStore();

    return {
      store
    };
}