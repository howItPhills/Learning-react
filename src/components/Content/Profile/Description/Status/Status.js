import React, { useEffect } from 'react'
import { useState } from 'react'

const Status = React.memo((props) => {

   const [isEditing, setEditMode] = useState(false);
   const [status, setStatus] = useState(props.status);


   useEffect(() => {
      setStatus(props.status)
   }, [props.status])

   const openEditMode = () => {
      props.isOwner && setEditMode(true);
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
         {!isEditing ?
            <span onClick={openEditMode} className={props.isOwner ? 'status' : null}>{props.status || '...'}</span> :
            <input autoFocus={true} onBlur={closeEditMode} value={status} onChange={onStatusChange} />}
      </div >
   )
})

export default Status
