export const GET_DOGS_ALL = "GET_DOGS_ALL";
export const GET_DOGS = "GET_DOGS";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTER_ORIGIN = "FILTER_ORIGIN";
export const FILTER_TEMPERAMENT = "FILTER_TEMPERAMENT";
export const ORDER = "ORDER";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const URL_BASE =
  "https://henry-dogs-api-production-00.up.railway.app";

export const getDogsAll = () => {
  return function (dispach) {
    fetch(`${URL_BASE}/dogs`)
      .then((response) => response.json())
      .then((dogsAll) => {
        dispach({ type: GET_DOGS_ALL, payload: dogsAll });
      })
      .catch(() => {
        alert(
          "No pudo cargarse las razas de perros. Intentelo nuevamente por favor."
        );
      });
  };
};

export const getDogs = (name) => {
  return function (dispach) {
    fetch(`${URL_BASE}/dogs?name=${name}`)
      .then((response) => response.json())
      .then((dogs) => {
        dispach({ type: GET_DOGS, payload: dogs });
      })
      .catch(() => {
        alert("No hay raza de perro que contengan ese nombre.");
      });
  };
};

export const getDogDetail = (id) => {
  return function (dispatch) {
    fetch(`${URL_BASE}/dogs/${id}`)
      .then((response) => response.json())
      .then((dog) => {
        dispatch({
          type: GET_DOG_DETAIL,
          payload: dog,
        });
      })
      .catch(() => {
        alert("No hay perros con ese ID.");
      });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const getTemperaments = () => {
  return function (dispatch) {
    fetch(`${URL_BASE}/temperaments`)
      .then((response) => response.json())
      .then((temperaments) => {
        dispatch({
          type: GET_TEMPERAMENTS,
          payload: temperaments,
        });
      })
      .catch(() => {
        alert(
          "No pudo cargarse los temperamentos. Intentelo nuevamente por favor."
        );
      });
  };
};

export const filterOrigin = (origin) => {
  return function (dispatch) {
    fetch(`${URL_BASE}/dogs?origin=${origin}`)
      .then((response) => response.json())
      .then((dogs) => {
        if (!dogs.length)
          return alert("No existe ninguna raza creada.");
        dispatch({
          type: FILTER_ORIGIN,
          payload: dogs,
        });
      })
      .catch(() => {
        alert(
          "No pudo cargarse el origen de los datos. Intentelo nuevamente por favor."
        );
      });
  };
};

export const filterTemperament = (temperament) => {
  return {
    type: FILTER_TEMPERAMENT,
    payload: temperament,
  };
};

export const order = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: currentPage,
  };
};
