import React from 'react'

class Status extends React.Component {

   state = {
      isEditing: false,
      status: '',
   }

   activateEditMode = () => {
      this.setState({
         isEditing: true,
         status: this.props.status
      })
   }
   deActivateEditMode = () => {
      this.setState({
         isEditing: false,
      })
      this.props.updateStatus(this.state.status)
   }

   onChangeStatus = (e) => {
      this.setState({
         status: e.currentTarget.value
      })
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         })
      }
   }

   render() {
      return (
         <div>
            {!this.state.isEditing ?
               <span onDoubleClick={this.activateEditMode}>{this.props.status || '...'}</span> :
               <input value={this.state.status} onChange={this.onChangeStatus} onBlur={this.deActivateEditMode} autoFocus={true} />}
         </div>
      )
   }
}

export default Status
