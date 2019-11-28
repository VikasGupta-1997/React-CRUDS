import React from 'react';

class EditButton extends React.Component{
    render(){
        return (
            <div>
            <button onClick = {() => this.nameShowInModal(name.uid)} className="delBtn">EDIT</button>
           
            </div>
        )
    }
}

class DeleteButton extends React.Component{
    render(){
        return (
            <div>
            
            <button onClick = {() => this.dataDelete(name.uid)} className=" delBtn"  >DELETE</button>
            </div>
        )
    }
}
export {EditButton};
export {DeleteButton}