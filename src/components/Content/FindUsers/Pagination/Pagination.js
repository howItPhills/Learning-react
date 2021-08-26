import React from "react";
import { useState } from "react";

let Pagination = React.memo((props) => {
   const pageAmount = Math.ceil(props.totalItemsCount / props.pageSize); // number of all pages

   const pages = [];

   for (let i = 1; i <= pageAmount; i++) {
      pages.push(i);
   }

   const portionCount = Math.ceil(pageAmount / props.portionSize) // number of all portions
   const [currentPortionNumber, setPortionNumber] = useState(props.currentPortionNumber);
   const portionLeftBorder = (currentPortionNumber - 1) * props.portionSize + 1
   const portionRightBorder = currentPortionNumber * props.portionSize;


   const onPageClick = (page, currentPortion) => {
      props.onPageChanged(page);
      props.setCurrentPortionNumber(currentPortion);
   }

   return (
      <div className="pagination">
         {currentPortionNumber > 1 && <button onClick={() => setPortionNumber(currentPortionNumber - 1)} className='pagination__prev'>prev</button>}
         <div className="pagination__pages">
            {pages.filter(p => p >= portionLeftBorder && p <= portionRightBorder)
               .map((p) => (
                  <span
                     key={p}
                     className={props.currentPage === p ? "pagination__selected" : null}
                     onClick={() => p !== props.currentPage && onPageClick(p, currentPortionNumber)}
                  >
                     {p}
                  </span>
               ))}
         </div>
         {currentPortionNumber < portionCount && <button onClick={() => setPortionNumber(currentPortionNumber + 1)} className='pagination__next'>next</button>}
      </div>

   )
})

export default Pagination


