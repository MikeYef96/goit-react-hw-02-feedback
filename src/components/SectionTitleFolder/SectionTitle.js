import React from 'react';
import PropTypes from 'prop-types';
import css from './SectionTitle.module.css';

export function SectionTitle({ title, children }) {
  return (
    <section className={css.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
