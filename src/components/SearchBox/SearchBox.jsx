import { useId } from 'react';
import s from '../SearchBox/SearchBox.module.css';
const SearchBox = ({ search, setSearch }) => {
  const findId = useId();

  return (
    <div className={s.container}>
      <label className={s.label} htmlFor={findId}>
        Find contacts by name
      </label>
      <input
        className={s.field}
        type="text"
        id={findId}
        value={search}
        onChange={e => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};
export default SearchBox;
