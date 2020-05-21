const headerKeys = {
    pizzas: ['PIZZA_NAME', 'PRICE', 'AVAILABLE_SIZES', 'CATEGORY'],
    users: ['FIRST_NAME', 'LAST_NAME', 'E_MAIL', 'ADDRESS', 'CONTACT']
};

const dataKeys = {
    pizzas: ['name', 'price', 'availableSizes', 'category'],
    users: ['firstName', 'lastName', 'email', 'address', 'contact']
};

const serviceReducerKeys = {
    pizzas: 'fetchPizzas',
    users: 'fetchUsers'
};

const loadMoreDataReducerKeys = {
    pizzas: 'fetchMorePizzas',
    users: 'fetchMoreUsers'
};

export function getServiceReducerKey(searchId) {
    return serviceReducerKeys[searchId] ? serviceReducerKeys[searchId] : searchId;
}

export function getLoadMoreDataReducerKey(searchId) {
    return loadMoreDataReducerKeys[searchId] ? loadMoreDataReducerKeys[searchId] : searchId;
}

export function getHeaderKeys(listType) {
    return headerKeys[listType];
}

export function getDataKeys(listType) {
    return dataKeys[listType];
}

export function cleanHeaderClass(name) {
    return name.toLowerCase().replace(/_/g, '-');
}

export function cleanDataClass(name) {
    return {
        address: 'address',
        availableSizes: 'available-sizes',
        category: 'category',
        contact: 'contact',
        email: 'e-mail',
        firstName: 'first-name',
        lastName: 'last-name',
        name: 'pizza-name',
        price: 'price'
    }[name];
}
