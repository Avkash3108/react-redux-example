import { FILTER_PIZZA_LIST, LOAD_PIZZA_LIST, SORT_PIZZA_LIST } from '../actions'

function getDefaultState() {
	return {
			pizzas: [],
            filter: '',
            sortOrder: 'ASC',
            loading: true
        }
}

function LoadPizzList(state, action) {
	return Object.assign({}, state, {
        pizzas: action.value,
        loading: false
      })
}

function sortPizzaList(state, action) {
	return Object.assign({}, state, {
        sortOrder: action.value
      })
}

function filterPizzaList(state, action) {
	return Object.assign({}, state, {
        filter: action.value
      })
}

export default function (state = getDefaultState(), action) {
	const actions = {
		[FILTER_PIZZA_LIST] : filterPizzaList.bind(this),
		[LOAD_PIZZA_LIST] : LoadPizzList.bind(this),
		[SORT_PIZZA_LIST] : sortPizzaList.bind(this)
	}


	const reducers = actions[action.type];

	return reducers ? reducers(state, action) : state;
}