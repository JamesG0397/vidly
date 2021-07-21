import React from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';


const Pagination = ({itemCount, pageSize, onPageChange, currentPage}) => {

    const pagesCount = Math.ceil(itemCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = lodash.range(1, pagesCount +1)


    return ( 
        <nav>
                <ul className="pagination">
                {pages.map(page => (
                    <li className={page === currentPage ? 'page-item active': 'page-item' } key={page}>
                        <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
     );
}

// typing checking the program to stop bugs, especially in reusable components
Pagination.propTypes = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired, 
    currentPage: PropTypes.number.isRequired
};

export default Pagination;