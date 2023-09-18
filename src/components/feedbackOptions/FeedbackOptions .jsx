import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ incrementAdd, state }) => {
  const preArray = Object.keys(state);
  const array = preArray.map(el => (
    <button
      className="w-20 mx-1 border-solid border border-indigo-600 hover:border-dotted border-amber-800 rounded-md"
      type="button"
      key={nanoid()}
      onClick={() => incrementAdd(el)}
    >
      {el}
    </button>
  ));

  return <div>{array}</div>;
};

FeedbackOptions.propTypes = {
  state: PropTypes.objectOf(
    PropTypes.shape({
      good: PropTypes.number,
      neutral: PropTypes.number,
      bad: PropTypes.number,
    })
  ),
  incrementAdd: PropTypes.func,
};
