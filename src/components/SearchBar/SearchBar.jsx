import React from 'react';
// import toast, { Toaster } from 'react-hot-toast';
import s from './SearchBar.module.css';

// const notify = () => toast('Here is your toast.');

const SearchBar = ({ value, onSubmit }) => {
  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={onSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
        />
        <button className={s.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
