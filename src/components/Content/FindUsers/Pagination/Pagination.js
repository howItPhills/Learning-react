import React from "react";
import { useState } from "react";

let Pagination = React.memo((props) => {
   let pageAmount = Math.ceil(props.totalItemsCount / props.pageSize); // number of all pages

   let pages = [];

   for (let i = 1; i <= pageAmount; i++) {
      pages.push(i);
   }

   let portionCount = Math.ceil(pageAmount / props.portionSize) // number of all portions
   let [currentPortionNumber, setPortionNumber] = useState(1);
   let portionLeftBorder = (currentPortionNumber - 1) * props.portionSize + 1
   let portionRightBorder = currentPortionNumber * props.portionSize;

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
})

export default Pagination


