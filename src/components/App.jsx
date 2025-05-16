import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchHits } from '../services/api';
import s from './App.module.css';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './ErrorMessage/ErrorMessage';

const App = () => {
  const [hits, setHits] = useState([]);
  const [values, setValues] = useState('photo');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchHits(values, page, abortController.signal);
        setHits(prev => [...prev, ...data]);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
    return () => {
      abortController.abort();
    };
  }, [values, page]);

  console.log(hits);

  const handleChangeInput = e => {
    setValues(e.target.value);
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };

  const handleChangePage = () => {
    setPage(page + 1);
  };

  return (
    <div className={s.body}>
      <SearchBar value={values} onSubmit={handleSubmit} onChange={handleChangeInput} />
      <ImageGallery arr={hits} />
      <Loader loading={loading} />
      <ErrorMessage error={error} />
      <LoadMoreBtn onClick={handleChangePage} />
    </div>
  );
};

export default App;
