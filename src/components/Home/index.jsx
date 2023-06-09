import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDogsAll, getDogs, getTemperaments, filterOrigin, filterTemperament, order } from '../../redux/actions';
import Pagination from '../Pagination';
import Spinner from '../Loader';
import style from './home.module.css';

function Home() {
  const dispatch = useDispatch();
  const dogsAll = useSelector(state => state.dogsAll);
  const dogs = useSelector(state => state.dogs);
  const temperaments = useSelector(state => state.temperaments);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!dogsAll.length) dispatch(getDogsAll());
    if (!temperaments.length) dispatch(getTemperaments());
    // eslint-disable-next-line
  }, []);

  const onSearch = name => {
    if (!name) return alert('Ingrese un raza de perro por favor.');
    dispatch(getDogs(search));
  };

  const handlerSearch = event => setSearch(event.target.value);

  return (
    <section className={style.section}>
      <div className={style.menu}>
        <div className={style.searchBar}>
          <input className={style.searchInput} type="search" value={search} onChange={e => handlerSearch(e)} onFocus={() => setSearch('')} />
          <button className={style.searchButton} onClick={() => onSearch(search)}>
            BUSCAR
          </button>
        </div>

        <div className={style.filters}>
          <div>
            <label className={style.label}>Origen:</label>
            <select name="origin" className={style.select} onChange={e => dispatch(filterOrigin(e.target.value))}>
              <option value="all">Todos</option>
              <option value="api">Internet</option>
              <option value="db">Creados</option>
            </select>
          </div>
          <div>
            <label className={style.label}>Temperamento:</label>
            <select name="temperament" className={style.select} onChange={e => dispatch(filterTemperament(e.target.value))}>
              <option value="all">Todos</option>;
              {temperaments.map((temperament, index) => (
                <option key={index} value={temperament.name}>
                  {temperament.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={style.label}>Orden:</label>
            <select name="order" className={style.select} onChange={e => dispatch(order(e.target.value))}>
              <option value="all">Todos</option>
              <option value="AaZ">Raza: de la A a la Z</option>
              <option value="ZaA">Raza: de la Z a la A</option>
              <option value="min-a+">Peso mín: de (-) a (+)</option>
              <option value="min+a-">Peso mín: de (+) a (-)</option>
              <option value="max-a+">Peso máx: de (-) a (+)</option>
              <option value="max+a-">Peso máx: de (+) a (-)</option>
            </select>
          </div>
        </div>
      </div>

      {dogs.length ? (
        <Pagination dogs={dogs} />
      ) : (
        <div className={style.loader}>
          <Spinner />
        </div>
      )}
    </section>
  );
}

export default Home;
