import React from 'react';
import styled from 'styled-components';
const MainDiv = styled.div`
    width:100%;
    background-color: teal;
    color:red;
    padding:30px 0px 0px 0px;
`;
const Form = styled.div`
    width:80%;
    text-align:center;
    display:inline-block;
`;
const EnterName = styled.input`

    width:50%;
    color:grey;
    padding: 12px 20px;
    margin: 10px 30px 10px 0px;
    box-sizing: border-box;
    border:2px solid #fff;
    
`;
const Subutton = styled.button `
    padding:12px 20px;
    border-radius:5px;
    color:#fff;
    background-color:green;
    border:2px solid #fff;
    &:hover{
        background-color:cyan;
        color:teal;
       
    }
`;
export default class CreateName extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            
        }
        this.submitName = this.submitName.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    submitName(e){
        e.preventDefault();
        console.log('name saved is ',this.state.name)
        this.props.submitName(this.state.name);
        //this.setState({name:''})
        this.setState({name: '' });
    }
    handleChange(e){
        this.setState({name: e.target.value});
    }
    
render(){
    return (
       <MainDiv>
            <Form onSubmit = {this.submitName} >
                  
                       
                       <EnterName
                      
                        placeholder="please enter name "
                        value = {this.state.name} required 
                         onChange = {this.handleChange}
                        
                        />
                         
                        <Subutton 
                        type="submit" 
                        className="submit-btn" >
                            ADD
                        </Subutton>
            </Form>
        </MainDiv>
       
    );

}

}