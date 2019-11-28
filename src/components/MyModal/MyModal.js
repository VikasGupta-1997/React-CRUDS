import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default class MyModal extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            activeObject : {}
            
        };
        this.save = this.save.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('called', state, props);

    //     if (!state.editing && props.name !== state.name) {
    //         return {
    //             name: props.name,
    //             editing: false,
    //         }
    //     }
            // if (state.editing) {
            //     return {
            //         name: state.name,
            //         editing: true,
            //     }
            // }

    //     return null;
    // }

    componentDidUpdate(prevProps) {
        if(prevProps.activeObject !== this.props.activeObject) {
            this.setState({activeObject:this.props.activeObject, name: this.props.activeObject})
        }
    }

    handleChange(e){
        const updatedName = e.target.value;
        this.setState((oldState) => {
            const {activeObject} = oldState;
            activeObject.name = updatedName;
            return {activeObject}
        })
    }
    save = () => {
        this.props.updatedName(this.state.activeObject);
        this.props.hideModal();
    }

    render(){
        return (
            <div>
                <Modal show={this.props.showModal} onHide={() => {


                    this.props.hideModal()
                }}>
                <Modal.Header closeButton>
                <Modal.Title>Enter new name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type = "text"
                        required
                        value={this.state.name.name}
                        // onChange={(evt) => this.setState((prev) => ({
                        //     name: evt.target.value,
                        //     activeObject: { ...prev.activeObject, content: evt.target.value }
                        // }))
                        onChange = {this.handleChange}
                    
                    />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.hideModal}>
                    Close
                </Button>
                <Button  onClick={this.save}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
                    
            </div>
        );
    }
}
