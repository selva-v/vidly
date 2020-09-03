import React from 'react';
import propTypes from 'prop-types';
import _ from 'lodash';

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize); //Math.ceil to covert floading number to integer
  const pages = _.range(1, pagesCount + 1);

  //Create array in ES6
  //const pages = Array.from(Array(pagesCount), (_, i) => i + 1);

  return (
    <nav className="navigation">
      <ul className="pagination">
        {pages.map((page) => (
          <li className={page === currentPage ? 'page-item active' : 'page-item'} key={page}>
            <a onClick={() => onPageChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
};

export default Pagination;
