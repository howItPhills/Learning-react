import React, { useEffect } from 'react'
import { useState } from 'react'

const StatusHooks = (props) => {

   const [isEditing, setEditMode] = useState(false);
   const [status, setStatus] = useState(props.status);


   useEffect(() => {
      setStatus(props.status)
   }, [props.status])

   const changeEditMode = () => {
      setEditMode(true);
   }

   const closeEditMode = () => {
      setEditMode(false);
      props.updateStatus(status)
   }

   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value)
   }

   return (
      <div>
         <div>
            {!isEditing ?
               <span onDoubleClick={changeEditMode}>{props.status || '...'}</span> :
               <input autoFocus={true} onBlur={closeEditMode} value={status} onChange={onStatusChange} />}
         </div>
      </div>
   )
}

export default StatusHooks
