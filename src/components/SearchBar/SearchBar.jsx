import React from 'react';
import { Field, Form, Formik } from 'formik';
import s from './SearchBar.module.css';

const SearchBar = ({ handleChangeQuery }) => {
  const initialValues = {
    query: '',
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    handleChangeQuery(values.query);

    options.resetForm();
  };
  return (
    <header className={s.header}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <Field
            className={s.input}
            name="query"
            placeholder="Search images and photos"
            type="text"
            autoComplete="off"
            autoFocus
          />

          <button className={s.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
