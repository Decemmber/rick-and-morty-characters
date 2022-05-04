import React from 'react';

const FilterCheckbox = () => {
  return (
    <label className="checkbox">
      <input type="checkbox" className="checkbox__real" name="value-02" />
      <span className="checkbox__fake"></span>
      <span className="checkbox__title">Alien</span>
    </label>
  );
};

export default FilterCheckbox;
