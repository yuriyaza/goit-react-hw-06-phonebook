import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, setFilter }) => {
  return (
    <label className={css.field}>
      <span className={css.label}>Find contacts by name:</span>

      <input
        className={css.input}
        type='text'
        name='filter'
        value={filter}
        onChange={e => {
          setFilter(e.target.value);
        }}
      />
    </label>
  );
};

Filter.types = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
