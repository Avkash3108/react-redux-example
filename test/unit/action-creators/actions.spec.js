import {
    loadPizzaList,
    loadMorePizzas,
    loadUserList,
    loadMoreUsers,
    setFilter,
    setSortOrder,
    resetState
} from '../../../src/action-creators/actions';
import * as actions from '../../../src/actions';
import * as fetchServices from '../../../src/services/data-fetch';

const stubRepository = () => jest.spyOn(fetchServices, 'fetchData');

describe('React Redux Example Action Creators', () => {
    const any = {
        dispatch: () => jest.fn(),
        state: () => {
            return {
                filter: 'filter text',
                lastFetchedPage: 1,
                sort: {
                    sortBy: 'test',
                    sortOrder: 'ASC'
                }
            };
        }
    };

    describe('Loading users list', () => {
        let state, dispatch;

        beforeEach(() => {
            state = any.state();
            dispatch = any.dispatch();
        });

         it('should let the system know that the data is being fetched', () => {
            const mockedData = ['anyData'];
            const expectedAction = {
                type: actions.FETCH_USER_LIST
            };

            stubRepository().mockReturnValue(Promise.resolve(mockedData));

            return loadUserList()(dispatch, () => state).then(() =>{
                const dispatchedAction = dispatch.mock.calls[0][0];

                expect(dispatchedAction).toStrictEqual(expectedAction);
            });
         });

         describe('Query String', () => {
            it('should call service with provided query informations', () => {
                const mockedData = ['anyData'];
                const repositoryStub = stubRepository().mockReturnValue(Promise.resolve(mockedData));
                const queryObject = {
                    '_page': 1,
                    '_limit': 100,
                    '_sort': state.sort.sortBy,
                    '_order': state.sort.sortOrder,
                    'q': state.filter
                };

                return loadUserList()(dispatch, () => state).then(() =>{
                    expect(repositoryStub).toHaveBeenCalledTimes(1);
                    expect(repositoryStub).toHaveBeenCalledWith('/users', queryObject);
                });
             });
         });

         it('should laod user list and store it', () => {
            const mockedData = ['anyData'];
            const expectedAction = {
                data: mockedData,
                type: actions.STORE_USER_LIST
            };

            stubRepository().mockReturnValue(Promise.resolve(mockedData));

            return loadUserList()(dispatch, () => state).then(() =>{
                const dispatchedAction = dispatch.mock.calls[1][0];

                expect(dispatchedAction).toStrictEqual(expectedAction);
            });
         });

        it('should dispatch null on service error', () => {
            const mockedData = ['anyData'];
            const expectedAction = {
                data: null,
                type: actions.STORE_USER_LIST
            };

            stubRepository().mockReturnValue(Promise.reject(mockedData));

            return loadUserList()(dispatch, () => state).then(() =>{
                const dispatchedAction = dispatch.mock.calls[1][0];

                expect(dispatchedAction).toStrictEqual(expectedAction);
            });
         });
    });

    describe('Loading more users using infinite scroll', () => {
        let state, dispatch;

        beforeEach(() => {
            state = any.state();
            dispatch = any.dispatch();
        });

         it('should let the system know that the data is being fetched', () => {
            const mockedData = ['anyData'];
            const expectedAction = {
                type: actions.FETCH_MORE_USERS
            };

            stubRepository().mockReturnValue(Promise.resolve(mockedData));

            return loadMoreUsers()(dispatch, () => state).then(() =>{
                const dispatchedAction = dispatch.mock.calls[0][0];

                expect(dispatchedAction).toStrictEqual(expectedAction);
            });
         });

         describe('Query String', () => {
            it('should call service with provided query informations', () => {
                const mockedData = ['anyData'];
                const repositoryStub = stubRepository().mockReturnValue(Promise.resolve(mockedData));
                const queryObject = {
                    '_page': state.lastFetchedPage + 1,
                    '_limit': 100,
                    '_sort': state.sort.sortBy,
                    '_order': state.sort.sortOrder,
                    'q': state.filter
                };

                return loadMoreUsers()(dispatch, () => state).then(() =>{
                    expect(repositoryStub).toHaveBeenCalledTimes(1);
                    expect(repositoryStub).toHaveBeenCalledWith('/users', queryObject);
                });
             });
         });

         it('should laod and store next list of users', () => {
            const mockedData = ['anyData'];
            const expectedAction = {
                page: state.lastFetchedPage + 1,
                data: mockedData,
                type: actions.STORE_MORE_USERS
            };

            stubRepository().mockReturnValue(Promise.resolve(mockedData));

            return loadMoreUsers()(dispatch, () => state).then(() =>{
                const dispatchedAction = dispatch.mock.calls[1][0];

                expect(dispatchedAction).toStrictEqual(expectedAction);
            });
         });

        it('should dispatch null on service error', () => {
            const mockedData = ['anyData'];
            const expectedAction = {
                page: state.lastFetchedPage + 1,
                data: null,
                type: actions.STORE_MORE_USERS
            };

            stubRepository().mockReturnValue(Promise.reject(mockedData));

            return loadMoreUsers()(dispatch, () => state).then(() =>{
                const dispatchedAction = dispatch.mock.calls[1][0];

                expect(dispatchedAction).toStrictEqual(expectedAction);
            });
         });
    });


    describe('Loading pizza list', () => {
        let state, dispatch;

        beforeEach(() => {
            state = any.state();
            dispatch = any.dispatch();
        });

         it('should let the system know that the data is being fetched', () => {
            const mockedData = ['anyData'];
            const expectedAction = {
                type: actions.FETCH_PIZZA_LIST
            };

            stubRepository().mockReturnValue(Promise.resolve(mockedData));

            return loadPizzaList()(dispatch, () => state).then(() =>{
                const dispatchedAction = dispatch.mock.calls[0][0];

                expect(dispatchedAction).toStrictEqual(expectedAction);
            });
         });

         describe('Query String', () => {
            it('should call service with provided query informations', () => {
                const mockedData = ['anyData'];
                const repositoryStub = stubRepository().mockReturnValue(Promise.resolve(mockedData));
                const queryObject = {
                    '_page': 1,
                    '_limit': 100,
                    '_sort': state.sort.sortBy,
                    '_order': state.sort.sortOrder,
                    'q': state.filter
                };

                return loadPizzaList()(dispatch, () => state).then(() =>{
                    expect(repositoryStub).toHaveBeenCalledTimes(1);
                    expect(repositoryStub).toHaveBeenCalledWith('/pizzas', queryObject);
                });
             });
         });

         it('should laod pizzas list and store it', () => {
            const mockedData = ['anyData'];
            const expectedAction = {
                data: mockedData,
                type: actions.STORE_PIZZA_LIST
            };

            stubRepository().mockReturnValue(Promise.resolve(mockedData));

            return loadPizzaList()(dispatch, () => state).then(() =>{
                const dispatchedAction = dispatch.mock.calls[1][0];

                expect(dispatchedAction).toStrictEqual(expectedAction);
            });
         });

        it('should dispatch null on service error', () => {
            const mockedData = ['anyData'];
            const expectedAction = {
                data: null,
                type: actions.STORE_PIZZA_LIST
            };

            stubRepository().mockReturnValue(Promise.reject(mockedData));

            return loadPizzaList()(dispatch, () => state).then(() =>{
                const dispatchedAction = dispatch.mock.calls[1][0];

                expect(dispatchedAction).toStrictEqual(expectedAction);
            });
         });
    });

    describe('Loading more pizaas using infinite scroll', () => {
        let state, dispatch;

        beforeEach(() => {
            state = any.state();
            dispatch = any.dispatch();
        });

         it('should let the system know that the data is being fetched', () => {
            const mockedData = ['anyData'];
            const expectedAction = {
                type: actions.FETCH_MORE_PIZZAS
            };

            stubRepository().mockReturnValue(Promise.resolve(mockedData));

            return loadMorePizzas()(dispatch, () => state).then(() =>{
                const dispatchedAction = dispatch.mock.calls[0][0];

                expect(dispatchedAction).toStrictEqual(expectedAction);
            });
         });

         describe('Query String', () => {
            it('should call service with provided query informations', () => {
                const mockedData = ['anyData'];
                const repositoryStub = stubRepository().mockReturnValue(Promise.resolve(mockedData));
                const queryObject = {
                    '_page': state.lastFetchedPage + 1,
                    '_limit': 100,
                    '_sort': state.sort.sortBy,
                    '_order': state.sort.sortOrder,
                    'q': state.filter
                };

                return loadMorePizzas()(dispatch, () => state).then(() =>{
                    expect(repositoryStub).toHaveBeenCalledTimes(1);
                    expect(repositoryStub).toHaveBeenCalledWith('/pizzas', queryObject);
                });
             });
         });

         it('should laod and store next list of users', () => {
            const mockedData = ['anyData'];
            const expectedAction = {
                page: state.lastFetchedPage + 1,
                data: mockedData,
                type: actions.STORE_MORE_PIZZAS
            };

            stubRepository().mockReturnValue(Promise.resolve(mockedData));

            return loadMorePizzas()(dispatch, () => state).then(() =>{
                const dispatchedAction = dispatch.mock.calls[1][0];

                expect(dispatchedAction).toStrictEqual(expectedAction);
            });
         });

        it('should dispatch null on service error', () => {
            const mockedData = ['anyData'];
            const expectedAction = {
                page: state.lastFetchedPage + 1,
                data: null,
                type: actions.STORE_MORE_PIZZAS
            };

            stubRepository().mockReturnValue(Promise.reject(mockedData));

            return loadMorePizzas()(dispatch, () => state).then(() =>{
                const dispatchedAction = dispatch.mock.calls[1][0];

                expect(dispatchedAction).toStrictEqual(expectedAction);
            });
         });
    });

    it('should dispatch an action to reset Lcm', () => {
        const expectedAction = {
            type: actions.RESET_STATE
        };
        const action = resetState();

        expect(action).toStrictEqual(expectedAction);
    });

    it('should dispatch an action to set filter value', () => {
        const filterValue = 'test';
        const expectedAction = {
            type: actions.SET_FILTER,
            value: filterValue
        };
        const action = setFilter(filterValue);

        expect(action).toStrictEqual(expectedAction);
    });

    it('should dispatch an action to set sorting value', () => {
        const sortBy = 'test';
        const expectedAction = {
            sortBy,
            type: actions.SET_SORT_ORDER
        };
        const action = setSortOrder(sortBy);

        expect(action).toStrictEqual(expectedAction);
    });
});
