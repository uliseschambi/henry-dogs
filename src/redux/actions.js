export const GET_DOGS = 'GET_DOGS';
export const GET_DOG_DETAIL = 'GET_DOG_DETAIL';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const FILTER_ORIGIN = 'FILTER_ORIGIN';
export const FILTER_TEMPERAMENT = 'FILTER_TEMPERAMENT';
export const ORDER = 'ORDER';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const URL_BASE = 'https://henry-dogs.adaptable.app';

export const getDogs = name => {
  let url = `${URL_BASE}/dogs`;
  name && (url += `?name=${name}`);
  return function (dispach) {
    fetch(url)
      .then(response => response.json())
      .then(dogs => {
        dispach({ type: GET_DOGS, payload: dogs });
      })
      .catch(() => {
        if (name)
          alert('No hay raza de perro que contengan ese nombre.');
        else alert('No pudo cargarse las razas de perros.');
      });
  };
};

export const getDogDetail = id => {
  return function (dispatch) {
    fetch(`${URL_BASE}/dogs/${id}`)
      .then(response => response.json())
      .then(dog => {
        dispatch({
          type: GET_DOG_DETAIL,
          payload: dog,
        });
      })
      .catch(() => {
        alert('No hay perros con ese ID.');
      });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const getTemperaments = dogs => {
  return function (dispatch) {
    fetch(`${URL_BASE}/temperaments`, {
      method: 'POST',
      body: JSON.stringify(dogs),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(temperaments => {
        dispatch({
          type: GET_TEMPERAMENTS,
          payload: temperaments,
        });
      })
      .catch(() => {
        alert(
          'No pudo cargarse los temperamentos. Intentelo nuevamente por favor.'
        );
      });
  };
};

export const filterOrigin = origin => {
  return {
    type: FILTER_ORIGIN,
    payload: origin,
  };
};

export const filterTemperament = temperament => {
  return {
    type: FILTER_TEMPERAMENT,
    payload: temperament,
  };
};

export const order = order => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const setCurrentPage = currentPage => {
  return {
    type: SET_CURRENT_PAGE,
    payload: currentPage,
  };
};
