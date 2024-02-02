import React from 'react';
import classes from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={classes.sectionWrap}>
      <h2 className={classes.sectionTitle}>{title}</h2>
      {children}
    </div>
  );
};
