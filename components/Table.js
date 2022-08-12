import React from 'react';
import { PropTypes } from 'prop-types';
import DisplayTable from './DisplayTable';

function Table(props) {
  const { data, handlerDelete } = props;

  if (data.length === 0)
    return <h1>Please wait some time for load data ...</h1>;
  return <DisplayTable handler={handlerDelete} data={data} />;
}

DisplayTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      City: PropTypes.string.isRequired,
      Email: PropTypes.string.isRequired,
      Job: PropTypes.string.isRequired,
      Name: PropTypes.string.isRequired,
      'Phone Number': PropTypes.string,
    })
  ),
};
export default Table;
