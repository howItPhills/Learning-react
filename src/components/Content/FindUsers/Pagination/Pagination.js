import React from "react";
import { useState } from "react";

const Pagination = React.memo((props) => {

   const pageAmount = Math.ceil(props.totalItemsCount / props.pageSize); // number of all pages

   const pages = [];

   for (let i = 1; i <= pageAmount; i++) {
      pages.push(i);
   }

   const [currentPortionNumber, setPortionNumber] = useState(1);
   const [portionSize, setPortonSize] = useState(10)


   const portionCount = Math.ceil(pageAmount / portionSize) // number of all portions
   const portionLeftBorder = (currentPortionNumber - 1) * portionSize + 1
   const portionRightBorder = currentPortionNumber * portionSize;


   const onPageClick = (page) => {
      props.setCurrentPage(page)
      // props.onPageChanged(page);
   }

   return (
      <div className="pagination">
         {currentPortionNumber > 1 && <button onClick={() => setPortionNumber(prevPortionNumber => prevPortionNumber - 1)} className='pagination__prev'>prev</button>}
         <div className="pagination__pages">
            {pages.filter(p => p >= portionLeftBorder && p <= portionRightBorder)
               .map((p) => (
                  <span
                     key={p}
                     className={props.currentPage === p ? "pagination__selected" : null}
                     onClick={() => p !== props.currentPage && onPageClick(p)}
                  >
                     {p}
                  </span>
               ))}
         </div>
         {currentPortionNumber < portionCount && <button onClick={() => setPortionNumber(prevPortionNumber => prevPortionNumber + 1)} className='pagination__next'>next</button>}
      </div>

   )
})

export default Pagination