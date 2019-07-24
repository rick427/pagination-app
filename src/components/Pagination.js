import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i<= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
           <ul className="pagination">
               {pageNumbers.map(nos => (
                   <li key={nos} className="page-item">
                       {/* eslint-disable-next-line */}
                       <a onClick={() => paginate(nos)} href="#" className="page-link">
                           {nos}
                       </a>
                   </li>
               ))}
            </ul> 
        </nav>
    )
}

export default Pagination;
