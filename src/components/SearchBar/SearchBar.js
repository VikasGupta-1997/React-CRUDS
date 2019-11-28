import React from 'react';
import styled from 'styled-components';
import { FaBeer } from 'react-icons/fa';

const SearchDiv = styled.div `
    width:100%;
    background-color:teal;
   
`;
const AliDiv = styled.div `
    text-align:center;
`;
// const H4 = styled.h4 `
//     font-size:2.5rem;
//     color:#f2c420;
//     padding:20px 0px 0px 0px;
//     margin:0px 0px 0px -420px;
//     &:hover{
//         color:#1b1b1b;
//         pointer
//     }
// `;
const SearchTxt = styled.input `
    width:20%;
    margin:10px 0px 20px -450px;
    border:1px solid #fff;
    padding:6px 10px;
    text-align:center;
`;
export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            serchName:'',
        }
        this.SearchBar = this.SearchBar.bind(this)
    }
    //how to insert filter method in this compo as it is using map to search so we have to map all table
    SearchBar(e){
        // alert(76)
        // this.props.searchName(this.state.serchName)
        this.setState({serchName: e.target.value}, () => {
            this.props.searchName(this.state.serchName)
            console.log('current state is : ',this.state.serchName)
        })
    }
    render(){
        return(
            <SearchDiv>
            <AliDiv>
            
                <SearchTxt
                    type ="text"
                    className="nameSearch"
                    placeholder="search here . . . . ."
                    // <i class="fa fa-search" aria-hidden="true"></i>
                    value={this.state.serchName}
                    onChange={this.SearchBar} 
                />
                </AliDiv>
            </SearchDiv>
        );
    }

} 