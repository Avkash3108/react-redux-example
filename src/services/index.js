const headerKeys = {
	users: ['First Name', 'Last Name', 'E Mail', 'Address', 'Contact'],
	pizzas: ['Pizza Name', 'Price', 'Available Sizes', 'Category']
};

const dataKeys = {
	users: ['firstName', 'lastName', 'email', 'address', 'contact'],
	pizzas: ['name', 'price', 'availableSizes', 'category']
};

export function getHeaderKeys(listType) {
	return headerKeys[listType];
}

export function getDataKeys(listType) {
	return dataKeys[listType];
}

export function cleanHeaderClass(name) {
	return name.toLowerCase().replace(/ /g, '-');
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