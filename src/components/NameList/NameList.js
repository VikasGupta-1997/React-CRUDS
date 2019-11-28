import React from 'react';
import styled from 'styled-components';
//style for namelist
const DivForTable = styled.div `
    width: 80%;
    margin: 0 auto;
    box-shadow: 0px 5px 17px 5px rgba(0,0,0,.1);
    padding: 25px;
    margin-top: 30px;
`;
const Table = styled.table `
    border-collapse: collapse;
    border: 1px solid black;
    table-layout: auto;
    width: 100%; 
 `;
 const TableHead = styled.thead `
    font-size: 18px;
   
 `;
 const TableRow = styled.tr `
    border: 2px solid #dee2e6;
    
 `;
 const TableHeadForsr = styled.th `
    width: 10%;
    border: 2px solid #dee2e6;
    padding:10px 10px 10px 10px;
 `;
 const TableHeadForname = styled.th `
    width: 60%;
    border: 2px solid #dee2e6;
    padding:10px 10px 10px 10px;
 `;
 const TableHeadForupdate = styled.th `
    width: 15%;
    padding:10px 10px 10px 10px;
    border: 2px solid #dee2e6;
 `;
 const TableHeadFordelete = styled.th `
    width: 15%;
    border: 2px solid #dee2e6;
    padding:10px 10px 10px 10px;
 `;
 const TableBody = styled.tbody `
    font-size: 18px;
 `;
 const TableBodytr = styled.tr `
    font-size: 18px;
    border: 2px solid #dee2e6;
    
    &:hover{
        background: #ebebeb;
    }
 `;
 const TableBodytd = styled.td `
    border: 2px solid #dee2e6; 
    padding:10px 10px 10px 10px;
 `;
 const EditButton = styled.button `
    width: 100%;
    text-align: center;
    height: 40px;
    color: white;
    font-size: 17px;
    text-transform: uppercase;
    background: cornflowerblue;
    border: 1px solid cornflowerblue;
    &:hover{
        background: gray;
        border: 1px solid gray;
    }
 `;
 const DeleteButton = styled.button `
    width: 100%;
    text-align: center;
    height: 40px;
    color: white;
    font-size: 17px;
    text-transform: uppercase;
    background: hsl(0, 89%, 57%);
    border: 1px hsl(0, 89%, 57%);
    &:hover{
        background: gray;
        border: 1px solid gray;
    }
 `;

export default class NameList extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
   
    render(){
        return(
            <DivForTable>
            <Table >
<TableHead >
    <TableRow>
        <TableHeadForsr>
            SR.NO
        </TableHeadForsr>
        <TableHeadForname>
            NAME
        </TableHeadForname>
        <TableHeadForupdate>
             UPDATE
        </TableHeadForupdate>
        <TableHeadFordelete>
             DELETE
        </TableHeadFordelete>
    </TableRow>
</TableHead>

<TableBody>
     {
         this.props.array
         //please create the refrence of this filter method above and then call it here 
.filter((name) => (this.props.searchedTerm ? name.name.startsWith(this.props.searchedTerm.toLocaleLowerCase()):true))
.map((name,id) => (<TableBodytr key={id}><TableBodytd>{id+1}</TableBodytd>
                                            <TableBodytd>{name.name}</TableBodytd>
<TableBodytd><EditButton onClick = {() => this.props.edit(name.uid)} className="delBtn">EDIT</EditButton></TableBodytd>
<TableBodytd><DeleteButton onClick = {() => this.props.delete(name.uid)} className=" delBtn"  >DELETE</DeleteButton></TableBodytd>
                                            </TableBodytr>
                                            )
)
                
                
    }
    
</TableBody>
     
</Table>
</DivForTable>

        );
    }
}
