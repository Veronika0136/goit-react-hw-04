import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchHits } from '../services/api';
import s from './App.module.css';

const App = () => {
  const [hits, setHits] = useState([]);
  const [values, setValues] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchHits();
        setHits(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  console.log(hits);

  const handleChangeInput = e => {
    setValues(e.target.value);
    console.log(values);
  };

  return (
    <div className={s.body}>
      <SearchBar value={values} onSubmit={handleChangeInput} />
      <ImageGallery arr={hits} />
    </div>
  );
};

export default App;
