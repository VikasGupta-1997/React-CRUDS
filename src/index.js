import React from 'react';
import ReactDOM from 'react-dom';
import CreateName from './components/createName/CreateName';
import MyModal from './components/MyModal/MyModal';
import SearchBar from './components/SearchBar/SearchBar';
import NameList from './components/NameList/NameList';
//import {EditButton} from './components/ButtonComponent/ButtonComponent';
//import {DeleteButton} from './components/ButtonComponent/ButtonComponent';
import { uuid } from 'uuidv4';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './styles.css'
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        value:'',
        array:[],
        showModal: false,
        foundName: '',
        searchedTerm:'',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.dataDelete = this.dataDelete.bind(this);
        this.nameShowInModal = this.nameShowInModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    componentDidMount() {
        const list = localStorage.name || "[]";
        this.setState({ array: JSON.parse(list) })
    }
     handleFormSubmit = (name) => {
        // e.preventDefault();
        //making an copy of the array using spread 
        let arr = [...this.state.array];
        //adding new name in our array
        arr.push({'name': name,uid:uuid()})
        // alert ('A name was submitted = '+this.state.value)
        //stringifying array and saving name in localstorage 
        localStorage.setItem('name',JSON.stringify(arr))
        //updating state for new name entered in our array
        this.setState({array:arr})
        //to empty the input field after name is submitted
    }
     handleChange = (text) => {
        this.setState({ value: text });
    }
    nameShowInModal = (id) =>{
        // this.setState({showModal: true, foundName:name });
        let list =  localStorage.name;
        const parsedList = JSON.parse(list)
        const item = parsedList.find((name) => name.uid === id)
        console.log(item)
        // console.log(parsedList)
        // const found = parsedList.find((nameValue) => name === nameValue);
        // console.log('found this', found);
        // this.setState({"foundName": item || '' });
        this.setState({
            activeItem: item,
            showModal:true,
        });
    }
    //here we are getting a full object as activeObject in paramerter for upadte function
    update = (activeObject) => {
        //craeting a copying atrray and spreading old values so if we update in future old value will be retain
            const copyingArray = [...this.state.array]
            //updating name by mapping the copied array and searching for the condition to be true
            const updating = copyingArray.map((val) => {
               if (activeObject.uid ===val.uid) {
                   val.name = activeObject.name
               }
               return val;
            });
            // const array = [...this.state.array];
            // const idx = array.indexOf(prevName);
            // array[idx] = newName;
            // localStorage.setItem('name',JSON.stringify(array))
            // this.setState({array});
            localStorage.setItem('name',JSON.stringify(updating))
            this.setState({updating});
    }
    hideModal = () => {
        this.setState({showModal: false})
    }
    dataDelete = (elemIndex) => {
             // const confirm = confirm('Are You Sure You want to delete this item');
            // if(confirm === true){
            const list = localStorage.name;
            // convert to array
            const parsedList = JSON.parse(list)
            const filteredArray = parsedList.filter((element) => {
            console.log(element.uid, elemIndex, element.uid !== elemIndex);
            return element.uid !== elemIndex;
        });
        // console.log('filtered', filteredArray);
        // console.log(elemIndex,  "index");
        this.setState({ array: filteredArray });
        localStorage.setItem('name', JSON.stringify(filteredArray));
        // console.log(this.state.array)
    // }
    // else{
    //     return false;
    // }
    }
    handleSearch(nameSearching) {
        this.setState({searchedTerm: nameSearching})
        // console.log(searchedTerm)
    }
    helperMethod = () => {
        // console.log('state', JSON.stringify(this.state, false, 2));
     return (
            <div >
              <CreateName 
              handleChangeName = {this.handleChange}
              submitName = {this.handleFormSubmit}
              />
               <SearchBar 
               searchName={this.handleSearch} 
               />
               <NameList 
               searchedTerm = {this.state.searchedTerm}
               array = {this.state.array}
               delete = {this.dataDelete}
               edit = {this.nameShowInModal}
               />
                 <MyModal
                    showModal={this.state.showModal}
                    hideModal={this.hideModal}
                    activeObject={this.state.activeItem}
                    updatedName = {this.update}
                />
            </div>
            );
    }
    render(){
        return <div>{this.helperMethod()}
        </div>
    }
}
ReactDOM.render(<App/>,document.querySelector('#root'));