import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../redux/filtersSlice";

const SearchBox = () => {
  const filterText = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Find contacts by name"
      value={filterText}
      onChange={handleInputChange}
    />
  );
};

export default SearchBox;
