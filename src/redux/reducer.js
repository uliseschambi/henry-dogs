import {
  GET_DOGS,
  GET_DOG_DETAIL,
  CLEAN_DETAIL,
  GET_TEMPERAMENTS,
  FILTER_ORIGIN,
  FILTER_TEMPERAMENT,
  ORDER,
  SET_CURRENT_PAGE,
} from './actions';

const initialState = {
  dogsAll: [],
  dogsOrigin: [],
  dogs: [],
  dogDetail: {},
  temperaments: [],
  filter: { origin: '', temperament: '', order: '' },
  currentPage: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Aca va tu codigo;

    case GET_DOGS: {
      return {
        ...state,
        filter: {
          origin: 'all',
          temperament: 'all',
          order: 'none',
        },
        dogsAll: action.payload,
        dogsOrigin: action.payload,
        dogs: action.payload,
      };
    }

    case GET_DOG_DETAIL: {
      return {
        ...state,
        dogDetail: action.payload,
      };
    }

    case CLEAN_DETAIL: {
      return {
        ...state,
        dogDetail: {},
      };
    }

    case GET_TEMPERAMENTS: {
      return {
        ...state,
        temperaments: action.payload,
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }

    case FILTER_ORIGIN: {
      let filteredArray =
        action.payload === 'all'
          ? state.dogsAll
          : state.dogsAll.filter(dogs => {
              return dogs.origin === action.payload;
            });
      return {
        ...state,
        filter: {
          origin: action.payload,
          temperament: 'all',
          order: 'none',
        },
        dogsOrigin: filteredArray,
        dogs: filteredArray,
      };
    }

    case FILTER_TEMPERAMENT: {
      return {
        ...state,
        filter:
          action.payload === 'all'
            ? {
                origin: state.filter.origin,
                temperament: 'all',
                order: 'none',
              }
            : {
                origin: state.filter.origin,
                temperament: action.payload,
                order: 'none',
              },
        dogs:
          action.payload === 'all'
            ? state.dogsOrigin
            : state.dogsOrigin.filter(dogs => {
                return dogs.temperament
                  ?.toUpperCase()
                  .includes(action.payload.toUpperCase());
              }),
      };
    }

    case ORDER: {
      // sort() modifica el array original
      // split convierte string a array, trim elimina espacios al inicio y final, ~~ conviert de string a nro.
      return {
        ...state,
        filter: { ...state.filter, order: action.payload },
        dogs:
          action.payload === 'AaZ'
            ? [...state.dogs].sort((dog1, dog2) => {
                if (dog1.name.toLowerCase() < dog2.name.toLowerCase())
                  return -1;
                if (dog1.name.toLowerCase() > dog2.name.toLowerCase())
                  return 1;
                return 0;
              })
            : action.payload === 'ZaA'
            ? [...state.dogs]
                .sort((dog1, dog2) => {
                  if (
                    dog1.name.toLowerCase() < dog2.name.toLowerCase()
                  )
                    return -1;
                  if (
                    dog1.name.toLowerCase() > dog2.name.toLowerCase()
                  )
                    return 1;
                  return 0;
                })
                .reverse()
            : action.payload === 'min-a+'
            ? [...state.dogs].sort(
                (dog1, dog2) =>
                  ~~dog1.weight.split('-')[0].trim() -
                  ~~dog2.weight.split('-')[0].trim()
              )
            : action.payload === 'min+a-'
            ? [...state.dogs]
                .sort(
                  (dog1, dog2) =>
                    ~~dog1.weight.split('-')[0].trim() -
                    ~~dog2.weight.split('-')[0].trim()
                )
                .reverse()
            : action.payload === 'max-a+'
            ? [...state.dogs].sort((dog1, dog2) => {
                const dog1found =
                  dog1.weight.split('-')[1] ||
                  dog1.weight.split('-')[0];
                const dog2found =
                  dog2.weight.split('-')[1] ||
                  dog2.weight.split('-')[0];
                return ~~dog1found.trim() - ~~dog2found.trim();
              })
            : action.payload === 'max+a-'
            ? [...state.dogs]
                .sort((dog1, dog2) => {
                  const dog1found =
                    dog1.weight.split('-')[1] ||
                    dog1.weight.split('-')[0];
                  const dog2found =
                    dog2.weight.split('-')[1] ||
                    dog2.weight.split('-')[0];
                  return ~~dog1found.trim() - ~~dog2found.trim();
                })
                .reverse()
            : state.dogs,
      };
    }

    default:
      return { ...state };
  }
};

export default reducer;
