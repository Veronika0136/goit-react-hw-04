import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchHits } from '../services/api';
import s from './App.module.css';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import toast from 'react-hot-toast';

const App = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState('photo');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const abortController = new AbortController();
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchHits(query, page, abortController.signal);
        setHits(prev => [...prev, ...data.results]);
        setTotalPages(data.total_pages - 1);
      } catch (err) {
        console.log(err);
        if (err.code !== 'ERR_CANCELED') {
          setError(true);
          toast.error(
            'Whoops!Please enter some text to search for an image or try reloading this page!'
          );
        }
      } finally {
        setLoading(false);
      }
    };
    getData();
    return () => {
      abortController.abort();
    };
  }, [query, page]);

  console.log(hits);

  const handleChangeQuery = newQuery => {
    setQuery(newQuery);
    setHits([]);
    setPage(0);
  };

  const handleChangePage = () => {
    setPage(page + 1);
  };

  return (
    <div className={s.body}>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <ImageGallery arr={hits} />
      <Loader loading={loading} />
      {page < totalPages && !loading && !error && <LoadMoreBtn onClick={handleChangePage} />}
    </div>
  );
};

export default App;
