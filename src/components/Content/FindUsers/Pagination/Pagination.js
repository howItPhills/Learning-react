import React from "react";
import { useState } from "react";

const Pagination = React.memo((props) => {
   const pageAmount = Math.ceil(props.totalItemsCount / props.pageSize); // number of all pages

   const pages = [];

   for (let i = 1; i <= pageAmount; i++) {
      pages.push(i);
   }

   const portionCount = Math.ceil(pageAmount / props.portionSize) // number of all portions
   const [currentPortionNumber, setPortionNumber] = useState(1);
   const portionLeftBorder = (currentPortionNumber - 1) * props.portionSize + 1
   const portionRightBorder = currentPortionNumber * props.portionSize;

   return (
      <div className="pagination">
         {currentPortionNumber > 1 && <button onClick={() => setPortionNumber(currentPortionNumber - 1)}>prev</button>}
         {pages.filter(p => p >= portionLeftBorder && p <= portionRightBorder)
            .map((p) => (
               <span
                  key={p}
                  className={props.currentPage === p ? "pagination__selected" : null}
                  onClick={() => props.onPageChanged(p)}
               >
                  {p}
               </span>
            ))}
         {currentPortionNumber < portionCount && <button onClick={() => setPortionNumber(currentPortionNumber + 1)}>next</button>}
      </div>
   )
});

export default Pagination


