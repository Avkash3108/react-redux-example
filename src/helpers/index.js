const headerKeys = {
	users: ['FIRST_NAME', 'LAST_NAME', 'E_MAIL', 'ADDRESS', 'CONTACT'],
	pizzas: ['PIZZA_NAME', 'PRICE', 'AVAILABLE_SIZES', 'CATEGORY']
};

const dataKeys = {
	users: ['firstName', 'lastName', 'email', 'address', 'contact'],
	pizzas: ['name', 'price', 'availableSizes', 'category']
};

const serviceReducerKeys = {
		users: 'fetchUsers',
		pizzas: 'fetchPizzas'

}

const loadMoreDataReducerKeys = {
		users: 'fetchMoreUsers',
		pizzas: 'fetchMorePizzas'
}

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
		firstName: 'first-name',
		lastName: 'last-name',
		email: 'e-mail',
		address: 'address',
		contact: 'contact',
		name: 'pizza-name',
		price: 'price',
		availableSizes: 'available-sizes',
		category: 'category'
	}[name];
}

export function filterList(list, sort) {
	if (sort.sortOrder && sort.sortBy) {
		const sortType = sort.sortBy;
		return list.sort(function (a, b) {
			return sort.sortOrder == 'DESC' ? b[sortType].toLowerCase().localeCompare(a[sortType].toLowerCase()) : a[sortType].toLowerCase().localeCompare(b[sortType].toLowerCase());
		});
	}
	
	return list;
}