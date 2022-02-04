import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { updateStatus } from '../../../../../redux/profile/profile.actions';
import { setStatus } from '../../../../../redux/profile/profile.actions';
import { selectStatus } from '../../../../../redux/profile/profile.selectors';



const Status = ({ isOwner }) => {

   const dispatch = useDispatch()
   const status = useSelector(selectStatus)

   const [isEditing, setEditMode] = useState(false);

   const openEditMode = () => {
      if (isOwner) {
         setEditMode(true);
      }
   }

   const closeEditMode = () => {
      setEditMode(false);
      dispatch(updateStatus(status))
   }

   const onStatusChange = (e) => {
      dispatch(setStatus(e.target.value));
   }

   return (
      <div>
         {isEditing ?
            <input autoFocus={true} onBlur={closeEditMode} value={status} onChange={onStatusChange} /> :
            <span onClick={openEditMode} className={isOwner ? 'status' : null}>{status || '...'}</span>
         }
      </div >
   )
}

export default Status